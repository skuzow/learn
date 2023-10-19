<script setup>
import Form from './components/Form.vue';
import Weather from './components/Weather.vue';
import Spinner from './components/Spinner.vue';
import Alert from './components/Alert.vue';

import useWeather from './composables/useWeather';
const { obtainWeather, weather, showWeather, loading, error } = useWeather();
</script>

<template>
  <h1 class="titulo">Weather Checker</h1>
  <div class="contenedor buscador-clima">
    <Form @obtain-weather="obtainWeather" />

    <Spinner v-if="loading" />
    <Alert v-if="error">{{ error }}</Alert>
    <Weather v-if="showWeather" :weather="weather" />
  </div>
</template>
