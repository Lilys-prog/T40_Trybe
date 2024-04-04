import './TodayWeather.css';

type TodayWeatherProps = {
  day: string;
  date: string;
  icon: string;
  condition: string;
  min: number;
  max: number;
};

function TodayWeather({ day, date, icon, condition, min, max }:TodayWeatherProps) {
  return (
    <div id="weather-id">
      <h2>{ day }</h2>
      <p>{ date }</p>
      <img src={ icon } alt="" />
      <h3>{ condition }</h3>
      <p>{ `${min} - ${max}` }</p>
    </div>
  );
}

export default TodayWeather;
