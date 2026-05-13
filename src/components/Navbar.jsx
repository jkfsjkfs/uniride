import { Link } from 'react-router-dom';
import tdeaLogo from '../assets/Horizontal-tdea.svg';

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <img src={tdeaLogo} alt="TdeA" />

        <h2>UniRide</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/buscar">Buscar</Link>
        <Link to="/publicar">Publicar</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}