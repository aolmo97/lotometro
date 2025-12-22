import React from 'react';
import { useLottery } from '../hooks/useLottery';
import { MainPrizes } from '../components/MainPrizes';
import { ResultsSection } from '../components/ResultsSection';
import { InputSection } from '../components/InputSection';

const ChristmasDraw: React.FC = () => {
  const drawType = 'christmas_2025';
  const {
    numbers,
    addNumber,
    removeNumber,
    results,
    mainPrizes,
    loading,
    lastUpdated,
    checkAllNumbers
  } = useLottery(drawType);

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 md:px-10 py-8">
      <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
        <h1 className="text-4xl font-black tracking-tight text-[#111813]">Lotería de Navidad</h1>
        <p className="text-[#63886f] text-lg">Gestiona tus décimos y comprueba los premios en tiempo real.</p>
        {lastUpdated && (
          <p className="text-xs text-[#63886f]">Última actualización: {lastUpdated.toLocaleTimeString()}</p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <section className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-[#f0f4f2]">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">add_circle</span>
              Añadir mis números
            </h2>
            <InputSection onAdd={addNumber} />
          </section>

          <section className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-[#f0f4f2]">
            <MainPrizes prizes={mainPrizes} drawType={drawType} />
          </section>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-8">
          <section className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-[#f0f4f2]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">confirmation_number</span>
                Mis Décimos
              </h2>
              {loading && <div className="animate-spin size-5 border-2 border-primary border-t-transparent rounded-full"></div>}
            </div>
            <ResultsSection
              numbers={numbers}
              results={results}
              onRemove={removeNumber}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChristmasDraw;
