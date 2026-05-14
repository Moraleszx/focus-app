import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TimerPage() {

  const navigate = useNavigate()

  const [seconds, setSeconds] = useState(0)

  const [isRunning, setIsRunning] =
    useState(false)

  useEffect(() => {

    let interval = null

    if (isRunning) {

      interval = setInterval(() => {

        setSeconds((prev) => prev + 1)

      }, 1000)

    }

    return () => clearInterval(interval)

  }, [isRunning])

  function formatTime() {

    const hrs =
      String(Math.floor(seconds / 3600))
        .padStart(2, '0')

    const mins =
      String(
        Math.floor((seconds % 3600) / 60)
      ).padStart(2, '0')

    const secs =
      String(seconds % 60)
        .padStart(2, '0')

    return `${hrs}:${mins}:${secs}`
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

        display: 'flex',

        flexDirection: 'column',

        justifyContent: 'center',

        alignItems: 'center',

        padding: '20px',

        color: 'white',

        fontFamily: 'Arial',
      }}
    >

      <h1
        style={{
          fontSize: '70px',
          marginBottom: '40px',
        }}
      >
        TIMER FOCUS
      </h1>

      <div
        style={{
          fontSize: '140px',

          fontWeight: 'bold',

          marginBottom: '50px',

          background:
            'linear-gradient(135deg,#7c3aed,#2563eb)',

          WebkitBackgroundClip: 'text',

          WebkitTextFillColor: 'transparent',
        }}
      >
        {formatTime()}
      </div>

      <div
        style={{
          display: 'flex',

          gap: '20px',

          flexWrap: 'wrap',

          justifyContent: 'center',
        }}
      >

        <button
          onClick={() =>
            setIsRunning(true)
          }

          style={button}
        >
          Iniciar
        </button>

        <button
          onClick={() =>
            setIsRunning(false)
          }

          style={button}
        >
          Pausar
        </button>

        <button
          onClick={() => {
            setIsRunning(false)
            setSeconds(0)
          }}

          style={resetButton}
        >
          Resetar
        </button>

      </div>

      <button
        onClick={() =>
          navigate('/dashboard')
        }

        style={{
          marginTop: '50px',

          background: 'transparent',

          border:
            '1px solid rgba(255,255,255,0.2)',

          padding: '14px 25px',

          borderRadius: '14px',

          color: 'white',

          cursor: 'pointer',
        }}
      >
        Voltar
      </button>

    </div>
  )
}

const button = {

  padding: '18px 30px',

  borderRadius: '18px',

  border: 'none',

  background:
    'linear-gradient(135deg,#7c3aed,#2563eb)',

  color: 'white',

  fontWeight: 'bold',

  fontSize: '18px',

  cursor: 'pointer',
}

const resetButton = {

  padding: '18px 30px',

  borderRadius: '18px',

  border: 'none',

  background:
    'linear-gradient(135deg,#dc2626,#ef4444)',

  color: 'white',

  fontWeight: 'bold',

  fontSize: '18px',

  cursor: 'pointer',
}

export default TimerPage