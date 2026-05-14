import { useState, useEffect } from 'react'

function Schedule() {

  const [subject, setSubject] = useState('')
  const [time, setTime] = useState('')
  const [day, setDay] = useState('Segunda')

  const [schedule, setSchedule] = useState([])

  useEffect(() => {

    const saved =
      localStorage.getItem('schedule')

    if (saved) {
      setSchedule(JSON.parse(saved))
    }

  }, [])

  useEffect(() => {

    localStorage.setItem(
      'schedule',
      JSON.stringify(schedule)
    )

  }, [schedule])

  function addSubject() {

    if (!subject || !time) return

    const newItem = {
      subject,
      time,
      day,
    }

    setSchedule([...schedule, newItem])

    setSubject('')
    setTime('')
  }

  return (

    <div
      style={{
        background: 'rgba(0,0,0,0.45)',

        border:
          '1px solid rgba(255,255,255,0.08)',

        borderRadius: '30px',

        padding: '30px',

        marginTop: '30px',

        backdropFilter: 'blur(18px)',

        boxShadow:
          '0 0 25px rgba(124,58,237,0.12)',
      }}
    >

      <h1
        style={{
          marginTop: 0,
        }}
      >
        Cronograma de Estudos
      </h1>

      {/* INPUTS */}

      <div
        style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          marginBottom: '25px',
        }}
      >

        <input
          type="text"
          placeholder="Matéria"

          value={subject}

          onChange={(e) =>
            setSubject(e.target.value)
          }

          style={input}
        />

        <input
          type="time"

          value={time}

          onChange={(e) =>
            setTime(e.target.value)
          }

          style={input}
        />

        <select
          value={day}

          onChange={(e) =>
            setDay(e.target.value)
          }

          style={input}
        >

          <option>Segunda</option>
          <option>Terça</option>
          <option>Quarta</option>
          <option>Quinta</option>
          <option>Sexta</option>
          <option>Sábado</option>
          <option>Domingo</option>

        </select>

        <button
          onClick={addSubject}

          style={button}
        >
          Adicionar
        </button>

      </div>

      {/* LISTA */}

      <div
        style={{
          display: 'grid',
          gap: '15px',
        }}
      >

        {schedule.map((item, index) => (

          <div
            key={index}

            style={{
              background:
                'rgba(255,255,255,0.03)',

              padding: '18px',

              borderRadius: '18px',

              border:
                '1px solid rgba(255,255,255,0.05)',
            }}
          >

            <h3
              style={{
                margin: 0,
              }}
            >
              {item.subject}
            </h3>

            <p
              style={{
                color: '#cbd5e1',
                marginTop: '8px',
              }}
            >
              {item.day} • {item.time}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

const input = {

  padding: '15px',

  borderRadius: '16px',

  border:
    '1px solid rgba(168,85,247,0.6)',

  background: '#000',

  color: 'white',

  outline: 'none',

  minWidth: '180px',
}

const button = {

  padding: '15px 25px',

  borderRadius: '16px',

  border: 'none',

  background:
    'linear-gradient(135deg,#7c3aed,#2563eb)',

  color: 'white',

  fontWeight: 'bold',

  cursor: 'pointer',
}

export default Schedule