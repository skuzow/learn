import { ref, computed } from 'vue';
import axios from 'axios';

export default function useWeather() {
  const weather = ref({});
  const loading = ref(false);
  const error = ref('');

  const showWeather = computed(() => Object.values(weather.value).length > 0);

  const obtainWeather = async ({ city, country }) => {
    const key = import.meta.env.VITE_WEATHER_API_KEY;
    loading.value = true;
    weather.value = {};
    error.value = '';
    try {
      const { lat, lon } = await obtainLatLonByCityCountry(key, city, country);
      weather.value = await obtainWeatherByLatLon(key, lat, lon);
    } catch {
      error.value = 'City not found';
    } finally {
      loading.value = false;
    }
  };

  const obtainLatLonByCityCountry = async (key, city, country) => {
    const urlLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`;
    const { data } = await axios(urlLatLon);
    return data[0];
  };

  const obtainWeatherByLatLon = async (key, lat, lon) => {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    const { data } = await axios(urlWeather);
    return data;
  };

  const formatTemperature = (temperature) => parseInt(temperature - 273.15);

  return {
    obtainWeather,
    weather,
    showWeather,
    formatTemperature,
    loading,
    error
  };
}
