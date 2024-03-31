import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import TodayWeather from './components/TodayWeather';
import sun from './assets/sun.png';
import cloud from './assets/cloudy.png';

function App() {
  return (
    <>
      <Header
        title="Previsão do Tempo"
        color="pink"
      />
      <CardContainer />
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
    </>
  );
}

export default App;
