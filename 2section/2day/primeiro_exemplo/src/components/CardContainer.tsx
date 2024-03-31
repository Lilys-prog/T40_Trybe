import './CardContainer.css';
import TodayWeather from './TodayWeather';
import Header from './Header';
import sun from '../assets/sun.png';
import cloud from '../assets/cloudy.png';

const style = { backgroundColor: 'pink', color: 'purple', padding: '1rem' };

function CardContainer() {
  return (
    <div style={ style }>
      <Header
        title="Previsão do Tempo"
        color="pink"
      />

      <TodayWeather
        day="Today: Sunday"
        date="Mar 31"
        icon={ sun }
        climate="Sunny"
        temperature="15-20°C"
      />
      <TodayWeather
        day="Monday"
        date="Apr 01"
        icon={ cloud }
        climate="Cloudy"
        temperature="15-20°C"
      />
    </div>
  );
}

export default CardContainer;
