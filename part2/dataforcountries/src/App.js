import React, { useState, useEffect } from 'react'
import FilterCountries from './components/FilterCountries'
import Countries from './components/Countries'

import axios from 'axios'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <FilterCountries handleInputChange={handleInputChange} />
      <Countries countries={countries} search={search} setSearch={setSearch} />
    </div>
  )
}

export default App
