import { useState, useEffect } from 'react'
import axios from 'axios'
import List from './components/List'

const App = () => {
  const [all, setAll] = useState([])
  const [query, setQuery] = useState({
    countries: '',
    list: []
  })

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAll(response.data)
      })
  }, [])

  const handleChange = (e) => {
    const result = all.filter(c => 
      e.target.value === ''
        ? ''
        : c.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setQuery({
      countries: e.target.value,
      list: result
    })   
  }

  const handleClick = (e) => {
    setQuery(values => ({
      ...values,
      list: [query.list[e.target.value]]      
    }))
  }
  
  return (
    <div>
      <div>find countries
        <input type='search' value={query.countries} onChange={handleChange} />
      </div>
      <List query={query.list} onClick={handleClick}/>
    </div>
  )
}

export default App
