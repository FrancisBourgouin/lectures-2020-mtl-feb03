import React, { useState } from 'react'

export const Registration = props => {
  // event.target.value
  const { setMatches } = props

  const [formState, setFormState] = useState({
    name: "",
    character: ""
  })

  const [match, setMatch] = useState({
    player1: "",
    player2: ""
  })

  const cleanFields = () => setFormState({ name: "", character: "" })

  const updateField = event => setFormState({ ...formState, [event.target.name]: event.target.value })
  const formSubmit = event => {
    event.preventDefault()

    if (!match.player1) {
      setMatch({ ...match, player1: formState.name })
      // setFormState({name:"", character:""})

    } else if (!match.player2) {
      setMatch({ ...match, player2: formState.name })
      // setFormState({name:"", character:""})
    } else {
      //In a set function, we can use a callback function with a parameter containing the state
      // setMatches(previousState => [...previousState, match])
      props.addNewMatch(match)
      // setFormState({name:"", character:""})
    }

    cleanFields()

  }

  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Player Name"
        onChange={event => setFormState({ ...formState, name: event.target.value })}
        value={formState.name}
      />
      <input
        type="text"
        name="character"
        placeholder="Main character"
        onChange={updateField}
        value={formState.character}
      />
      <input type="submit" />
    </form>
  )
}