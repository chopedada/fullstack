import React from 'react'

const Filter = ({ handleFilterChange }) => {
	return (
		<div>
			<h4>filter names by: </h4>
			<input onChange={handleFilterChange} />
		</div>
	)
}

export default Filter
