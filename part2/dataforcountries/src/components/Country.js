import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import axios from 'axios'


const Country = ({ name, capital, population, flag, languages }) => {

	const params = {
		access_key: process.env.REACT_APP_API_KEY,
		query: capital
	}
	const [weather, setWeather] = useState()


	useEffect(() => {
		axios
			.get('http://api.weatherstack.com/current', { params })
			.then(response => {
				setWeather(response.data)
			})
	}, [])

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

			<h3>Weather in {capital}</h3>
			<Weather weather={weather} />
		</div>
	)
}

export default Country