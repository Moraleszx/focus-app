import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: 'white',
        fontFamily: 'Arial',
        display: 'flex',
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          width: '250px',
          background: '#1e293b',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: '35px',
          }}
        >
          FOCUS
        </h1>

        <button style={menuButton}>
          Dashboard
        </button>

        <button style={menuButton}>
          Cronograma
        </button>

        <Link
  to='/subjects'
  style={{
    textDecoration: 'none',
  }}
>
  <button style={menuButton}>
    Matérias
  </button>
</Link>

        <button style={menuButton}>
          RORY IA
        </button>

        <button style={menuButton}>
          Anti-Procrastinação
        </button>

        <Link
          to='/'
          style={{
            textDecoration: 'none',
          }}
        >
          <button
            style={{
              ...menuButton,
              background: '#dc2626',
              marginTop: 'auto',
            }}
          >
            Sair da Conta
          </button>
        </Link>
      </div>

      {/* CONTEÚDO */}

      <div
        style={{
          flex: 1,
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '45px',
            marginTop: 0,
          }}
        >
          Bem-vindo ao FOCUS
        </h1>

        <p
          style={{
            color: '#cbd5e1',
            marginBottom: '40px',
          }}
        >
          Seu organizador inteligente de estudos.
        </p>

        {/* CARDS */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '20px',
          }}
        >
          <div style={card}>
            <h2>📚 Cronograma Inteligente</h2>

            <p>
              Organização automática baseada na sua rotina.
            </p>
          </div>

          <div style={card}>
            <h2>🤖 RORY IA</h2>

            <p>
              Tire dúvidas e aprenda com inteligência artificial.
            </p>
          </div>

          <div style={card}>
            <h2>🔥 Anti-Procrastinação</h2>

            <p>
              Mantenha foco com lembretes e técnicas produtivas.
            </p>
          </div>

          <div style={card}>
            <h2>📈 Desempenho</h2>

            <p>
              Veja evolução e progresso dos estudos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const menuButton = {
  background: '#0f172a',
  border: 'none',
  padding: '15px',
  borderRadius: '12px',
  color: 'white',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '15px',
  width: '100%',
}

const card = {
  background: '#1e293b',
  padding: '25px',
  borderRadius: '20px',
}

export default Dashboard