export default function Dashboard() {

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>

        <div>

          <h1 style={styles.title}>
            Dashboard del conductor
          </h1>

          <p style={styles.subtitle}>
            Gestiona tus viajes, pasajeros y ganancias.
          </p>

        </div>

        <div style={styles.profileCard}>

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="driver"
            style={styles.profileImg}
          />

          <div>
            <h3 style={styles.profileName}>
              Juan Pérez
            </h3>

            <p style={styles.profileInfo}>
              ⭐ 4.9 • Mazda 3
            </p>
          </div>

        </div>

      </div>

      {/* STATS */}
      <div style={styles.statsGrid}>

        <div style={styles.statCard}>
          <span style={styles.statIcon}>💰</span>

          <div>
            <h3 style={styles.statTitle}>
              Ganancias
            </h3>

            <p style={styles.statValue}>
              $120.000
            </p>
          </div>
        </div>

        <div style={styles.statCard}>
          <span style={styles.statIcon}>🚘</span>

          <div>
            <h3 style={styles.statTitle}>
              Viajes activos
            </h3>

            <p style={styles.statValue}>
              4
            </p>
          </div>
        </div>

        <div style={styles.statCard}>
          <span style={styles.statIcon}>📩</span>

          <div>
            <h3 style={styles.statTitle}>
              Solicitudes
            </h3>

            <p style={styles.statValue}>
              7 pendientes
            </p>
          </div>
        </div>

      </div>

      {/* VIAJES */}
      <div style={styles.section}>

        <div style={styles.sectionHeader}>

          <h2 style={styles.sectionTitle}>
            Próximos viajes
          </h2>

          <button style={styles.smallButton}>
            + Nuevo viaje
          </button>

        </div>

        <div style={styles.tripList}>

          <div style={styles.tripCard}>

            <div>
              <h3 style={styles.tripRoute}>
                Bello → TdeA
              </h3>

              <p style={styles.tripInfo}>
                15 Mayo • 6:30 AM
              </p>
            </div>

            <div style={styles.tripRight}>
              <span style={styles.tripSeats}>
                3 cupos
              </span>

              <strong style={styles.tripPrice}>
                $6.000
              </strong>
            </div>

          </div>

          <div style={styles.tripCard}>

            <div>
              <h3 style={styles.tripRoute}>
                Itagüí → TdeA
              </h3>

              <p style={styles.tripInfo}>
                15 Mayo • 5:50 PM
              </p>
            </div>

            <div style={styles.tripRight}>
              <span style={styles.tripSeats}>
                2 cupos
              </span>

              <strong style={styles.tripPrice}>
                $7.000
              </strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

const styles = {

  page: {
    maxWidth: '1300px',
    margin: 'auto',
    padding: '40px',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: '40px',

    gap: '20px',
    flexWrap: 'wrap',
  },

  title: {
    fontSize: '48px',
    color: '#0f172a',
    marginBottom: '10px',
  },

  subtitle: {
    color: '#64748b',
    fontSize: '18px',
  },

  profileCard: {
    background: '#fff',

    display: 'flex',
    alignItems: 'center',
    gap: '16px',

    padding: '16px 22px',

    borderRadius: '20px',

    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
  },

  profileImg: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
  },

  profileName: {
    margin: 0,
    fontSize: '22px',
    color: '#0f172a',
  },

  profileInfo: {
    marginTop: '6px',
    color: '#64748b',
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',

    marginBottom: '40px',
  },

  statCard: {
    background: '#fff',

    padding: '28px',

    borderRadius: '24px',

    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',

    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },

  statIcon: {
    fontSize: '40px',
  },

  statTitle: {
    margin: 0,
    marginBottom: '8px',

    color: '#64748b',
    fontSize: '16px',
  },

  statValue: {
    margin: 0,

    fontSize: '32px',
    fontWeight: 'bold',

    color: '#0f172a',
  },

  section: {
    background: '#fff',

    borderRadius: '28px',

    padding: '30px',

    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  },

  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: '30px',

    flexWrap: 'wrap',
    gap: '16px',
  },

  sectionTitle: {
    margin: 0,
    fontSize: '30px',
    color: '#0f172a',
  },

  smallButton: {
    border: 'none',

    background: '#10b981',
    color: 'white',

    padding: '12px 18px',

    borderRadius: '14px',

    fontWeight: 'bold',

    cursor: 'pointer',
  },

  tripList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },

  tripCard: {
    background: '#f8fafc',

    border: '1px solid #e2e8f0',

    borderRadius: '20px',

    padding: '22px',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    flexWrap: 'wrap',
    gap: '16px',
  },

  tripRoute: {
    margin: 0,
    fontSize: '24px',
    color: '#0f172a',
  },

  tripInfo: {
    marginTop: '8px',
    color: '#64748b',
  },

  tripRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },

  tripSeats: {
    background: '#dbeafe',

    color: '#1d4ed8',

    padding: '10px 14px',

    borderRadius: '999px',

    fontWeight: 'bold',
  },

  tripPrice: {
    fontSize: '24px',
    color: '#10b981',
  },

};