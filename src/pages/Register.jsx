import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleRegister() {
    if (!name || !email || !password) {
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

        backgroundImage: `
        linear-gradient(
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.7)
        ),
        url('/background.jpg')
        `,

        backgroundSize: 'cover',
        backgroundPosition: 'center',

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
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: '120px',
            display: 'block',
            margin: '0 auto',
          }}
        />

        <h1
          style={{
            textAlign: 'center',
            margin: 0,
          }}
        >
          Cadastro
        </h1>

        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
        />

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
          onClick={handleRegister}
          style={button}
        >
          Criar conta
        </button>

        <Link
          to="/"
          style={{
            color: '#a78bfa',
            textAlign: 'center',
            textDecoration: 'none',
          }}
        >
          Voltar para login
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
}

const button = {
  width: '100%',
  padding: '16px',
  borderRadius: '15px',
  border: 'none',
  background:
    'linear-gradient(135deg,#7c3aed,#2563eb)',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
}

export default Register