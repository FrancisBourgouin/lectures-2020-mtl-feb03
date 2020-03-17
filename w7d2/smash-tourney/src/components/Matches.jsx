import React from 'react'
import { Match } from './Match'

export const Matches = props => {
  const { matchesData } = props
  const matchList =
    matchesData ?
      matchesData.map((match, index) => <Match key={index} id={index} player1={match.player1} player2={match.player2} />)
      :
      undefined;
  console.log(matchesData)
  console.log(matchList)
  console.log(matchesData)
  // matchList can contain one of two things array or undefined 

  return (
    <section>
      <h1>Round #??</h1>
      {matchList}
    </section>
  )
}