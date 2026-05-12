export default function DetalleViaje() {
  return (
    <div className="page">
      <div className="card detail-card">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
          alt="map"
        />

        <h2>Ruta Universidad</h2>

        <p>Conductor: Juan Pérez</p>
        <p>Hora: 6:30 AM</p>
        <p>Cupos disponibles: 3</p>
        <p>Precio: $6.000</p>

        <button>Reservar cupo</button>
      </div>
    </div>
  );
}
