import React from 'react';
import './App.css';
import professoresData from './professores.json';

const ProfessorCard = ({ professor }) => (
  <div className="card">
    <img src={professor.foto} alt={professor.nome} />
    <h3>{professor.nome}</h3>
    <p>{professor.formacao}</p>
    <a href={professor.lattes} target="_blank" rel="noopener noreferrer">
      Currículo Lattes
    </a>
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>Corpo Docente</h1>
      <div className="professores-container">
        {professoresData.map((professor) => (
          <ProfessorCard key={professor.id} professor={professor} />
        ))}
      </div>
    </div>
  );
}

export default App;
