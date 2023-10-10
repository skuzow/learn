<script setup>
import { ref, reactive } from 'vue';

import Alert from './components/Alert.vue';
import Spinner from './components/Spinner.vue';
import Quotation from './components/Quotation.vue';

import useCrypto from './composables/useCrypto';
const { currencies, cryptoCurrencies, quotation, loading, obtainQuote, showResult } = useCrypto();

const error = ref('');
const quote = reactive({
  currency: '',
  cryptoCurrency: ''
});

const setError = (message) => {
  error.value = message;
  setTimeout(() => (error.value = ''), 3000);
};

const quoteCrypto = () => {
  if (Object.values(quote).includes('')) {
    setError('All fields are required');
    return;
  }
  obtainQuote(quote);
};
</script>

<template>
  <div class="contenedor">
    <h1 class="titulo">Cryptocurrency <span>Quoter</span></h1>
    <div class="contenido">
      <Alert v-if="error">{{ error }}</Alert>
      <form class="formulario" @submit.prevent="quoteCrypto">
        <div class="campo">
          <label for="currency">Currency:</label>
          <select id="currency" v-model="quote.currency">
            <option value="">-- Select --</option>
            <option v-for="currency in currencies" :value="currency.code">
              {{ currency.text }}
            </option>
          </select>
        </div>

        <div class="campo">
          <label for="cripto">CryptoCurrency :</label>
          <select id="cripto" v-model="quote.cryptoCurrency">
            <option value="">-- Select --</option>
            <option
              v-for="cryptoCurrency in cryptoCurrencies"
              :value="cryptoCurrency.CoinInfo.Name"
            >
              {{ cryptoCurrency.CoinInfo.FullName }}
            </option>
          </select>
        </div>

        <input type="submit" value="Quote" />
      </form>

      <Spinner v-if="loading" />
      <Quotation v-if="showResult" :quotation="quotation" />
    </div>
  </div>
</template>
