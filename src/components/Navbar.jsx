import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>UniRide</h2>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/buscar">Buscar</Link>
        <Link to="/publicar">Publicar</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
