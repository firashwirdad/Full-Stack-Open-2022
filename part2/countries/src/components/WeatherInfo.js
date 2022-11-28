const WeatherInfo = ({ info }) => {
  return (
    <div>
      temperature {info.temp} Celcius<br/>
      <img src={info.icon} alt='icon' /><br/>
      wind {info.wind} m/s
    </div>
  )
}

export default WeatherInfo