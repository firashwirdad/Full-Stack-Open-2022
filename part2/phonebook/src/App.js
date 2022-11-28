import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const Error = ({ errorMessage }) => {
  if (errorMessage === null) {
    return null
  }

  return (
    <div className='error'>
      {errorMessage}
    </div>
  )
}

const Changed = ({ changedMessage }) => {
  if (changedMessage === null) {
    return null
  }

  return (
    <div className='changed'>
      {changedMessage}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [inputs, setInputs] = useState({
    name: '',
    number: ''
  })
  const [query, setQuery] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [changedMessage, setChangedMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  console.log('render', persons.length, 'persons')

  const handleRemove = id => {
    const removePerson = persons.find(p => p.id === id)
    
    if (window.confirm(`delete "${removePerson.name}" ?`)) {
      personService
        .remove(id, removePerson)
      setChangedMessage(`Successfully removed "${removePerson.name}" from the phonebook`)
      setTimeout(() => {
        setChangedMessage(null)
      }, 2000)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isPresent = persons.find(p => p.name === inputs.name)

    const personObject = {
      name: inputs.name,
      number: inputs.number
    }
    
    if (!isPresent) {

      personService
        .create(personObject)
        .then(personAdded => {
          console.log(personAdded)
          setChangedMessage(`Successfully added "${inputs.name}" to phonebook`)
          setTimeout(() => {
            setChangedMessage(null)
          }, 2000)
          setPersons(persons.concat(personAdded))
          setInputs({
            name: '',
            number: ''
          })
        })
    } 
    else if (window.confirm(`"${inputs.name}" is already added to the phonebook, replace the old number with a new one?`)) {
      const id = isPresent.id
      const updateNumber = {...isPresent, number: inputs.number}

      personService
        .update(id, updateNumber)
        .then(updatedPerson => {
          setChangedMessage(`Successfully updated "${inputs.name}" phone number`)
          setTimeout(() => {
            setChangedMessage(null)
          }, 2000)
          setPersons(persons.map(person => 
            person.id !== id
              ? person
              : updatedPerson
            ))
          setInputs({
            name: '',
            number: ''
          })
        })
        .catch(error => {
          setErrorMessage(`Information of "${isPresent.name}" has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== id))
          setInputs({
            name: '',
            number: ''
          })
        })
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setInputs(values => ({
      ...values,
      [name]: value
    }))
  }

  const handleQueryChange = (event) => setQuery(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Changed changedMessage={changedMessage} />
      <Error errorMessage={errorMessage} />
      <Filter value={query} onChange={handleQueryChange} />
      <h3>add a new</h3>
      <PersonForm onSubmit={handleSubmit} value={inputs} onChange={handleChange} />
      <h3>Numbers</h3>
      <Persons query={query} persons={persons} onClick={handleRemove} />
    </div>
  )
}

export default App