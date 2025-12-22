
import React, { useState } from 'react';
import { GameType } from '../types';

const CheckTicket: React.FC = () => {
  const [activeTab, setActiveTab] = useState(GameType.PRIMITIVA);

  return (
    <div className="px-6 lg:px-40 py-8 w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black tracking-tight text-[#111813]">Comprueba tus Resultados</h1>
          <p className="text-[#63886f] text-lg">Selecciona tu juego e introduce los números para ver si has ganado.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[20px]">history</span>
          Ver sorteos anteriores
        </button>
      </div>

      <div className="w-full overflow-x-auto pb-2 mb-8 no-scrollbar">
        <div className="flex min-w-max border-b border-[#dce5df] gap-8 px-2">
          {Object.values(GameType).filter(v => v !== GameType.EURODREAMS).map((g) => (
            <button
              key={g}
              onClick={() => setActiveTab(g)}
              className={`group flex flex-col items-center pb-4 border-b-[3px] transition-all ${activeTab === g ? 'border-primary' : 'border-transparent hover:border-gray-300'
                }`}
            >
              <p className={`font-bold text-sm tracking-wide ${activeTab === g ? 'text-primary' : 'text-[#63886f] group-hover:text-[#111813]'
                }`}>{g}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-[#f0f4f2]">
            <div className="mb-8">
              <label className="flex flex-col gap-3">
                <span className="text-[#111813] text-base font-bold">Fecha del Sorteo</span>
                <div className="relative">
                  <select className="w-full appearance-none rounded-2xl bg-white border border-[#dce5df] text-[#111813] h-14 pl-5 pr-12 text-base focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer shadow-sm">
                    <option>Jueves, 12 Oct 2023 (Último)</option>
                    <option>Lunes, 09 Oct 2023</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#63886f]">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                </div>
              </label>
            </div>
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-[#111813] text-lg font-bold">Introduce tus Números</h3>
                <button className="text-sm text-[#63886f] hover:text-primary font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">casino</span> Aleatorio
                </button>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                {[12, 4, 28, '', '', ''].map((val, i) => (
                  <input key={i} className="w-14 h-14 md:w-16 md:h-16 rounded-full text-center text-2xl font-black bg-white border-2 border-[#dce5df] focus:border-primary focus:ring-4 focus:ring-primary/20 text-[#111813] outline-none transition-all shadow-sm placeholder:text-gray-300" placeholder="-" defaultValue={val} maxLength={2} />
                ))}
                <div className="flex items-center justify-center w-4 md:w-6"><span className="text-2xl text-gray-300">+</span></div>
                <input className="w-14 h-14 md:w-16 md:h-16 rounded-full text-center text-2xl font-black bg-[#fff8e1] border-2 border-yellow-400 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-400/20 text-yellow-700 outline-none transition-all shadow-sm placeholder:text-yellow-400/50" placeholder="R" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#f0f4f2]">
              <button className="flex-1 bg-primary hover:bg-primary-dark text-white h-14 rounded-full text-lg font-bold shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                Comprobar Boleto <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-8 h-14 rounded-full text-base font-bold text-[#63886f] hover:bg-gray-100 transition-colors">Limpiar</button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#112116] to-[#1c3324] rounded-2xl p-6 flex items-center justify-between text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="font-bold text-lg mb-1">Próximo Bote: 15.000.000 €</p>
              <p className="text-sm text-gray-300">El sorteo es mañana a las 21:00. ¡No te lo pierdas!</p>
            </div>
            <div className="relative z-10 bg-white/10 p-3 rounded-full backdrop-blur-sm">
              <span className="material-symbols-outlined text-yellow-400 fill">stars</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-primary/20 relative animate-fade-in-up">
            <div className="bg-primary/10 p-6 flex flex-col items-center justify-center border-b border-dashed border-primary/30 relative">
              <div className="absolute top-4 right-4"><span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">GANADOR</span></div>
              <div className="size-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/40">
                <span className="material-symbols-outlined text-4xl fill">emoji_events</span>
              </div>
              <h3 className="text-2xl font-black text-[#111813] mb-1">¡Felicidades!</h3>
              <p className="text-[#63886f] font-medium">Has acertado 3 números</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm font-bold text-[#63886f] uppercase tracking-wider mb-2">Premio Total</p>
              <p className="text-5xl font-black text-[#111813] tracking-tight">12,00 €</p>
              <div className="mt-6 p-4 bg-background-light rounded-2xl flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm"><span className="text-gray-500">Sorteo</span><span className="font-bold">#2384 - 12 Oct</span></div>
                <div className="flex justify-between items-center text-sm"><span className="text-gray-500">Categoría</span><span className="font-bold">5º Premio</span></div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <button className="w-full py-3 text-primary font-bold hover:bg-primary/5 rounded-xl transition-colors">Ver desglose completo</button>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-[#f0f4f2]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-[#111813]">Comprobaciones Recientes</h3>
              <button className="text-primary text-sm font-bold hover:underline">Limpiar Todo</button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { date: 'Ayer', game: GameType.BONOLOTO, nums: '04 15 22 34 41 48', win: false },
                { date: '08 Oct', game: GameType.PRIMITIVA, nums: '02 11 25 33 40 45', win: true, amount: '8,00 €' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`size-10 rounded-full flex items-center justify-center ${item.win ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                      <span className="material-symbols-outlined text-[20px]">{item.win ? 'check' : 'close'}</span>
                    </div>
                    <div>
                      <div className="flex gap-1 text-xs font-medium text-gray-400 mb-0.5">
                        <span>{item.date}</span><span>•</span><span>{item.game}</span>
                      </div>
                      <p className="text-sm font-bold text-[#111813] group-hover:text-primary transition-colors">{item.nums}</p>
                    </div>
                  </div>
                  {item.win ? <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">{item.amount}</span> : <span className="material-symbols-outlined text-gray-300">chevron_right</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckTicket;
