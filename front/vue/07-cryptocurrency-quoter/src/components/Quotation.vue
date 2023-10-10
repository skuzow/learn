<script setup>
defineProps({
  quotation: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="contenedor-resultado">
    <h2>Quotation</h2>
    <div class="resultado">
      <img :src="'https://cryptocompare.com/' + quotation.IMAGEURL" alt="cripto image" />
      <div>
        <p>
          Current price: <span>{{ quotation.PRICE }}</span>
        </p>
        <p>
          Highest price of the day: <span>{{ quotation.HIGHDAY }}</span>
        </p>
        <p>
          Lowest price of the day: <span>{{ quotation.LOWDAY }}</span>
        </p>
        <p>
          Last 24 hours variation: <span>{{ quotation.CHANGEPCT24HOUR }}%</span>
        </p>
        <p>
          Last update: <span>{{ quotation.LASTUPDATE }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
