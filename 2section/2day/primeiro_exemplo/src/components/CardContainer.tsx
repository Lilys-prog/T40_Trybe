import './CardContainer.css';
import TodayWeather from './TodayWeather';
import Header from './Header';
import sun from '../assets/sun.png';
import cloud from '../assets/cloudy.png';

const style = { backgroundColor: 'pink', color: 'purple', padding: '1rem' };

const weatherData = [
  {
    day: 'Sun',
    date: 'Nov 23',
    icon: sun,
    condition: 'Sunny',
    min: 15,
    max: 15,
  },
  {
    day: 'Mon',
    date: 'Nov 24',
    icon: cloud,
    condition: 'Cloudy',
    min: 10,
    max: 10,
  },
  {
    day: 'Tue',
    date: 'Nov 25',
    icon: sun,
    condition: 'Sunny',
    min: 12,
    max: 12,
  },
  {
    day: 'Wed',
    date: 'Nov 26',
    icon: cloud,
    condition: 'Thunderstorm',
    min: 14,
    max: 14,
  },
  {
    day: 'Thu',
    date: 'Nov 27',
    icon: cloud,
    condition: 'Cloudy',
    min: 14,
    max: 21,
  },
];

function CardContainer() {
  return (
    <div style={ style }>
      <Header
        title="Previsão do Tempo"
        color="pink"
      />

      <div id="weather-map">
        {
        weatherData.map((day) => (<TodayWeather
          key={ day.date }
          // day={ day.day }
          // date={ day.date }
          // icon={ day.icon }
          // climate={ day.condition }
          // min={ day.min }
          // max={ day.max }
          { ...day }
        />))
      }
      </div>

    </div>
  );
}

export default CardContainer;
