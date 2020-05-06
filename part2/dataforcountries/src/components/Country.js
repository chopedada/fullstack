import React from 'react'

const Country = ({ name, capital, population, flag, languages }) => {
	return (
		<div>
			<h1>{name}</h1>
			<p>
				Capital: {capital}<br />
				Population: {population} <br />
			</p>
			<img src={flag} alt="Country Flag" height="75px" width="125px" />
			<h3>Languages</h3>
			{languages.map(language =>
				<ul key={language.name}>
					<li key={language.name}>{language.name}</li>
				</ul>)}
		</div>
	)
}

export default Country