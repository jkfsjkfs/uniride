import { useNavigate } from 'react-router-dom';

export default function Resultados() {
  const navigate = useNavigate();

  const viajes = [
    {
      nombre: 'Juan Pérez',
      carro: 'Mazda 3',
      precio: '$6.000',
      rating: '4.9',
    },
    {
      nombre: 'Laura Gómez',
      carro: 'Kia Picanto',
      precio: '$5.000',
      rating: '4.8',
    },
  ];

  return (
    <div className="page">
      <h1>Viajes disponibles</h1>

      <div className="cards-grid">
        {viajes.map((v, index) => (
          <div className="card" key={index}>
            <h3>{v.nombre}</h3>
            <p>{v.carro}</p>
            <p>{v.precio}</p>
            <p>⭐ {v.rating}</p>

            <button onClick={() => navigate('/detalle')}>
              Ver viaje
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
