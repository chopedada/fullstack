import React from 'react'

const Person = ({ persons, nameFilter, deletePerson }) => {
	const filteredNames = persons.filter(person =>
		(person.name.toLowerCase()).includes(nameFilter.toLowerCase()))

	return (
		filteredNames.map(person =>
			<p key={person.name}>
				{person.name} {person.number}
				<button onClick={() => deletePerson(person.id)}>
					delete
				</button>
			</p>)
	)
}

export default Person