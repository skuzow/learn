<script setup>
import Property from '@/components/Property.vue';
import useProperties from '@/composables/useProperties';
import { propertyPrice } from '@/helpers';

const { swimmingPool, filteredProperties } = useProperties();
</script>

<template>
  <h1 class="text-center text-h3 font-weight-bold my-5">Properties</h1>

  <v-card flat class="py-10">
    <v-card-title class="text-h5">
      Search
      <v-checkbox label="Swimming pool" v-model="swimmingPool" />
    </v-card-title>

    <v-row>
      <Property
        v-for="property in filteredProperties"
        :key="property.id"
        :property="property"
        :price="propertyPrice"
      />
    </v-row>
  </v-card>
</template>
