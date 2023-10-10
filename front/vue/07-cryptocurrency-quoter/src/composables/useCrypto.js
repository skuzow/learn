import { ref, onMounted, computed } from 'vue';

export default function useCrypto() {
  const currencies = ref([
    { code: 'USD', text: 'US Dolar' },
    { code: 'MXN', text: 'Peso Mexicano' },
    { code: 'EUR', text: 'Euro' },
    { code: 'GBP', text: 'Libra Esterlina' }
  ]);
  const cryptoCurrencies = ref([]);

  const quotation = ref({});
  const loading = ref(false);

  onMounted(() => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
    fetch(url)
      .then((response) => response.json())
      .then(({ Data }) => {
        cryptoCurrencies.value = Data;
      });
  });

  const obtainQuote = async (quote) => {
    loading.value = true;
    quotation.value = {};
    try {
      const { currency, cryptoCurrency } = quote;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
      const response = await fetch(url);
      const data = await response.json();
      quotation.value = data.DISPLAY[cryptoCurrency][currency];
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const showResult = computed(() => Object.values(quotation.value).length);

  return {
    currencies,
    cryptoCurrencies,
    quotation,
    loading,
    obtainQuote,
    showResult
  };
}
