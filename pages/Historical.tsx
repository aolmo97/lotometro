
import React from 'react';
import { GameType } from '../types';

const Historical: React.FC = () => {
  return (
    <div className="px-6 lg:px-40 py-8 w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-tight text-[#111813]">Archivo Histórico</h1>
          <p className="text-[#63886f] text-lg">Busca y analiza resultados de sorteos anteriores de todos los juegos.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]">file_download</span>
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-[#f0f4f2] mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <label className="flex flex-col gap-3">
            <span className="text-[#111813] text-sm font-bold">Seleccionar Juego</span>
            <select className="h-12 rounded-xl bg-[#f0f4f2] border-none px-4 text-sm font-medium focus:ring-2 focus:ring-primary">
              {Object.values(GameType).map(g => <option key={g}>{g}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-3">
            <span className="text-[#111813] text-sm font-bold">Año</span>
            <select className="h-12 rounded-xl bg-[#f0f4f2] border-none px-4 text-sm font-medium focus:ring-2 focus:ring-primary">
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </label>
          <label className="flex flex-col gap-3">
            <span className="text-[#111813] text-sm font-bold">Mes</span>
            <select className="h-12 rounded-xl bg-[#f0f4f2] border-none px-4 text-sm font-medium focus:ring-2 focus:ring-primary">
              <option>Todos los meses</option>
              {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map(m => <option key={m}>{m}</option>)}
            </select>
          </label>
          <div className="flex items-end">
            <button className="w-full h-12 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-md transition-all active:scale-[0.98]">
              Buscar Sorteos
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { date: 'Viernes, 24 May 2024', game: GameType.EUROMILLONES, nums: [5, 12, 23, 44, 48], extras: [8, 9], jackpot: '130 M€' },
          { date: 'Jueves, 23 May 2024', game: GameType.PRIMITIVA, nums: [2, 14, 21, 33, 45, 49], extras: [4], jackpot: '5,4 M€' },
          { date: 'Miércoles, 22 May 2024', game: GameType.BONOLOTO, nums: [3, 14, 22, 35, 41, 48], extras: [2], jackpot: '400k €' },
        ].map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-[#f0f4f2] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.game}</span>
                <span className="text-lg font-bold text-[#111813]">{item.date}</span>
              </div>
              <div className="h-10 w-px bg-gray-100 hidden md:block"></div>
              <div className="flex gap-2">
                {item.nums.map((n, i) => (
                  <div key={i} className="size-10 rounded-full bg-[#f0f4f2] flex items-center justify-center font-bold text-[#111813]">
                    {n}
                  </div>
                ))}
                {(item.extras || []).map((n, i) => (
                  <div key={i} className="size-10 rounded-full bg-yellow-400/20 text-yellow-700 flex items-center justify-center font-bold border border-yellow-400/30">
                    {n}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-end">
                <span className="text-xs font-medium text-[#63886f]">Bote en juego</span>
                <span className="text-xl font-black text-[#111813]">{item.jackpot}</span>
              </div>
              <button className="size-10 rounded-full bg-[#f0f4f2] flex items-center justify-center text-[#63886f] hover:bg-primary/20 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 bg-[#111813] text-white rounded-full font-bold hover:opacity-90 transition-opacity">
          Cargar más resultados
        </button>
      </div>
    </div>
  );
};

export default Historical;
