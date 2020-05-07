import React from 'react'

const Weather = (weather) => {
	const capitalWeather = weather.weather
	if (capitalWeather !== undefined) {
		return (
			<div>
				<h5>temperature: {capitalWeather.current.temperature} celcius</h5>
				<img src={capitalWeather.current.weather_icons[0]} alt="Weather icon" height="40px" width="40px" /><br />
				<strong>wind:</strong> {capitalWeather.current.wind_speed} mph direction {capitalWeather.current.wind_dir}
			</div>
		)
	}
	return null
}

export default Weather