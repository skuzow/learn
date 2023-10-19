<script setup>
import { useRouter } from 'vue-router';
import { FormKit } from '@formkit/vue';

import RouterLink from '../components/ui/RouterLink.vue';
import Heading from '../components/ui/Heading.vue';

import ClientService from '../services/ClientService';

const router = useRouter();

defineProps({
  title: {
    type: String,
    required: true
  }
});

const handleSubmit = (data) => {
  data.status = true;
  ClientService.addClient(data)
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
          submit-label="Add Client"
          incomplete-message="Cannot validate, revise messages"
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            name="name"
            label="Name"
            placeholder="Client name"
            validation="required"
            :validation-messages="{ required: 'Client name is required' }"
          />

          <FormKit
            type="text"
            name="surname"
            label="Surname"
            placeholder="Client surname"
            validation="required"
            :validation-messages="{ required: 'Client surname is required' }"
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
          />

          <FormKit
            type="text"
            name="phone"
            label="Phone"
            placeholder="Client phone number XXX-XXX-XXXX"
            validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'Format not valid' }"
          />

          <FormKit type="text" name="company" label="Company" placeholder="Client company" />

          <FormKit type="text" name="position" label="Position" placeholder="Client position" />
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
