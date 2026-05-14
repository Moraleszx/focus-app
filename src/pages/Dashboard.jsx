import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const navigate = useNavigate()

  const username =
    localStorage.getItem('username')

  function handleLogout() {
    navigate('/')
  }

  return (

    <div
      style={{
        minHeight: '100vh',

        background: `
        radial-gradient(circle at top left, rgba(124,58,237,0.35), transparent 25%),
        radial-gradient(circle at bottom right, rgba(37,99,235,0.35), transparent 25%),
        linear-gradient(135deg,#020617,#0f172a)
        `,

        padding: '25px',

        color: 'white',

        fontFamily: 'Arial',
      }}
    >

      {/* TOP */}

      <div
        style={{
          background: 'rgba(0,0,0,0.45)',

          border:
            '1px solid rgba(255,255,255,0.08)',

          borderRadius: '35px',

          padding: '25px',

          display: 'flex',

          justifyContent: 'space-between',

          alignItems: 'center',

          flexWrap: 'wrap',

          gap: '20px',

          marginBottom: '30px',

          backdropFilter: 'blur(18px)',
        }}
      >

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >

          <img
            src="/logo.png"
            alt="Logo"

            style={{
              width: '150px',
            }}
          />

          <div>

            <h1
              style={{
                margin: 0,
                fontSize: '45px',
              }}
            >
              Olá, {username}
            </h1>

            <p
              style={{
                color: '#cbd5e1',
              }}
            >
              Sua central de produtividade
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}

          style={{
            background:
              'linear-gradient(135deg,#7c3aed,#2563eb)',

            border: 'none',

            padding: '35px 55px',

            borderRadius: '16px',

            color: 'white',

            fontWeight: 'bold',

            cursor: 'pointer',

            fontSize: '18px',

          
          }}
        >
          Sair
        </button>

      </div>

      {/* BANNERS */}

      <div
        style={{
          display: 'grid',

          gridTemplateColumns:
            'repeat(auto-fit,minmax(320px,1fr))',

          gap: '25px',

          marginBottom: '30px',
        }}
      >

        <img
          src="/study.png"
          alt="Study"

          style={{
            width: '100%',

            borderRadius: '25px',
          }}
        />

        <img
          src="/quote.png"
          alt="Quote"

          style={{
            width: '700px',

            borderRadius: '25px',
          }}
        />

      </div>

      {/* CARDS */}

      <div
        style={{
          display: 'grid',

          gridTemplateColumns:
            'repeat(auto-fit,minmax(320px,1fr))',

          gap: '25px',
        }}
      >

        {/* IA */}

        <div style={card}>

          <h2 style={title}>
            IA RORY
          </h2>

          <p style={text}>
            Assistente inteligente de estudos
            pronta para ajudar você.
          </p>

          <button style={button}>
            Conversar
          </button>

        </div>

        {/* TIMER */}

        <div style={card}>

          <h2 style={title}>
            Timer Focus
          </h2>

          <p style={text}>
            Cronômetro de produtividade
            profissional.
          </p>

          <button
            onClick={() =>
              navigate('/timer')
            }

            style={button}
          >
            Abrir Timer
          </button>

        </div>

      </div>

    </div>
  )
}

const card = {

  background: 'rgba(0,0,0,0.45)',

  border:
    '1px solid rgba(255,255,255,0.08)',

  borderRadius: '30px',

  padding: '35px',

  backdropFilter: 'blur(18px)',
}

const title = {

  marginTop: 0,

  fontSize: '30px',
}

const text = {

  color: '#cbd5e1',

  lineHeight: '1.7',
}

const button = {

  marginTop: '20px',

  width: '100%',

  padding: '15px',

  borderRadius: '14px',

  border: 'none',

  background:
    'linear-gradient(135deg,#7c3aed,#2563eb)',

  color: 'white',

  fontWeight: 'bold',

  cursor: 'pointer',

  fontSize: '16px',
}

export default Dashboard