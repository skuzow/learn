<script setup>
import { onMounted, ref, computed } from 'vue';

import RouterLink from '../components/ui/RouterLink.vue';
import Heading from '../components/ui/Heading.vue';
import Client from '../components/Client.vue';

import ClientService from '../services/ClientService';

const clients = ref([]);

onMounted(() => {
  ClientService.obtainClients()
    .then(({ data }) => (clients.value = data))
    .catch(() => console.log('There was an error'));
});

defineProps({
  title: {
    type: String,
    required: true
  }
});

const existClients = computed(() => clients.value.length > 0);

const updateStatus = ({ id, status }) => {
  ClientService.editClient(id, { status: !status })
    .then(() => {
      const index = clients.value.findIndex((client) => client.id === id);
      clients.value[index].status = !status;
    })
    .catch(() => console.log('There was an error'));
};

const deleteClient = (id) => {
  ClientService.deleteClient(id)
    .then(() => {
      clients.value = clients.value.filter((client) => client.id !== id);
    })
    .catch(() => console.log('There was an error'));
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="add-client">Add Client</RouterLink>
    </div>
    <Heading>{{ title }}</Heading>

    <div v-if="existClients" class="flow-root mx-auto mt-10 p-5 bg-white shadow">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Name</th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Company
                </th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Status
                </th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <Client
                v-for="client in clients"
                :key="client.id"
                :client="client"
                @update-status="updateStatus"
                @delete-client="deleteClient"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p v-else class="text-center mt-10">There are no clients</p>
  </div>
</template>
