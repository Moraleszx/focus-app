import { useEffect, useState } from 'react'

function StudyTimer() {

  const [seconds, setSeconds] = useState(0)

  const [isRunning, setIsRunning] =
    useState(false)

  useEffect(() => {

    let interval = null

    if (isRunning) {

      interval = setInterval(() => {

        setSeconds((prev) => prev + 1)

      }, 1000)

    } else {

      clearInterval(interval)
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

  function startTimer() {
    setIsRunning(true)
  }

  function pauseTimer() {
    setIsRunning(false)
  }

  function resetTimer() {
    setIsRunning(false)
    setSeconds(0)
  }

  return (

    <div
      style={{
        background: 'rgba(0,0,0,0.45)',

        border:
          '1px solid rgba(255,255,255,0.08)',

        borderRadius: '30px',

        padding: '40px',

        marginTop: '30px',

        backdropFilter: 'blur(18px)',

        boxShadow:
          '0 0 30px rgba(124,58,237,0.15)',

        textAlign: 'center',
      }}
    >

      <h1
        style={{
          marginTop: 0,
        }}
      >
        Timer Focus
      </h1>

      <div
        style={{
          fontSize: '70px',

          fontWeight: 'bold',

          margin: '30px 0',

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

          justifyContent: 'center',

          gap: '15px',

          flexWrap: 'wrap',
        }}
      >

        <button
          onClick={startTimer}
          style={button}
        >
          Iniciar
        </button>

        <button
          onClick={pauseTimer}
          style={button}
        >
          Pausar
        </button>

        <button
          onClick={resetTimer}
          style={resetButton}
        >
          Resetar
        </button>

      </div>

    </div>
  )
}

const button = {

  padding: '15px 25px',

  borderRadius: '15px',

  border: 'none',

  background:
    'linear-gradient(135deg,#7c3aed,#2563eb)',

  color: 'white',

  fontWeight: 'bold',

  cursor: 'pointer',

  fontSize: '15px',
}

const resetButton = {

  padding: '15px 25px',

  borderRadius: '15px',

  border: 'none',

  background:
    'linear-gradient(135deg,#dc2626,#ef4444)',

  color: 'white',

  fontWeight: 'bold',

  cursor: 'pointer',

  fontSize: '15px',
}

export default StudyTimer