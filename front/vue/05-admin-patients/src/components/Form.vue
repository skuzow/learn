<script setup>
import { reactive, computed } from 'vue';

import Alert from './Alert.vue';

const props = defineProps({
  id: {
    type: [String, null],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  discharge: {
    type: String,
    required: true
  },
  symptoms: {
    type: String,
    required: true
  }
});

const emit = defineEmits([
  'update:name',
  'update:owner',
  'update:email',
  'update:discharge',
  'update:symptoms',
  'save-patient'
]);

const alert = reactive({
  type: '',
  message: ''
});

const resetAlert = () => {
  setTimeout(() => {
    Object.assign(alert, {
      type: '',
      message: ''
    });
  }, 3000);
};

const validate = () => {
  if (Object.values(props).includes('')) {
    alert.type = 'error';
    alert.message = 'All fields are required';
    return;
  }
  emit('save-patient');
  alert.type = 'success';
  alert.message = 'Patient saved successfully';
  resetAlert();
};

const isEdit = computed(() => props.id);
</script>

<template>
  <div class="md:w-1/2">
    <h2 class="font-black text-3xl text-center">Patient Monitoring</h2>
    <p class="text-lg mt-5 text-center mb-10">
      Add Patients and
      <span class="text-indigo-600 font-bold">Administrate</span>
    </p>
    <Alert v-if="alert.message" :alert="alert" />
    <form class="bg-white shadow-md rounded-lg py-10 px-5 mb-10" @submit.prevent="validate">
      <div class="mb-5">
        <label for="mascot" class="block text-gray-700 uppercase font-bold">Mascot Name</label>
        <input
          id="mascot"
          type="text"
          placeholder="Mascot name"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
        />
      </div>

      <div class="mb-5">
        <label for="owner" class="block text-gray-700 uppercase font-bold">Owner Name</label>
        <input
          id="owner"
          type="text"
          placeholder="Owner name"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          :value="owner"
          @input="$emit('update:owner', $event.target.value)"
        />
      </div>

      <div class="mb-5">
        <label for="email" class="block text-gray-700 uppercase font-bold">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Owner email"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          :value="email"
          @input="$emit('update:email', $event.target.value)"
        />
      </div>

      <div class="mb-5">
        <label for="discharge" class="block text-gray-700 uppercase font-bold">
          Discharge Date
        </label>
        <input
          id="discharge"
          type="date"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          :value="discharge"
          @input="$emit('update:discharge', $event.target.value)"
        />
      </div>

      <div class="mb-5">
        <label for="symptoms" class="block text-gray-700 uppercase font-bold">Symptoms</label>
        <textarea
          id="symptoms"
          placeholder="Describe symptoms"
          class="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-40"
          :value="symptoms"
          @input="$emit('update:symptoms', $event.target.value)"
        />
      </div>

      <input
        type="submit"
        class="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
        :value="[isEdit ? 'Save Changes' : 'Register Patient']"
      />
    </form>
  </div>
</template>
