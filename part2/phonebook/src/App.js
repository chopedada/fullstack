import React, { useState } from 'react'
import Person from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'

const App = ({ phonebook }) => {
  const [persons, setPersons] = useState(phonebook)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const nameArray = persons.map(person => person.name)
    const nameExists = nameArray.includes(nameObject.name)

    nameExists ?
      alert(`${nameObject.name} is already in the phonebook`) :
      setPersons(persons.concat(nameObject))

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <Filter
        handleFilterChange={handleFilterChange}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
      />
      <h2>Phonebook</h2>
      <Person persons={persons} nameFilter={nameFilter} />
      <h2> Add a new: </h2>
      <Form
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
      />
    </div >
  )
}

export default App