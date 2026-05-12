import { useNavigate } from 'react-router-dom';

export default function BuscarViaje() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card form-card">
        <h2>Buscar viaje</h2>

        <input placeholder="Origen" />
        <input placeholder="Destino" />
        <input type="date" />

        <button onClick={() => navigate('/resultados')}>
          Buscar
        </button>
      </div>
    </div>
  );
}
