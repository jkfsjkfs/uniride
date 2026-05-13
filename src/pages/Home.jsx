import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container hero">
      <div>
        <h1>Movilidad inteligente para estudiantes</h1>

        <p>
          Comparte rutas seguras entre estudiantes del Tecnológico de Antioquia.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate('/buscar')}>
            Buscar viaje
          </button>

          <button
            className="secondary"
            onClick={() => navigate('/publicar')}
          >
            Publicar viaje
          </button>
        </div>
      </div>

      <img
        src={heroImg}
        alt="UniRide"
      />
    </div>
  );
}