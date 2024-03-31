import './TodayWeather.css';

type TodayWeatherProps = {
  day: string;
  date: string;
  icon: string;
  climate: string;
  temperature: string
};

function TodayWeather({ day, date, icon, climate, temperature }:TodayWeatherProps) {
  return (
    <div id="weather-id">
      <h2>{ day }</h2>
      <p>{ date }</p>
      <img src={ icon } alt="" />
      <h3>{ climate }</h3>
      <p>{ temperature }</p>
    </div>
  );
}

export default TodayWeather;
