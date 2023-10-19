<script setup>
import useWeather from '../composables/useWeather';
const { formatTemperature } = useWeather();

defineProps({
  weather: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="resultado">
    <h2>Weather of: {{ weather.name }}</h2>
    <p class="actual">{{ formatTemperature(weather.main.temp) }} &deg;C</p>
    <div class="temperaturas">
      <p>Min: {{ formatTemperature(weather.main.temp_min) }}<span>&deg;C</span></p>
      <p>Max: {{ formatTemperature(weather.main.temp_max) }}<span>&deg;C</span></p>
    </div>
  </div>
</template>
