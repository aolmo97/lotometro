import React from 'react';

export const ResultsSection = ({ numbers, results, onRemove }) => {
    const formatCurrency = (val) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(val);
    };

    return (
        <div className="flex flex-col gap-4">
            {numbers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center opacity-40">
                    <span className="material-symbols-outlined text-6xl mb-2">sentiment_dissatisfied</span>
                    <p className="text-sm font-medium">Aún no has añadido números</p>
                </div>
            ) : (
                numbers.map((item) => {
                    const result = results[item.number];
                    let prizeMessage = "Aún nada...";
                    let totalWon = 0;
                    let isWinner = false;

                    if (result) {
                        const prizeValue = parseFloat(result.prize || 0);
                        totalWon = (prizeValue / 2000) * item.amount;

                        if (totalWon > 0) {
                            prizeMessage = `¡CON PREMIO!`;
                            isWinner = true;
                        } else {
                            prizeMessage = "Sin premio";
                        }
                    }

                    return (
                        <div key={item.number} className="group relative bg-background-light p-5 rounded-3xl border border-[#dce5df] hover:border-primary/50 transition-all hover:shadow-md">
                            <button
                                onClick={() => onRemove(item.number)}
                                className="absolute right-4 top-4 size-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white"
                                title="Eliminar"
                            >
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>

                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-3xl font-black text-[#111813] tracking-tighter">
                                    {item.number}
                                </h3>
                                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isWinner ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-200 text-gray-500'
                                    }`}>
                                    {prizeMessage}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                {item.description && (
                                    <p className="text-xs font-bold text-[#63886f] uppercase tracking-wide">
                                        {item.description}
                                    </p>
                                )}
                                <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200/50">
                                    <span className="text-xs font-medium text-gray-400">Jugado: {formatCurrency(item.amount)}</span>
                                    {isWinner && (
                                        <span className="text-lg font-black text-primary">
                                            {formatCurrency(totalWon)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
