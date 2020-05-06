import React from 'react'

const CountryList = ({ countries, show, setSearch }) => {
	return (
		<div>
			{countries.map(country =>
				<span key={country.name}>{country.name}
					<button onClick={() => {
						setSearch(country.name)
					}}>
						Show
						</button><br />
				</span>
			)}
		</div>
	)
}

export default CountryList