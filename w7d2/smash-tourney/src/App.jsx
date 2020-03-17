import React, { useState } from 'react';
import './App.css';

import { Registration } from './components/Registration'
import { Matches } from './components/Matches';

const matchesData = [
  {
    player1: "Bob",
    player2: "Robert"
  },
  {
    player1: "Will",
    player2: "Hunting"
  },
  {
    player1: "Sacha",
    player2: "Alexander"
  },
  {
    player1: "Marie",
    player2: "Marie"
  }

]


const App = () => {
  const [matches, setMatches] = useState(matchesData)

  const addNewMatch = newMatch => {
    if (newMatch) {
      setMatches([...matches, newMatch])
    }
  }

  return (
    <div className="App" >
      <h1>Super Smash Bros Tourney Manager</h1>
      <Registration setMatches={setMatches} addNewMatch={addNewMatch} />
      <Matches matchesData={matches} />
    </div>
  );
}

export default App;
