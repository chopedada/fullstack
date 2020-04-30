import React from 'react'

const Person = ({ persons, nameFilter }) => {
	const filteredNames = persons.filter(person =>
		(person.name.toLowerCase()).includes(nameFilter.toLowerCase()))

	return (
		filteredNames.map(person =>
			<p key={person.name}>{person.name} {person.number}</p>)
	)
}

export default Person