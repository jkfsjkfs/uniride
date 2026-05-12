import { useNavigate } from 'react-router-dom';

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
        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop"
        alt="car"
      />
    </div>
  );
}
