import './CardContainer.css';
import TodayWeather from './TodayWeather';
import Header from './Header';
import { weatherData } from '../utils/weather-data';

const style = { backgroundColor: 'pink', color: 'purple', padding: '1rem' };

function CardContainer() {
  return (
    <div style={ style }>
      <Header
        title="Previsão do Tempo"
        color="pink"
      />

      <div id="weather-map">
        {
          weatherData
        && weatherData.map((day) => (<TodayWeather
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
