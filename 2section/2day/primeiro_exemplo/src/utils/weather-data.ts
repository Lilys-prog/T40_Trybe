import sun from '../assets/sun.png';
import cloud from '../assets/cloudy.png';
import { TodayWeatherProps } from '../components/TodayWeather';

export const weatherData: TodayWeatherProps[] = [
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
