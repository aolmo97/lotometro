
import React from 'react';
import { LATEST_RESULTS, UPCOMING_DRAWS } from '../constants';
import Ball from '../components/Ball';
import { GameType } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="w-full px-4 md:px-10 lg:px-40 py-8">
        <div className="mx-auto max-w-[1200px] w-full">
          <div className="relative overflow-hidden rounded-3xl bg-surface-light shadow-xl border border-[#e5e9e7]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent hidden md:block"></div>
            <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12 items-center">
              <div className="flex-1 z-10">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary-dark mb-4">
                  <span className="material-symbols-outlined text-sm fill">stars</span> Próximo Gran Sorteo
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-4">
                  Euromillones <br />
                  <span className="text-primary">130.000.000 €</span>
                </h1>
                <p className="text-lg text-[#63886f] mb-8 max-w-lg leading-relaxed">
                  No te pierdas el Súper Sorteo de este viernes. Resultados oficiales de la lotería estatal actualizados en tiempo real.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex h-12 items-center justify-center rounded-full bg-primary hover:bg-primary-dark transition-colors px-8 text-white text-base font-bold shadow-lg shadow-primary/30">
                    Juega Ahora
                  </button>
                  <button className="flex h-12 items-center justify-center rounded-full bg-[#f0f4f2] hover:bg-[#e1eae6] transition-colors px-8 text-[#111813] text-base font-bold">
                    Ver Sorteos Anteriores
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center md:justify-end z-10">
                <div className="relative w-full max-w-sm aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-[#001745]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="size-20 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg border-4 border-white transform -rotate-12">
                        <span className="text-2xl font-black text-[#001745]">€</span>
                      </div>
                      <div className="size-24 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-white transform rotate-6 mt-8">
                        <span className="text-2xl font-black text-white">130M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Upcoming Jackpots */}
      <div className="w-full px-4 md:px-10 lg:px-40 pb-8">
        <div className="mx-auto max-w-[1200px] w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {UPCOMING_DRAWS.map((draw, idx) => (
              <div key={idx} className="flex flex-col gap-1 rounded-2xl p-5 bg-surface-light border border-[#e5e9e7] shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`size-2 rounded-full ${draw.color}`}></span>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#63886f]">{draw.game}</p>
                </div>
                <p className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-primary transition-colors">{draw.jackpot}</p>
                <p className="text-xs text-[#63886f]">Sorteo: {draw.day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Draw Results */}
      <div className="w-full px-4 md:px-10 lg:px-40 py-8 bg-[#f0f4f2]/50">
        <div className="mx-auto max-w-[1200px] w-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em]">Últimos Resultados</h2>
            <a className="text-sm font-bold text-primary hover:text-primary-dark flex items-center gap-1" href="#/results">
              Ver Todos <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LATEST_RESULTS.map((res) => (
              <div key={res.id} className="flex flex-col rounded-3xl bg-surface-light p-6 shadow-sm border border-[#e5e9e7]">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${res.game === GameType.EUROMILLONES ? 'bg-[#001745]' :
                        res.game === GameType.PRIMITIVA ? 'bg-primary' :
                          res.game === GameType.BONOLOTO ? 'bg-gray-800' : 'bg-red-600'
                      }`}>
                      <span className="text-white font-black text-xl">
                        {res.game.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{res.game}</h3>
                      <p className="text-sm text-[#63886f]">{res.date}</p>
                    </div>
                  </div>
                  <button className="size-10 rounded-full bg-[#f0f4f2] flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">qr_code_scanner</span>
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
                  {res.numbers.map((n, i) => <Ball key={i} number={n} />)}
                  {(res.stars || res.reintegro || res.complementary) && (
                    <div className="h-8 w-px bg-gray-300 mx-1"></div>
                  )}
                  {res.stars?.map((s, i) => <Ball key={i} number={s} type="star" />)}
                  {res.reintegro !== undefined && (
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] uppercase font-bold text-[#63886f] leading-none mb-1">R</span>
                      <Ball number={res.reintegro} type="regular" size="sm" />
                    </div>
                  )}
                  {res.complementary !== undefined && (
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] uppercase font-bold text-[#63886f] leading-none mb-1">C</span>
                      <Ball number={res.complementary} type="complementary" size="sm" />
                    </div>
                  )}
                </div>
                <div className="mt-auto pt-4 border-t border-[#e5e9e7] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#63886f]">
                    <span className="material-symbols-outlined text-base">verified</span>
                    Resultados Oficiales
                  </div>
                  <button className="text-sm font-bold text-primary hover:underline">Comprobar mi décimo</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Check Section */}
      <div className="w-full px-4 md:px-10 lg:px-40 py-12">
        <div className="mx-auto max-w-[1200px] w-full">
          <div className="rounded-3xl bg-surface-light border border-[#e5e9e7] overflow-hidden flex flex-col md:flex-row shadow-lg">
            <div className="md:w-1/3 bg-primary/10 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">Comprobación Rápida</h3>
              <p className="text-[#63886f] mb-6">¿Tienes un boleto? Introduce tus números para ver si has ganado al instante.</p>
              <div className="h-32 w-full bg-center bg-contain bg-no-repeat opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2tQraFwM3V8BiAnE1w7Z674Zfq9pIioowC7uT8CRCumzphi152hWlGvdJ-IKhC-noT2dJC_rW_eTzdNd5Onb5dTtZQqdej53-AwJxsei3EKcgd8okPYWHXMkFnYxJEVrpv_dty_7TYKXR0oGVkr6uuF1ReYrP2d-jQfJWPcPHhm38yJmSfznz5VDvBS8Y1E4SLvFvID8ybBip1NS1hnagmVWeTimlVpnR6sUBfvmPAj135TJKM3odlnQeXhn4nftOxAN1MGzKnxZj')" }}></div>
            </div>
            <div className="md:w-2/3 p-8">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold mb-2">Selecciona Juego</label>
                  <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {Object.values(GameType).filter(v => v !== GameType.EURODREAMS).map((g, i) => (
                      <button key={i} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all ${i === 0 ? 'bg-primary text-white shadow-md' : 'bg-[#f0f4f2] hover:bg-[#e1eae6]'}`} type="button">
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Introduce Números</label>
                  <div className="flex gap-2 flex-wrap">
                    {[1, 2, 3, 4, 5].map(i => (
                      <input key={i} className="h-12 w-12 rounded-xl text-center font-bold text-lg bg-[#f0f4f2] border-none focus:ring-2 focus:ring-primary" placeholder="-" type="text" maxLength={2} />
                    ))}
                    <span className="flex items-center text-gray-400">+</span>
                    {[1, 2].map(i => (
                      <input key={i} className="h-12 w-12 rounded-xl text-center font-bold text-lg border-2 border-primary/30 bg-[#f0f4f2] focus:border-primary focus:ring-0" placeholder="★" type="text" maxLength={2} />
                    ))}
                  </div>
                </div>
                <button className="mt-2 w-full md:w-auto self-start rounded-full bg-[#111813] text-white px-8 py-3 font-bold hover:opacity-90 transition-opacity">
                  Comprobar mis números
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
