import React from 'react';

export const MainPrizes = ({ prizes, drawType }) => {
    if (!prizes) return null;

    const isNino = drawType === 'child_2025';

    const prizeList = isNino ? [
        { label: '1º PREMIO', key: 'gordo', amount: '200.000€', color: 'bg-yellow-400' },
        { label: '2º PREMIO', key: 'segundo', amount: '75.000€', color: 'bg-slate-300' },
        { label: '3º PREMIO', key: 'tercero', amount: '25.000€', color: 'bg-orange-400' },
        { label: 'CUATRO CIFRAS', key: 'p4', amount: '350€', color: 'bg-gray-200' },
        { label: 'TRES CIFRAS', key: 'p3', amount: '100€', color: 'bg-gray-200' },
        { label: 'DOS CIFRAS', key: 'p2', amount: '40€', color: 'bg-gray-200' },
        { label: 'REINTEGROS', key: 'reintegros', amount: '20€', color: 'bg-yellow-100 text-yellow-700' },
    ] : [
        { label: '1º PREMIO (EL GORDO)', key: 'gordo', amount: '400.000€', color: 'bg-yellow-400' },
        { label: '2º PREMIO', key: 'segundo', amount: '125.000€', color: 'bg-slate-300' },
        { label: '3º PREMIO', key: 'tercero', amount: '50.000€', color: 'bg-orange-400' },
        { label: '4º PREMIOS', key: 'cuartos', amount: '20.000€', color: 'bg-gray-200' },
        { label: '5º PREMIOS', key: 'quintos', amount: '6.000€', color: 'bg-gray-200' },
    ];

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-[#111813]">
                    <span className="material-symbols-outlined text-primary fill">stars</span>
                    Lista Oficial de Premios
                </h2>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#63886f] bg-gray-100 px-2 py-1 rounded-md">
                    Actualizado
                </span>
            </div>

            <div className="flex flex-col gap-3">
                {prizeList.map((prize) => {
                    const numbers = prizes[prize.key] || [];
                    const isDrawn = numbers.length > 0;

                    return (
                        <div key={prize.key} className={`flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl border transition-all ${isDrawn ? 'bg-white border-primary/20 shadow-sm' : 'bg-background-light border-transparent'
                            }`}>
                            <div className="flex items-center gap-4 mb-3 md:mb-0">
                                <div className={`size-10 flex items-center justify-center rounded-full font-black text-xs ${prize.color}`}>
                                    {prize.label.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-black text-[#111813]">{prize.label}</span>
                                    <span className="text-xs font-bold text-[#63886f]">{prize.amount} al décimo</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                                {isDrawn ? (
                                    numbers.map(num => (
                                        <span key={num} className="font-black text-xl tracking-tighter text-[#111813] bg-background-light px-3 py-1 rounded-lg border border-gray-100">
                                            {num}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-gray-300 font-black tracking-widest italic">ESPERANDO...</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
