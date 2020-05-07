import React, { useState } from 'react'
import CountryList from './CountryList'
import Country from './Country'

const Countries = ({ countries, search, setSearch }) => {
	const filteredCountries = countries.filter(country => country.name.toUpperCase().includes(search.toUpperCase()))

	if (filteredCountries.length > 10) {
		return <p>Too many entries! Use additional keywords</p>
	}

	else if (filteredCountries.length > 1) {
		return <CountryList countries={filteredCountries} setSearch={setSearch} />
	}
	else if (filteredCountries.length !== 0) {
		return (
			<Country
				key={filteredCountries[0].name}
				name={filteredCountries[0].name}
				capital={filteredCountries[0].capital}
				population={filteredCountries[0].population}
				flag={filteredCountries[0].flag}
				languages={filteredCountries[0].languages}
			/>
		)
	}

	return null
}

export default Countries