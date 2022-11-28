import { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'

const CountryInfo = ({ query }) => {
  const [forecast, setForecast] = useState([])

  const loc = {
    lat: query.map(c => c.latlng[0]),
    lng: query.map(c => c.latlng[1])
  }

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.lng}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(response => {
        setForecast({
          temp: response.data.main.temp,
          icon: 'http://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png',
          wind: response.data.wind.speed
        })
      })
  }, [])

  return (
    <div>
      {query.map(c => 
        <div key={c.name}>
          <h1>{c.name.common}</h1>
          <div>
            capital {c.capital}<br/>
            area {c.area}
          </div>
          <h2>languages:</h2>
          <div>
            <ul>
              {Object.values(c.languages).map((value, index) => 
              <li key={index} >{value}</li>)}
            </ul>
          </div>
          <div>
            <img src={c.flags.png} alt='flag' />
          </div>
          <h2>Weather in {c.capital}</h2>
        </div>)}
        <WeatherInfo info={forecast} />
    </div>
  )
}

export default CountryInfo