import { useState } from 'react'
import Schedule from './pages/Schedule'

function Schedule() {
  const [schedule, setSchedule] = useState([])

  function generateSchedule() {
    const subjects = [
      'Matemática',
      'História',
      'Biologia',
      'Português',
      'Física',
    ]

    const times = [
      '08:00',
      '09:00',
      '10:00',
      '14:00',
      '15:00',
    ]

    const generated = subjects.map((subject, index) => ({
      subject,
      time: times[index],
    }))

    setSchedule(generated)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: 'white',
        padding: '40px',
        fontFamily: 'Arial',
      }}
    >
      <h1>📅 Cronograma Inteligente</h1>

      <p
        style={{
          color: '#cbd5e1',
          marginTop: '10px',
        }}
      >
        Gere automaticamente sua rotina de estudos.
      </p>

      <button
        onClick={generateSchedule}
        style={button}
      >
        Gerar Cronograma
      </button>

      <div
        style={{
          marginTop: '40px',
          display: 'grid',
          gap: '20px',
        }}
      >
        {schedule.map((item, index) => (
          <div
            key={index}
            style={card}
          >
            <h2>{item.subject}</h2>

            <p>
              Horário: {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const button = {
  marginTop: '30px',
  padding: '15px 20px',
  borderRadius: '12px',
  border: 'none',
  background: '#2563eb',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',
}

const card = {
  background: '#1e293b',
  padding: '20px',
  borderRadius: '20px',
}

export default Schedule