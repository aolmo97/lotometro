import React, { useState } from 'react';

export const InputSection = ({ onAdd }) => {
    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanNumber = number.padStart(5, '0');
        if (cleanNumber.length !== 5 || isNaN(cleanNumber)) {
            alert('El número debe tener 5 dígitos.');
            return;
        }
        if (!amount || amount <= 0) {
            alert('Introduce una cantidad válida.');
            return;
        }
        onAdd(cleanNumber, amount, description);
        setNumber('');
        setAmount('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-[#111813]">Número de 5 cifras</span>
                    <input
                        type="text"
                        placeholder="Ej. 12345"
                        value={number}
                        onChange={(e) => setNumber(e.target.value.replace(/\D/g, '').slice(0, 5))}
                        className="w-full h-14 px-5 rounded-2xl bg-background-light border border-[#dce5df] text-[#111813] font-bold text-xl placeholder:text-gray-300 focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-[#111813]">Euros jugados</span>
                    <div className="relative">
                        <input
                            type="number"
                            placeholder="Ej. 20"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full h-14 px-5 pr-10 rounded-2xl bg-background-light border border-[#dce5df] text-[#111813] font-bold text-xl placeholder:text-gray-300 focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm"
                        />
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#63886f] font-bold">€</span>
                    </div>
                </label>
            </div>

            <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-[#111813]">Descripción (Opcional)</span>
                <input
                    type="text"
                    placeholder="Ej. Trabajo, Familia..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-14 px-5 rounded-2xl bg-background-light border border-[#dce5df] text-[#111813] placeholder:text-gray-300 focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm"
                />
            </label>

            <button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
                <span className="material-symbols-outlined">add</span>
                Añadir Décimo
            </button>
        </form>
    );
};
