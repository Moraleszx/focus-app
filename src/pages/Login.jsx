import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin() {
    if (!email || !password) {
      setError('Preencha todos os campos.')
      return
    }

    setError('')
    navigate('/dashboard')
  }

  return (
    <div
      style={{
        minHeight: '100vh',

        background: `
        radial-gradient(circle at top left, rgba(124,58,237,0.4), transparent 25%),
        radial-gradient(circle at bottom right, rgba(37,99,235,0.4), transparent 25%),
        linear-gradient(135deg, #020617, #0f172a)
        `,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '430px',

          background: 'rgba(15,23,42,0.75)',

          backdropFilter: 'blur(20px)',

          border: '1px solid rgba(255,255,255,0.08)',

          borderRadius: '35px',

          padding: '45px',

          boxShadow:
            '0 0 50px rgba(124,58,237,0.25)',

          display: 'flex',
          flexDirection: 'column',
          gap: '20px',

          color: 'white',
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: '120px',
            margin: '0 auto',
            filter:
              'drop-shadow(0 0 15px rgba(124,58,237,0.7))',
          }}
        />

        <h1
          style={{
            textAlign: 'center',
            margin: 0,
            fontSize: '40px',
            fontWeight: 'bold',
          }}
        >
          FOCUS
        </h1>

        <p
          style={{
            textAlign: 'center',
            color: '#cbd5e1',
            marginTop: '-10px',
            fontSize: '15px',
          }}
        >
          Organize sua rotina e domine seus estudos.
        </p>

        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        {error && (
          <p
            style={{
              color: '#f87171',
              textAlign: 'center',
              margin: 0,
            }}
          >
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          style={button}
        >
          Entrar
        </button>

        <Link
          to="/register"
          style={{
            textAlign: 'center',
            color: '#a78bfa',
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
  padding: '17px',
  borderRadius: '18px',
  border: '1px solid rgba(168,85,247,0.6)',
  boxShadow: '0 0 15px rgba(124,58,237,0.15)',
background: 'rgba(15,23,42,0.9)',
  color: 'white',
  outline: 'none',
  fontSize: '15px',
}

const button = {
  width: '100%',
  padding: '17px',
  borderRadius: '18px',
  border: 'none',

  background:
    'linear-gradient(135deg,#7c3aed,#2563eb)',

  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',

  cursor: 'pointer',

  boxShadow:
    '0 0 25px rgba(124,58,237,0.4)',
}

export default Login