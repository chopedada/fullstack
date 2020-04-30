import React from 'react'

const Form = (props) => {
	const { handleNameChange, handleNumberChange, newName, newNumber, addPerson } = props
	return (
		<form onSubmit={addPerson}>
			<div>
				name: <input
					value={newName}
					onChange={handleNameChange}
				/><br />
          number: <input
					value={newNumber}
					onChange={handleNumberChange}
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)

}
export default Form