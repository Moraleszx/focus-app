import { Link } from 'react-router-dom'

function Login() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: `
radial-gradient(circle at top left, #7c3aed 0%, transparent 30%),
radial-gradient(circle at bottom right, #2563eb 0%, transparent 30%),
linear-gradient(135deg, #020617, #0f172a)
`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
        background: 'rgba(0,0,0,0.75)',
backdropFilter: 'blur(10px)',
border: '1px solid rgba(255,255,255,0.1)',
          padding: '40px',
          borderRadius: '30px',
          width: '100%',
          maxWidth: '420px',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 0 30px rgba(0,0,0,0.5)',
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: '200px',
            display: 'block',
            margin: '0 auto',
          }}
        />

        <h1
          style={{
            textAlign: 'center',
            margin: 0,
            fontSize: '35px',
          }}
        >
          Seja Bem-vindo(a) de volta.
        </h1>

        <p
          style={{
            textAlign: 'center',
            color: '#cbd5e1',
            marginTop: '-10px',
          }}
        >
          Organize sua mente. Domine seus estudos.
        </p>

        <input
          type="email"
          placeholder="Seu email"
          style={input}
        />

        <input
          type="password"
          placeholder="Sua senha"
          style={input}
        />

        <Link to="/dashboard">
          <button style={button}>
            Entrar
          </button>
        </Link>

        <Link
          to="/register"
          style={{
            color: '#a78bfa',
            textAlign: 'center',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Criar conta
        </Link>
      </div>
    </div>
  )
}

const input = {
  padding: '16px',
  borderRadius: '15px',
  border: '1px solid #4c1d95',
  background: '#111111',
  color: 'white',
  outline: 'none',
  fontSize: '15px',
}

const button = {
  width: '100%',
  padding: '16px',
  borderRadius: '15px',
  border: 'none',
  background: '#7c3aed',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
}

export default Login