import mapaImg from '../assets/mapa.png';

export default function DetalleViaje() {

  return (
    <div style={styles.page}>

      <div style={styles.layout}>

        {/* MAPA */}
        <div style={styles.mapCard}>

          <img
            src={mapaImg}
            alt="Mapa"
            style={styles.map}
          />

        </div>

        {/* INFO VIAJE */}
        <div style={styles.infoCard}>

          <div style={styles.driverHeader}>

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="driver"
              style={styles.driverImg}
            />

            <div>
              <h2 style={styles.driverName}>
                Juan Pérez
              </h2>

              <p style={styles.driverSubtitle}>
                Conductor verificado ⭐ 4.9
              </p>
            </div>

          </div>

          <div style={styles.tripData}>

            <div style={styles.dataItem}>
              <strong>Ruta:</strong>
              <span>Bello → TdeA</span>
            </div>

            <div style={styles.dataItem}>
              <strong>Hora:</strong>
              <span>6:30 AM</span>
            </div>

            <div style={styles.dataItem}>
              <strong>Cupos:</strong>
              <span>3 disponibles</span>
            </div>

            <div style={styles.dataItem}>
              <strong>Vehículo:</strong>
              <span>Mazda 3</span>
            </div>

            <div style={styles.dataItem}>
              <strong>Precio:</strong>
              <span>$6.000</span>
            </div>

          </div>

          <button style={styles.button}>
            Reservar cupo
          </button>

        </div>

      </div>

    </div>
  );
}

const styles = {

  page: {
    padding: '40px',
    maxWidth: '1300px',
    margin: 'auto',
  },

  layout: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '24px',
  },

  mapCard: {
    background: '#fff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
  },

  map: {
    width: '100%',
    height: '620px',
    objectFit: 'cover',
  },

  infoCard: {
    background: '#fff',
    borderRadius: '24px',
    padding: '30px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
  },

  driverHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    marginBottom: '20px',
  },

  driverImg: {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
  },

  driverName: {
    margin: 0,
    fontSize: '28px',
    color: '#0f172a',
  },

  driverSubtitle: {
    marginTop: '6px',
    color: '#64748b',
  },

  tripData: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    marginTop: '20px',
    marginBottom: '30px',
  },

  dataItem: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '14px',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '17px',
  },

  button: {
    border: 'none',
    background: '#10b981',
    color: 'white',

    padding: '16px',

    borderRadius: '16px',

    fontWeight: 'bold',
    fontSize: '16px',

    cursor: 'pointer',

    boxShadow: '0 10px 25px rgba(16,185,129,0.25)',
  },

};