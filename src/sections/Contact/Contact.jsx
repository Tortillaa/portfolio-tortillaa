export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-3xl mx-auto px-6 text-white">
      <div
        className="page-container"
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '2rem',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Contact
        </h2>
        <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>
          Want to colaborate or just talk a little bit?
        </p>

        {/* Contenedor de botones */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Botón Email */}
          <a
            href="mailto:aitor.house@hotmail.com"
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
              maxWidth: '200px',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(6px)',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          >
            Email Me
          </a>

          {/* Botón LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aitor-perez-2b070b2b1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
              maxWidth: '200px',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(6px)',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
