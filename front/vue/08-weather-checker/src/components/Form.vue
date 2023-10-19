<script setup>
import { reactive, ref } from 'vue';

import Alert from './Alert.vue';

const emits = defineEmits(['obtain-weather']);

const search = reactive({
  city: '',
  country: ''
});
const error = ref('');

const countries = [
  { code: 'US', name: 'United States' },
  { code: 'MX', name: 'México' },
  { code: 'AR', name: 'Argentina' },
  { code: 'CO', name: 'Colombia' },
  { code: 'CR', name: 'Costa Rica' },
  { code: 'ES', name: 'Spain' },
  { code: 'PE', name: 'Perú' }
];

const checkWeather = () => {
  if (Object.values(search).includes('')) {
    error.value = 'All fields are required';
    return;
  }
  error.value = '';
  emits('obtain-weather', search);
};
</script>

<template>
  <form class="formulario" @submit.prevent="checkWeather">
    <Alert v-if="error">{{ error }}</Alert>
    <div class="campo">
      <label for="city">City</label>
      <input type="text" id="city" placeholder="City" v-model="search.city" />
    </div>

    <div class="campo">
      <label for="country">Country</label>
      <select id="country" v-model="search.country">
        <option value="">-- Select a country --</option>
        <option v-for="country in countries" :value="country.code">
          {{ country.name }}
        </option>
      </select>
    </div>

    <input type="submit" value="Check Weather" />
  </form>
</template>
