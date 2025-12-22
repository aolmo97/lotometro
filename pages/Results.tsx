
import React from 'react';
import { GameType } from '../types';

const DRAWS = [
  { game: GameType.PRIMITIVA, desc: 'La lotería clásica española. Elige 6 números y comprueba si eres millonario.', days: 'Jue y Sáb', jackpot: '3.500.000 €', icon: 'casino', color: 'from-green-600 to-green-800' },
  { game: GameType.EUROMILLONES, desc: 'La lotería más grande de Europa. Botes masivos compartidos entre varios países.', days: 'Mar y Vie', jackpot: '17.000.000 €', icon: 'star', color: 'from-blue-700 to-indigo-900' },
  { game: GameType.BONOLOTO, desc: 'Asequible y frecuente. Los sorteos se realizan todos los días excepto el domingo.', days: 'Diario', jackpot: '400.000 €', icon: 'confirmation_number', color: 'from-gray-700 to-black' },
  { game: GameType.EL_GORDO, desc: 'El Gordo de la Primitiva ofrece botes mínimos garantizados cada domingo.', days: 'Domingo', jackpot: '5.400.000 €', icon: 'token', color: 'from-red-600 to-red-800' },
  { game: GameType.LOTERIA_NACIONAL, desc: 'Lotería tradicional española con una estructura de premios compleja y múltiples series.', days: 'Jue y Sáb', jackpot: '12.000.000 €', icon: 'airplane_ticket', color: 'from-blue-400 to-blue-600' },
  { game: GameType.EURODREAMS, desc: 'Gana hasta 20.000 €/mes durante 30 años con esta nueva lotería europea.', days: 'Lun y Jue', jackpot: '20k/mes', icon: 'bedtime', color: 'from-purple-500 to-purple-700' },
  { game: GameType.NAVIDAD, desc: 'La lotería más esperada del año. EL GORDO. 22 de diciembre.', days: '22 Dic', jackpot: '400.000 €', icon: 'featured_seasonal', color: 'from-gold-600 to-red-800' },
  { game: GameType.NINO, desc: 'La segunda lotería más grande del año. Se celebra el día de Reyes, 6 de enero.', days: '6 Ene', jackpot: '200.000 €', icon: 'auto_awesome', color: 'from-yellow-400 to-blue-600' },
];

const Results: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full max-w-[1200px] px-4 md:px-10 py-10 md:py-16">
        <div className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 md:p-16 min-h-[360px] relative overflow-hidden group shadow-lg" style={{ backgroundImage: "linear-gradient(rgba(17, 33, 22, 0.7), rgba(17, 33, 22, 0.85)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9ajDa_pq5Ap6UqYzDD-zS5N7jKn_Kzn3AISXtkAQ-Brw2GhLmm-SY-CijZ0zUnfNXeqKPC6FHglem_E0fljsqzhOF4Rf4MHfbIzTMl4SQTZzeRhXOmTs6rW4EHhIy9783q_isKYtCsAsQnFVyt4Dc422STHpO7xR2HiiWZue6EDGlJx-KOlYh3RhYMVJlys5mbTiGsoIrUhEzr4sTa6w_n-OllexZ-Vrfivx5LjrHy6W8Gjqa_3lkh8rLR5XhgM-RwAa2z5v64L4J')" }}>
          <div className="flex flex-col gap-3 text-center z-10 max-w-3xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase bg-white/10 backdrop-blur px-3 py-1 rounded-full w-fit mx-auto border border-white/10">Resultados Oficiales</span>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">Comprueba tus Resultados</h1>
            <h2 className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Selecciona una lotería para ver los últimos números ganadores, el desglose de premios y datos históricos.
            </h2>
          </div>
          <div className="z-10 w-full max-w-[520px] mt-4">
            <div className="flex w-full items-center rounded-full bg-white shadow-xl p-1.5 border border-[#dce5df] focus-within:ring-2 focus-within:ring-primary transition-all">
              <div className="pl-4 text-[#63886f]"><span className="material-symbols-outlined">search</span></div>
              <input className="w-full bg-transparent border-none focus:ring-0 text-[#111813] placeholder:text-[#63886f] text-base py-3 px-3" placeholder="Buscar un sorteo (ej. Bonoloto)..." type="text" />
              <button className="bg-primary hover:bg-green-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors whitespace-nowrap">Buscar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="w-full max-w-[1200px] px-4 md:px-10 pb-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-[#111813] text-3xl font-bold leading-tight tracking-[-0.015em]">Sorteos Disponibles</h2>
              <p className="text-[#63886f] mt-2 text-base">Selecciona un juego para ver resultados detallados y la distribución de premios.</p>
            </div>
            <div className="flex gap-2 bg-[#e8edea] p-1 rounded-full w-fit">
              <button className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-bold text-[#111813]">Vista Cuadrícula</button>
              <button className="px-4 py-2 text-gray-500 hover:text-[#111813] transition-colors text-sm font-medium">Vista Lista</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DRAWS.map((d, i) => (
              <div key={i} className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#f0f4f2]">
                <div className={`h-32 bg-gradient-to-r ${d.color} relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="material-symbols-outlined text-white/20 text-9xl absolute -right-4 -bottom-8 rotate-12">{d.icon}</span>
                  <div className="size-16 rounded-full bg-white flex items-center justify-center shadow-lg z-10">
                    <span className="material-symbols-outlined text-gray-800 text-3xl">{d.icon}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#111813] group-hover:text-primary transition-colors">{d.game}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{d.days}</span>
                  </div>
                  <p className="text-[#63886f] text-sm mb-6 flex-1 leading-relaxed">{d.desc}</p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-[#111813]">
                      <span className="material-symbols-outlined text-primary text-lg">calendar_month</span>
                      <span>Próximo Sorteo: <span className="font-semibold">{d.days}</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#111813]">
                      <span className="material-symbols-outlined text-yellow-500 text-lg">payments</span>
                      <span>Bote: <span className="font-bold">{d.jackpot}</span></span>
                    </div>
                    <button className="mt-4 w-full py-3 rounded-full border-2 border-[#e8edea] text-[#111813] font-bold hover:border-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                      Ver Resultados <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
