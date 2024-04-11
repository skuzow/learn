<script setup>
import useProperties from '@/composables/useProperties';
import { propertyPrice } from '@/helpers';

const { propertiesCollection, deleteProperty } = useProperties();
</script>

<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>

  <v-btn color="blue" variant="flat" :to="{ name: 'new-property' }">New Property</v-btn>

  <v-card flat class="mx-auto mt-10">
    <v-list>
      <v-list-item v-for="property in propertiesCollection" :key="property.id">
        <template v-slot:prepend>
          <v-list-item-media :start="true">
            <img :src="property.image" width="180" />
          </v-list-item-media>
        </template>

        <v-list-item-title>{{ property.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ propertyPrice(property.price) }}</v-list-item-subtitle>

        <template v-slot:append>
          <v-btn
            flat
            color="info"
            class="mr-2"
            :to="{ name: 'edit-property', params: { id: property.id } }"
          >
            Edit
          </v-btn>
          <v-btn flat color="red-darken-3" @click="deleteProperty(property.id, property.image)">
            Delete
          </v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
