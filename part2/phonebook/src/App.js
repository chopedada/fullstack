import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'
import phonebookService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const nameArray = persons.map(person => person.name)
    const nameExists = nameArray.includes(nameObject.name)

    if (nameExists) {
      if (window.confirm(`${nameObject.name} is already in the phonebook. Do you want to update their number?`)) {
        const id = persons.find(person => person.name === nameObject.name).id
        phonebookService
          .update(id, nameObject)
          .then(returnedPerson => {
            setPersons(persons
              .filter(person => person.id !== id)
              .concat(returnedPerson))
          })
          .catch(error => {
            setMessage("red")
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setPersons(persons
              .filter(person => person.id !== id))
          })
      }
    } else {
      phonebookService
        .create(nameObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
      setMessage("green")
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
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
  const deleteThisPerson = id => {
    if (window.confirm(`Are you sure you wish to delete this entry from the phonebook?`)) {
      phonebookService.deletePerson(id)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
      <Filter
        handleFilterChange={handleFilterChange}
        nameFilter={nameFilter}
        setNameFilter={setNameFilter}
      />
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Person persons={persons} nameFilter={nameFilter} deletePerson={deleteThisPerson} />
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