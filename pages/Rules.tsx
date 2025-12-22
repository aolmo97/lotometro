
import React from 'react';
import { GameType } from '../types';

const Rules: React.FC = () => {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:px-10 gap-8 flex flex-col lg:flex-row">
      <aside className="w-full lg:w-72 flex-shrink-0">
        <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col px-3">
              <h1 className="text-[#111813] text-lg font-bold">Seleccionar Juego</h1>
              <p className="text-[#63886f] text-sm">Navega por las reglas</p>
            </div>
            <div className="flex flex-col gap-1">
              {['Vista General', GameType.PRIMITIVA, GameType.EUROMILLONES, GameType.BONOLOTO, GameType.EL_GORDO].map((item, idx) => (
                <button key={idx} className={`flex items-center gap-3 px-3 py-3 rounded-full transition-colors ${idx === 1 ? 'bg-primary/10' : 'hover:bg-[#f0f4f2] group'}`}>
                  <span className={`material-symbols-outlined ${idx === 1 ? 'fill text-primary' : 'text-[#63886f] group-hover:text-[#111813]'}`}>{idx === 0 ? 'info' : 'grid_view'}</span>
                  <span className={`text-sm ${idx === 1 ? 'text-[#111813] font-bold' : 'text-[#111813] font-medium'}`}>{item}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#f0f4f2] px-3">
              <p className="text-xs font-medium text-[#63886f] uppercase tracking-wider mb-3">Recursos</p>
              <a className="flex items-center gap-3 py-2 text-sm font-medium text-[#111813] hover:text-primary" href="#"><span className="material-symbols-outlined text-[20px]">help</span>Preguntas Frecuentes</a>
              <a className="flex items-center gap-3 py-2 text-sm font-medium text-[#111813] hover:text-primary" href="#"><span className="material-symbols-outlined text-[20px]">gavel</span>Términos Legales</a>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col gap-8 min-w-0">
        <div>
          <h1 className="text-[#111813] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] mb-2">La Primitiva</h1>
          <p className="text-[#63886f] text-lg">El juego de lotería más antiguo y popular de España. Los sorteos se celebran todos los jueves y sábados.</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm border border-[#f0f4f2]">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch">
            <div className="flex-1 flex flex-col gap-4 py-2">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-[#0a3818] mb-3"><span className="material-symbols-outlined fill text-primary text-[14px]">bolt</span>Próximo Sorteo: Jueves 21:40</span>
                <h2 className="text-2xl font-bold text-[#111813] mb-2">Gana hasta 100 Millones de euros</h2>
                <p className="text-[#63886f] leading-relaxed">La Primitiva consiste en elegir 6 números de una tabla de 1 al 49. Además, se asigna automáticamente a tu boleto un número de Reintegro (0-9).</p>
              </div>
              <button className="bg-primary hover:bg-[#14b549] text-white font-bold rounded-full px-6 py-3 inline-flex items-center gap-2 transition-colors self-start"><span>Consultar Resultados</span><span className="material-symbols-outlined">arrow_forward</span></button>
            </div>
            <div className="w-full md:w-1/3 aspect-video md:aspect-auto rounded-lg bg-cover bg-center overflow-hidden relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbeLkavvnmBICut5KIjceBKUgIYEm2kfq4d032CAy4SaZkLLroRvPnnGwpteIe4-UEHFb2df3pzKDiojZf_Q93OLirrQDnPbq_RYP-YAH-MP8e58RtKyYKDe3oRnggzt2aUs1ZOPyswva0lKEFlXZPooNUa2BtXFs3h_4ILm3-9nK_8flNzH_rX1Wj9ZfCm-xveLfaaXsvRsD-LJ7DWCUQOOQ-cP96S4JThcjyucYduQjgYH96CQmjVSWNqzQr834cHLoauMkTXM5e')" }}></div>
          </div>
        </div>

        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between"><h3 className="text-xl font-bold text-[#111813]">Cómo Jugar</h3><a className="text-primary text-sm font-bold hover:underline" href="#">Ver Tutorial en Vídeo</a></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { i: 'filter_1', t: 'Elige 6 Números', d: 'Elige 6 números distintos de una tabla del 1 al 49 manualmente o usa la selección aleatoria.' },
              { i: 'filter_2', t: 'El Reintegro', d: 'Se asigna un número aleatorio (0-9) a tu boleto. Acertarlo supone la devolución del importe.' },
              { i: 'filter_3', t: 'Joker Opcional', d: 'Por 1 € más, participa en el sorteo del Joker para tener la oportunidad de ganar hasta 1 M€.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-[#dce5df] flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className="size-10 rounded-full bg-[#f0f4f2] flex items-center justify-center text-[#111813]"><span className="material-symbols-outlined">{step.i}</span></div>
                <div><h4 className="font-bold text-[#111813] mb-1">{step.t}</h4><p className="text-sm text-[#63886f]">{step.d}</p></div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#111813]">Estructura de Premios</h3>
            <div className="overflow-hidden rounded-xl border border-[#dce5df] bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f0f4f2] text-[#111813] text-sm uppercase tracking-wide">
                  <tr><th className="px-6 py-4 font-bold">Categoría</th><th className="px-6 py-4 font-bold">Aciertos</th><th className="px-6 py-4 font-bold text-right">Premio Est.</th></tr>
                </thead>
                <tbody className="divide-y divide-[#f0f4f2] text-sm text-[#63886f]">
                  <tr><td className="px-6 py-4 font-medium text-[#111813]">Especial</td><td className="px-6 py-4">6 Números + Reintegro</td><td className="px-6 py-4 text-right font-bold text-primary">Bote</td></tr>
                  <tr><td className="px-6 py-4 font-medium text-[#111813]">1ª Categoría</td><td className="px-6 py-4">6 Números</td><td className="px-6 py-4 text-right font-medium text-[#111813]">~1.500.000 €</td></tr>
                  <tr><td className="px-6 py-4 font-medium text-[#111813]">2ª Categoría</td><td className="px-6 py-4">5 Números + C</td><td className="px-6 py-4 text-right font-medium text-[#111813]">~40.000 €</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#111813]">Detalles del Juego</h3>
            {[
              { i: 'calendar_month', t: 'Horario del Sorteo', d1: 'Jueves y Sábados', d2: '21:40 CET' },
              { i: 'payments', t: 'Precio de la Apuesta', d1: '1,00 € por columna (apuesta sencilla)', d2: '' }
            ].map((detail, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-[#dce5df] shadow-sm flex items-start gap-4">
                <div className="rounded-full bg-[#f0f4f2] p-2 shrink-0 text-[#111813]"><span className="material-symbols-outlined">{detail.i}</span></div>
                <div><h4 className="font-bold text-[#111813] text-base">{detail.t}</h4><p className="text-sm text-[#63886f] mt-1">{detail.d1}</p>{detail.d2 && <p className="text-sm text-[#63886f]">{detail.d2}</p>}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rules;
