export default function PublicarViaje() {
  return (
    <div className="page">
      <div className="card form-card">
        <h2>Publicar viaje</h2>

        <input placeholder="Origen" />
        <input placeholder="Destino" />
        <input type="time" />
        <input placeholder="Cupos" />
        <input placeholder="Precio" />

        <button>Publicar</button>
      </div>
    </div>
  );
}
