<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { FormKit } from '@formkit/vue';

import RouterLink from '../components/ui/RouterLink.vue';
import Heading from '../components/ui/Heading.vue';

import ClientService from '../services/ClientService';

const router = useRouter();
const route = useRoute();

const { id } = route.params;

const formData = reactive({});

onMounted(() => {
  ClientService.obtainClient(id)
    .then(({ data }) => Object.assign(formData, data))
    .catch(() => console.log('There was an error'));
});

defineProps({
  title: {
    type: String,
    required: true
  }
});

const handleSubmit = (data) => {
  ClientService.editClient(id, data)
    .then(() => router.push({ name: 'home' }))
    .catch((error) => console.log(error));
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="home">Go Back</RouterLink>
    </div>
    <Heading>{{ title }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Save Changes"
          incomplete-message="Cannot validate, revise messages"
          @submit="handleSubmit"
          :value="formData"
        >
          <FormKit
            type="text"
            name="name"
            label="Name"
            placeholder="Client name"
            validation="required"
            :validation-messages="{ required: 'Client name is required' }"
            v-model="formData.name"
          />

          <FormKit
            type="text"
            name="surname"
            label="Surname"
            placeholder="Client surname"
            validation="required"
            :validation-messages="{ required: 'Client surname is required' }"
            v-model="formData.surname"
          />

          <FormKit
            type="text"
            name="email"
            label="Email"
            placeholder="Client email"
            validation="required | email"
            :validation-messages="{
              required: 'Client email is required',
              email: 'Enter a valid email'
            }"
            v-model="formData.email"
          />

          <FormKit
            type="text"
            name="phone"
            label="Phone"
            placeholder="Client phone number XXX-XXX-XXXX"
            validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'Format not valid' }"
            v-model="formData.phone"
          />

          <FormKit
            type="text"
            name="company"
            label="Company"
            placeholder="Client company"
            v-model="formData.company"
          />

          <FormKit
            type="text"
            name="position"
            label="Position"
            placeholder="Client position"
            v-model="formData.position"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
