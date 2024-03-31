import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import TodayWeather from './components/TodayWeather';
import sun from './assets/sun.png';

function App() {
  return (
    <>
      <Header />
      <CardContainer />
      <TodayWeather
        day="Sunday"
        date="Mar 31"
        icon={ sun }
        climate="Sunny"
        temperature="15-20°C"
      />
    </>
  );
}

export default App;
