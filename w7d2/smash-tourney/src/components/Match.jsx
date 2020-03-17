import React from 'react'

export const Match = props => {
  const { player1, player2, id } = props
  return (
    <article>
      <h1>Match #{id}</h1>
      <p>{player1} vs {player2}</p>
    </article>
  )
}