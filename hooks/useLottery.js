import { useState, useEffect, useCallback } from 'react';
import { fetchAllResults, findNumberInResults, getMainPrizes } from '../services/lotteryApi';

const BASE_STORAGE_KEY = 'lotometro_numbers';

export const useLottery = (drawType = 'christmas_2025') => {
    const storageKey = `${BASE_STORAGE_KEY}_${drawType}`;

    const [numbers, setNumbers] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : [];
    });
    const [results, setResults] = useState({});
    const [mainPrizes, setMainPrizes] = useState({});
    const [lastUpdated, setLastUpdated] = useState(null);
    const [loading, setLoading] = useState(false);

    // Update numbers and reset results when drawType changes
    useEffect(() => {
        const saved = localStorage.getItem(storageKey);
        setNumbers(saved ? JSON.parse(saved) : []);
        setResults({});
        setMainPrizes({});
        setLastUpdated(null);
    }, [drawType]);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(numbers));
    }, [numbers, storageKey]);

    const addNumber = (number, amount, description = '') => {
        if (numbers.some(n => n.number === number)) return;
        setNumbers(prev => [...prev, { number, amount: parseFloat(amount), description }]);
    };

    const removeNumber = (number) => {
        setNumbers(prev => prev.filter(n => n.number !== number));
        setResults(prev => {
            const newResults = { ...prev };
            delete newResults[number];
            return newResults;
        });
    };

    const checkAllNumbers = useCallback(async () => {
        setLoading(true);

        try {
            const allData = await fetchAllResults(drawType);
            if (allData) {
                const newResults = {};
                let currentTotalPrize = 0;

                numbers.forEach(item => {
                    const result = findNumberInResults(allData, item.number);
                    if (result) {
                        newResults[item.number] = result;
                        currentTotalPrize += parseFloat(result.prize || 0);
                    }
                });

                setMainPrizes(getMainPrizes(allData));

                setResults(prevResults => {
                    let prevTotalPrize = 0;
                    Object.values(prevResults).forEach(r => {
                        prevTotalPrize += parseFloat(r.prize || 0);
                    });

                    if (currentTotalPrize > prevTotalPrize && prevTotalPrize > 0) {
                        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
                        audio.play().catch(e => console.log("Audio play blocked by browser:", e));
                    }
                    return newResults;
                });

                setLastUpdated(new Date());
            }
        } catch (error) {
            console.error("Error refreshing lottery results:", error);
        } finally {
            setLoading(false);
        }
    }, [numbers, drawType]);

    // Auto-refresh every 5 minutes (300000 ms)
    useEffect(() => {
        checkAllNumbers(); // Initial check
        const interval = setInterval(checkAllNumbers, 300000);
        return () => clearInterval(interval);
    }, [checkAllNumbers]);

    return { numbers, addNumber, removeNumber, results, mainPrizes, loading, lastUpdated, checkAllNumbers };
};
