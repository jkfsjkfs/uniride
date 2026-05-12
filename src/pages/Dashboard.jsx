export default function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard conductor</h1>

      <div className="cards-grid">
        <div className="card">
          <h3>Ganancias</h3>
          <p>$120.000</p>
        </div>

        <div className="card">
          <h3>Viajes activos</h3>
          <p>4</p>
        </div>

        <div className="card">
          <h3>Solicitudes</h3>
          <p>7 pendientes</p>
        </div>
      </div>
    </div>
  );
}
