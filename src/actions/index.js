import axios from 'axios';

const API_KEY = '2e4a5c8b4dfa51e69081934585a2257e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// q=London,us&mode=&
// b1b15e88fa797225412429c1c50c122a
export const FETCH_WEATHER =  'FETCH_WEATHER';

export function fetchWeather( city ) {
  const url = `${ROOT_URL}&q=${city},au`;
  const request = axios.get( url );

  // console.log( 'Request:', request );

  return {
    type:'FETCH_WEATHER',
    payload: request
  };
}
