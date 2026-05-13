export default function PublicarViaje() {

  return (
    <div style={styles.page}>

      <div style={styles.card}>

        <div style={styles.header}>

          <div>
            <h1 style={styles.title}>
              Publicar viaje
            </h1>

            <p style={styles.subtitle}>
              Comparte tu ruta con estudiantes del Tecnológico de Antioquia.
            </p>
          </div>

          <div style={styles.badge}>
            🚘 Conductor
          </div>

        </div>

        <div style={styles.form}>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Punto de salida
            </label>

            <input
              defaultValue="Bello, Antioquia"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Destino
            </label>

            <input
              defaultValue="Tecnológico de Antioquia (TdeA)"
              disabled
              style={{
                ...styles.input,
                background: '#f1f5f9',
                fontWeight: 'bold',
              }}
            />
          </div>

          <div style={styles.row}>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Hora de salida
              </label>

              <input
                type="time"
                defaultValue="06:30"
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Fecha
              </label>

              <input
                type="date"
                defaultValue="2026-05-15"
                style={styles.input}
              />
            </div>

          </div>

          <div style={styles.row}>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Cupos disponibles
              </label>

              <input
                defaultValue="3"
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Precio por pasajero
              </label>

              <input
                defaultValue="$6.000"
                style={styles.input}
              />
            </div>

          </div>

          <div style={styles.vehicleCard}>

            <div style={styles.vehicleHeader}>

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="driver"
                style={styles.driverImg}
              />

              <div>
                <h3 style={styles.driverName}>
                  Juan Pérez
                </h3>

                <p style={styles.driverInfo}>
                  Mazda 3 • Blanco • ABC123
                </p>
              </div>

            </div>

          </div>

          <button style={styles.button}>
            Publicar viaje
          </button>

        </div>

      </div>

    </div>
  );
}

const styles = {

  page: {
    minHeight: '100vh',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '40px',
  },

  card: {
    width: '100%',
    maxWidth: '760px',

    background: '#fff',

    padding: '40px',

    borderRadius: '30px',

    boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: '35px',

    gap: '20px',
  },

  title: {
    fontSize: '42px',
    marginBottom: '10px',
    color: '#0f172a',
  },

  subtitle: {
    color: '#64748b',
    fontSize: '17px',
  },

  badge: {
    background: '#dbeafe',
    color: '#1d4ed8',

    padding: '12px 18px',

    borderRadius: '999px',

    fontWeight: 'bold',

    whiteSpace: 'nowrap',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  label: {
    fontWeight: '600',
    color: '#334155',
  },

  input: {
    padding: '16px',

    borderRadius: '16px',

    border: '1px solid #cbd5e1',

    fontSize: '16px',

    outline: 'none',
  },

  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },

  vehicleCard: {
    background: '#f8fafc',

    border: '1px solid #e2e8f0',

    padding: '20px',

    borderRadius: '20px',
  },

  vehicleHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  driverImg: {
    width: '70px',
    height: '70px',

    borderRadius: '50%',
  },

  driverName: {
    margin: 0,
    fontSize: '22px',
    color: '#0f172a',
  },

  driverInfo: {
    marginTop: '6px',
    color: '#64748b',
  },

  button: {
    border: 'none',

    background: '#10b981',

    color: 'white',

    padding: '18px',

    borderRadius: '18px',

    fontSize: '17px',
    fontWeight: 'bold',

    cursor: 'pointer',

    boxShadow: '0 10px 25px rgba(16,185,129,0.25)',
  },

};