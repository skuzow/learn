<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useDocument, useFirestore } from 'vuefire';
import { doc } from 'firebase/firestore';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';

import useLocationMap from '@/composables/useLocationMap';
import { propertyPrice } from '@/helpers';

const route = useRoute();

const db = useFirestore();
const propertyId = route.params.id;
const propertyRef = doc(db, 'properties', propertyId);
const property = useDocument(propertyRef);

const { zoom, center } = useLocationMap();

watch(property, () => (center.value = property.value.location));
</script>

<template>
  <v-card flat>
    <v-card-title class="mt-5 text-h3 text-center py-5 font-weight-bold">
      {{ property?.title }}
    </v-card-title>

    <v-img cover :src="property?.image" height="550" />

    <div class="bg-blue-grey-lighten-5 d-flex flex-column flex-md-row align-center">
      <v-card-text>
        Price: <span class="font-weight-bold">{{ propertyPrice(property?.price) }}</span>
      </v-card-text>

      <v-card-text>
        Rooms: <span class="font-weight-bold">{{ property?.rooms }}</span>
      </v-card-text>

      <v-card-text>
        WC: <span class="font-weight-bold">{{ property?.wc }}</span>
      </v-card-text>

      <v-card-text>
        Parking: <span class="font-weight-bold">{{ property?.parking }}</span>
      </v-card-text>
    </div>

    <v-row>
      <v-col cols="12" md="8">
        <div class="text-pre-wrap py-10">{{ property?.description }}</div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="py-10" style="height: 600px">
          <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
            <LMarker :lat-lng="center">
              <LPopup>{{ property.title }}</LPopup>
            </LMarker>
            <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
          </LMap>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.text-pre-wrap {
  white-space: pre-wrap;
}
</style>
