<script setup>
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import { useFirestore } from 'vuefire';
import { collection, addDoc } from 'firebase/firestore';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';

import { propertySchema, imageSchema } from '@/validations/propertySchema';
import useImage from '@/composables/useImage';
import useLocationMap from '@/composables/useLocationMap';

const items = [1, 2, 3, 4, 5];

const router = useRouter();

const { uploadImage, imageUrl, url } = useImage();

const { zoom, center, pin } = useLocationMap();

const db = useFirestore();
const { handleSubmit } = useForm({
  validationSchema: { ...propertySchema, ...imageSchema }
});

const title = useField('title');
const image = useField('image');
const price = useField('price');
const rooms = useField('rooms');
const wc = useField('wc');
const parking = useField('parking');
const description = useField('description');
const swimmingPool = useField('swimmingPool', null, { initialValue: false });

const submit = handleSubmit(async (values) => {
  const { image, ...property } = values;

  const docRef = await addDoc(collection(db, 'properties'), {
    ...property,
    image: url.value,
    location: center.value
  });

  if (docRef.id) router.push({ name: 'admin-properties' });
});
</script>

<template>
  <v-card flat max-width="800" class="mx-auto my-10">
    <v-card-title class="text-h4 font-weight-bold" tag="h3">New Property</v-card-title>
    <v-card-subtitle class="text-h5 py-5">
      Create a new propterty filling the following form
    </v-card-subtitle>

    <v-form class="mt-10">
      <v-text-field
        type="text"
        label="Title"
        class="mb-5"
        v-model="title.value.value"
        :error-messages="title.errorMessage.value"
      />

      <v-file-input
        accept="image/jpeg"
        label="Photo"
        prepend-icon="mdi-camera"
        class="mb-5"
        v-model="image.value.value"
        :error-messages="image.errorMessage.value"
        @change="uploadImage"
      />
      <div v-if="imageUrl" class="my-5">
        <p class="font-weight-bold">Property Image:</p>
        <img :src="imageUrl" class="w-50" />
      </div>

      <v-text-field
        type="number"
        label="Price"
        class="mb-5"
        v-model="price.value.value"
        :error-messages="price.errorMessage.value"
      />

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
            label="Parking spaces"
            class="mb-5"
            :items="items"
            v-model="parking.value.value"
            :error-messages="parking.errorMessage.value"
          />
        </v-col>
      </v-row>

      <v-textarea
        label="Description"
        class="mb-5"
        v-model="description.value.value"
        :error-messages="description.errorMessage.value"
      ></v-textarea>
      <v-checkbox label="Swimming pool" v-model="swimmingPool.value.value" />

      <h2 class="font-weight-bold text-center my-5">Location</h2>
      <div class="pb-10">
        <div style="height: 600px">
          <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
            <LMarker draggable :lat-lng="center" @moveend="pin" />
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
          </LMap>
        </div>
      </div>

      <v-btn block color="pink-accent-3" @click="submit">Add Property</v-btn>
    </v-form>
  </v-card>
</template>
