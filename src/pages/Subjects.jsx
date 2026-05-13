import { useState } from 'react'

function Subjects() {
  const [subject, setSubject] = useState('')
  const [subjects, setSubjects] = useState([])

  function addSubject() {
    if (subject.trim() === '') return

    setSubjects([...subjects, subject])
    setSubject('')
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
      <h1>📚 Matérias</h1>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginTop: '30px',
          flexWrap: 'wrap',
        }}
      >
        <input
          type='text'
          placeholder='Adicionar matéria'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={input}
        />

        <button
          onClick={addSubject}
          style={button}
        >
          Adicionar
        </button>
      </div>

      <div
        style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gap: '20px',
        }}
      >
        {subjects.map((item, index) => (
          <div
            key={index}
            style={card}
          >
            <h2>{item}</h2>

            <p>
              Matéria adicionada ao cronograma.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const input = {
  padding: '15px',
  borderRadius: '12px',
  border: '1px solid #334155',
  background: '#1e293b',
  color: 'white',
  outline: 'none',
  flex: 1,
  minWidth: '250px',
}

const button = {
  padding: '15px 20px',
  borderRadius: '12px',
  border: 'none',
  background: '#2563eb',
  color: 'white',
  cursor: 'pointer',
}

const card = {
  background: '#1e293b',
  padding: '20px',
  borderRadius: '20px',
}

export default Subjects