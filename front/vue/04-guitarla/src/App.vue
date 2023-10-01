<script setup>
import { ref, watch, onMounted } from 'vue';

import Header from './components/Header.vue';
import Guitar from './components/Guitar.vue';
import Footer from './components/Footer.vue';

import { db } from './data/guitars.js';

const guitars = ref([]);
const cart = ref([]);
const guitar = ref({});

// deep => ===
watch(cart, () => saveCartToLocalStorage(), { deep: true });

onMounted(() => {
  guitars.value = db;
  guitar.value = db[3];
  const cartLocalStorage = localStorage.getItem('cart');
  if (cartLocalStorage) cart.value = JSON.parse(cartLocalStorage);
});

const saveCartToLocalStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

const findCartGuitarIndex = (id) => {
  return cart.value.findIndex((item) => item.id === id);
};

const addToCart = (guitar) => {
  const cartGuitarIndex = findCartGuitarIndex(guitar.id);
  if (cartGuitarIndex >= 0) {
    cart.value[cartGuitarIndex].cantidad++;
  } else {
    guitar.cantidad = 1;
    cart.value.push(guitar);
  }
};

const decrementCartItemQuantity = (id) => {
  const cartGuitarIndex = findCartGuitarIndex(id);
  if (cart.value[cartGuitarIndex].cantidad <= 1) return;
  cart.value[cartGuitarIndex].cantidad--;
};

const incrementCartItemQuantity = (id) => {
  const cartGuitarIndex = findCartGuitarIndex(id);
  if (cart.value[cartGuitarIndex].cantidad >= 5) return;
  cart.value[cartGuitarIndex].cantidad++;
};

const removeCartItem = (id) => {
  cart.value = cart.value.filter((item) => item.id !== id);
};

const emptyCart = () => {
  cart.value = [];
};
</script>

<template>
  <Header
    :cart="cart"
    :guitar="guitar"
    @decrement-cart-item-quantity="decrementCartItemQuantity"
    @increment-cart-item-quantity="incrementCartItemQuantity"
    @add-to-cart="addToCart"
    @remove-cart-item="removeCartItem"
    @empty-cart="emptyCart"
  />

  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>
    <div class="row mt-5">
      <Guitar
        v-for="guitar in guitars"
        :key="guitar.id"
        :guitar="guitar"
        @add-to-cart="addToCart"
      />
    </div>
  </main>

  <Footer />
</template>
