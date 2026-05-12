import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import BuscarViaje from './pages/BuscarViaje';
import Resultados from './pages/Resultados';
import DetalleViaje from './pages/DetalleViaje';
import PublicarViaje from './pages/PublicarViaje';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<BuscarViaje />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/detalle" element={<DetalleViaje />} />
        <Route path="/publicar" element={<PublicarViaje />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
