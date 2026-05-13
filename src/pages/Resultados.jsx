import { useNavigate } from 'react-router-dom';

export default function Resultados() {

  const navigate = useNavigate();

  const viajes = [
    {
      nombre: 'Juan Pérez',
      carro: 'Mazda 3',
      precio: '$6.000',
      rating: '4.9',
      hora: '6:30 AM',
      cupos: 3,
      ruta: 'Bello → TdeA',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      nombre: 'Laura Gómez',
      carro: 'Kia Picanto',
      precio: '$5.000',
      rating: '4.8',
      hora: '6:45 AM',
      cupos: 2,
      ruta: 'Copacabana → TdeA',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      nombre: 'Carlos Ramírez',
      carro: 'Chevrolet Onix',
      precio: '$7.000',
      rating: '5.0',
      hora: '7:00 AM',
      cupos: 4,
      ruta: 'Itagüí → TdeA',
      img: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
  ];

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>

        <div>
          <h1 style={styles.title}>
            Viajes disponibles
          </h1>

          <p style={styles.subtitle}>
            Conductores verificados disponibles cerca de tu ubicación.
          </p>
        </div>

        <div style={styles.resultsBadge}>
          🚗 {viajes.length} viajes encontrados
        </div>

      </div>

      {/* LISTA */}
      <div style={styles.list}>

        {viajes.map((v, index) => (

          <div key={index} style={styles.card}>

            {/* IZQUIERDA */}
            <div style={styles.left}>

              <img
                src={v.img}
                alt={v.nombre}
                style={styles.avatar}
              />

              <div>

                <div style={styles.topRow}>

                  <h3 style={styles.name}>
                    {v.nombre}
                  </h3>

                  <span style={styles.rating}>
                    ⭐ {v.rating}
                  </span>

                </div>

                <p style={styles.route}>
                  {v.ruta}
                </p>

                <div style={styles.metaRow}>

                  <span style={styles.tag}>
                    🚘 {v.carro}
                  </span>

                  <span style={styles.tag}>
                    🕒 {v.hora}
                  </span>

                  <span style={styles.tag}>
                    👥 {v.cupos} cupos
                  </span>

                </div>

              </div>

            </div>

            {/* DERECHA */}
            <div style={styles.right}>

              <strong style={styles.price}>
                {v.precio}
              </strong>

              <button
                style={styles.button}
                onClick={() => navigate('/detalle')}
              >
                Ver viaje
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

const styles = {

  page: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '40px',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: '35px',

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

  resultsBadge: {
    background: '#dcfce7',
    color: '#166534',

    padding: '14px 20px',

    borderRadius: '999px',

    fontWeight: 'bold',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
  },

  card: {
    background: '#fff',

    borderRadius: '28px',

    padding: '24px',

    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    gap: '20px',
    flexWrap: 'wrap',
  },

  left: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',

    flex: 1,
  },

  avatar: {
    width: '85px',
    height: '85px',

    borderRadius: '50%',
    objectFit: 'cover',
  },

  topRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',

    flexWrap: 'wrap',
  },

  name: {
    margin: 0,
    fontSize: '26px',
    color: '#0f172a',
  },

  rating: {
    background: '#fef9c3',
    color: '#854d0e',

    padding: '6px 12px',

    borderRadius: '999px',

    fontWeight: 'bold',
    fontSize: '14px',
  },

  route: {
    marginTop: '8px',
    marginBottom: '14px',

    color: '#475569',
    fontSize: '17px',
  },

  metaRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },

  tag: {
    background: '#f1f5f9',

    padding: '10px 14px',

    borderRadius: '999px',

    fontSize: '14px',
    color: '#334155',
  },

  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '16px',
  },

  price: {
    fontSize: '34px',
    color: '#10b981',
  },

  button: {
    border: 'none',

    background: '#10b981',
    color: 'white',

    padding: '14px 22px',

    borderRadius: '16px',

    fontWeight: 'bold',
    fontSize: '15px',

    cursor: 'pointer',

    boxShadow: '0 10px 25px rgba(16,185,129,0.25)',
  },

};