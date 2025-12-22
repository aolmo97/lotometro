
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import CheckTicket from './pages/CheckTicket';
import Historical from './pages/Historical';
import Rules from './pages/Rules';
import ChristmasDraw from './pages/ChristmasDraw';
import ChildDraw from './pages/ChildDraw';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/results', label: 'Resultados' },
    { path: '/navidad', label: 'Navidad' },
    { path: '/nino', label: 'El Niño' },
    { path: '/check', label: 'Comprobar' },
    { path: '/historical', label: 'Estadísticas' },
    { path: '/rules', label: 'Reglas' }
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e9e7] bg-white/95 backdrop-blur px-8 py-3 shadow-sm">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 text-[#111813]">
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-4xl leading-none fill">casino</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Lotometro</h2>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.path ? 'text-primary' : 'text-[#63886f]'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <label className="hidden lg:flex flex-col min-w-40 h-10 w-64">
          <div className="flex w-full flex-1 items-center rounded-xl bg-[#f0f4f2] px-3 transition-all focus-within:ring-2 focus-within:ring-primary/50">
            <span className="material-symbols-outlined text-[#63886f]">search</span>
            <input className="w-full min-w-0 bg-transparent px-2 text-sm text-[#111813] placeholder:text-[#63886f] focus:outline-none border-none" placeholder="Buscar sorteos..." />
          </div>
        </label>
        <button className="flex h-10 items-center justify-center rounded-full bg-primary hover:bg-primary-dark transition-colors px-6 text-white text-sm font-bold shadow-lg shadow-primary/20">
          <span className="truncate">Acceder</span>
        </button>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-[#e5e9e7] py-12 px-8">
    <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 text-[#111813] mb-4">
          <div className="size-6 text-primary">
            <span className="material-symbols-outlined fill">casino</span>
          </div>
          <h2 className="text-lg font-bold">Lotometro</h2>
        </div>
        <p className="text-sm text-[#63886f] mb-4 leading-relaxed">
          Tu fuente de confianza para resultados, estadísticas y datos históricos de la lotería española. Juega con responsabilidad.
        </p>
        <div className="flex gap-4">
          <a className="text-[#63886f] hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
          <a className="text-[#63886f] hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-4">Juegos</h4>
        <ul className="flex flex-col gap-2 text-sm text-[#63886f]">
          <li><Link to="/rules" className="hover:text-primary">Euromillones</Link></li>
          <li><Link to="/rules" className="hover:text-primary">La Primitiva</Link></li>
          <li><Link to="/rules" className="hover:text-primary">Bonoloto</Link></li>
          <li><Link to="/rules" className="hover:text-primary">El Gordo</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Herramientas</h4>
        <ul className="flex flex-col gap-2 text-sm text-[#63886f]">
          <li><Link to="/check" className="hover:text-primary">Generador de Números</Link></li>
          <li><Link to="/historical" className="hover:text-primary">Archivo Histórico</Link></li>
          <li><Link to="/historical" className="hover:text-primary">Estadísticas</Link></li>
          <li><a className="hover:text-primary" href="#">Calculadora de Impuestos</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Descarga la App</h4>
        <div className="flex flex-col gap-3">
          <button className="bg-[#111813] text-white rounded-lg px-4 py-2 flex items-center gap-3 w-fit hover:opacity-90">
            <span className="material-symbols-outlined">android</span>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase">Disponible en</span>
              <span className="font-bold text-sm">Google Play</span>
            </div>
          </button>
          <button className="bg-[#111813] text-white rounded-lg px-4 py-2 flex items-center gap-3 w-fit hover:opacity-90">
            <span className="material-symbols-outlined">ad_units</span>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] uppercase">Consíguelo en</span>
              <span className="font-bold text-sm">App Store</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-[1200px] mt-12 pt-8 border-t border-[#e5e9e7] text-center text-xs text-[#63886f]">
      <p>© 2024 Lotometro. Todos los derechos reservados. +18 Juega con Responsabilidad.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/check" element={<CheckTicket />} />
            <Route path="/historical" element={<Historical />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/navidad" element={<ChristmasDraw />} />
            <Route path="/nino" element={<ChildDraw />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
