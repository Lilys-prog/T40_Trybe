type TodayWeatherProps = {
  day: string;
  date: string;
  icon: string;
  climate: string;
  temperature: string
};

function TodayWeather({ day, date, icon, climate, temperature }:TodayWeatherProps) {
  return (
    <div>
      <h2>{ day }</h2>
      <p>{ date }</p>
      <img src={ icon } alt="" />
      <h2>{ climate }</h2>
      <p>{ temperature }</p>
    </div>
  );
}

export default TodayWeather;
