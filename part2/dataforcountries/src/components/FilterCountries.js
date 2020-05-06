import React from 'react'

const FilterCountries = ({ handleInputChange }) => {
	return (
		<p>filter countries by: <input onChange={handleInputChange}></input></p>
	)
}

export default FilterCountries