<script setup>
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFirestore, useDocument } from 'vuefire';
import { doc, updateDoc } from 'firebase/firestore';
import { useField, useForm } from 'vee-validate';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';

import useImage from '@/composables/useImage';
import useLocationMap from '@/composables/useLocationMap';
import { propertySchema as validationSchema } from '@/validations/propertySchema';

const route = useRoute();
const router = useRouter();

const db = useFirestore();
const propertyId = route.params.id;
const propertyRef = doc(db, 'properties', propertyId);
const property = useDocument(propertyRef);

watch(property, (property) => {
  title.value.value = property.title;
  price.value.value = property.price;
  rooms.value.value = property.rooms;
  wc.value.value = property.wc;
  parking.value.value = property.parking;
  description.value.value = property.description;
  swimmingPool.value.value = property.swimmingPool;
  center.value = property.location;
});

const items = [1, 2, 3, 4, 5];

const { uploadImage, imageUrl, url } = useImage();

const { zoom, center, pin } = useLocationMap();

const { handleSubmit } = useForm({ validationSchema });

const title = useField('title');
const image = useField('image');
const price = useField('price');
const rooms = useField('rooms');
const wc = useField('wc');
const parking = useField('parking');
const description = useField('description');
const swimmingPool = useField('swimmingPool');

const submit = handleSubmit(async (values) => {
  const { image, ...property } = values;

  let editedProperty = {};

  if (imageUrl.value) {
    editedProperty = {
      ...property,
      image: url.value,
      location: center.value
    };
  } else {
    editedProperty = {
      ...property,
      location: center.value
    };
  }

  await updateDoc(propertyRef, editedProperty);

  router.push({ name: 'admin-properties' });
});
</script>

<template>
  <v-card max-width="800" flat class="mx-auto my-10">
    <v-card-title class="mt-5">
      <h1 class="text-h4 font-weight-bold">Edit Property</h1>
    </v-card-title>
    <v-card-subtitle>
      <p class="text-h5">Edit property values</p>
    </v-card-subtitle>

    <v-form class="mt-10">
      <v-text-field
        v-model="title.value.value"
        :error-messages="title.errorMessage.value"
        label="Title"
        class="mb-5"
      ></v-text-field>

      <v-file-input
        v-model="image.value.value"
        :error-messages="image.errorMessage.value"
        accept="image/jpeg"
        prepend-icon="mdi-camera"
        label="Image"
        class="mb-5"
        @change="uploadImage"
      ></v-file-input>

      <div class="my-5">
        <p class="font-weight-bold">Current Image:</p>

        <img v-if="imageUrl" :src="imageUrl" class="w-50" />
        <img v-else :src="property?.image" class="w-50" />
      </div>

      <v-text-field
        v-model="price.value.value"
        :error-messages="price.errorMessage.value"
        label="Price"
        class="mb-5"
      ></v-text-field>

      <v-row>
        <v-col cols="12" md="4">
          <v-select
            label="Rooms"
            class="mb-5"
            :items="items"
            v-model="rooms.value.value"
            :error-messages="rooms.errorMessage.value"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            label="WC"
            class="mb-5"
            :items="items"
            v-model="wc.value.value"
            :error-messages="wc.errorMessage.value"
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            label="Parking"
            class="mb-5"
            :items="items"
            v-model="parking.value.value"
            :error-messages="parking.errorMessage.value"
          />
        </v-col>
      </v-row>

      <v-textarea
        v-model="description.value.value"
        :error-messages="description.errorMessage.value"
        label="Description"
        class="mb-5"
      ></v-textarea>
      <v-checkbox v-model="swimmingPool.value.value" label="Swimming pool"></v-checkbox>

      <h2 class="font-weight-bold text-center my-5">Ubicación</h2>
      <div class="pb-10">
        <div style="height: 600px">
          <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
            <LMarker draggable :lat-lng="center" @moveend="pin" />
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
          </LMap>
        </div>
      </div>

      <v-btn block color="pink-accent-3" @click="submit">Save Changes</v-btn>
    </v-form>
  </v-card>
</template>
