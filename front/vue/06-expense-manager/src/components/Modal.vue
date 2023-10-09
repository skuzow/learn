<script setup>
import { ref, computed } from 'vue';

import Alert from './Alert.vue';

import closeModalIcon from '../assets/img/cerrar.svg';

import { formatQuantity } from '../helpers';

const props = defineProps({
  modal: {
    type: Object,
    required: true
  },
  available: {
    type: Number,
    required: true
  },
  id: {
    type: [String, null],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: [String, Number],
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const emits = defineEmits([
  'update:name',
  'update:quantity',
  'update:category',
  'hide-modal',
  'save-expense',
  'delete-expense'
]);

const error = ref('');

const resetError = () => {
  setTimeout(() => {
    error.value = '';
  }, 3000);
};

const oldQuantity = props.quantity;

const isEditing = computed(() => props.id);

const addExpense = () => {
  const { available, name, quantity, category } = props;
  if ([name, quantity, category].includes('')) {
    error.value = 'All fields are required';
    resetError();
    return;
  }
  if (quantity <= 0) {
    error.value = 'Quantity not valid';
    resetError();
    return;
  }
  if (isEditing) {
    if (quantity > oldQuantity + available) {
      error.value =
        'You exceeded the budget, remaining: ' + formatQuantity(available + oldQuantity);
      resetError();
      return;
    }
  } else if (quantity > available) {
    error.value = 'You exceeded the budget, remaining: ' + formatQuantity(available);
    resetError();
    return;
  }
  emits('save-expense');
};
</script>

<template>
  <div class="modal">
    <div class="close-modal">
      <img :src="closeModalIcon" alt="close modal icon" @click="$emit('hide-modal')" />
    </div>
    <div class="container container-form" :class="[modal.animate ? 'animate' : 'close']">
      <form class="new-expense" @submit.prevent="addExpense">
        <legend>{{ isEditing ? 'Edit Expense' : 'Add Expense' }}</legend>
        <Alert v-if="error">{{ error }}</Alert>
        <div class="field">
          <label for="name">Expense Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Add Expense Name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
          />
        </div>

        <div class="field">
          <label for="quantity">Quantity:</label>
          <input
            type="number"
            min="0"
            id="quantity"
            placeholder="Add Expense Quantity, ex. 300"
            :value="quantity"
            @input="$emit('update:quantity', +$event.target.value)"
          />
        </div>

        <div class="field">
          <label for="category">Category:</label>
          <select
            id="category"
            :value="category"
            @input="$emit('update:category', $event.target.value)"
          >
            <option value="">-- Select --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="expenses">Miscellaneous Expenses</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>

        <input type="submit" :value="[isEditing ? 'Save Changes' : 'Add Expense']" />
      </form>

      <button v-if="isEditing" type="button" class="btn-delete" @click="$emit('delete-expense')">
        Delete Expense
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  background-color: rgb(0 0 0 / 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.close-modal {
  position: absolute;
  right: 3rem;
  top: 3rem;
}

.close-modal img {
  width: 3rem;
  cursor: pointer;
}

.container-form {
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in;
  opacity: 0;
}

.container-form.animate {
  opacity: 1;
}

.container-form.close {
  opacity: 0;
}

.new-expense {
  margin: 10rem auto 0 auto;
  display: grid;
  gap: 2rem;
}

.new-expense legend {
  text-align: center;
  color: var(--white);
  font-size: 3rem;
  font-weight: 700;
}

.field {
  display: grid;
  gap: 2rem;
}

.new-expense input,
.new-expense select {
  background-color: var(--light-grey);
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  font-size: 2.2rem;
}

.new-expense label {
  color: var(--white);
  font-size: 3rem;
}

.new-expense input[type='submit'] {
  background-color: var(--blue);
  color: var(--white);
  font-weight: 700;
  transition: background-color 300ms ease;
}

.new-expense input[type='submit']:hover {
  cursor: pointer;
  background-color: #306ccc;
}

.btn-delete {
  border: none;
  padding: 1rem;
  width: 100%;
  background-color: #ef4444;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--white);
  margin-top: 2rem;
  font-size: 2.2rem;
  border-radius: 1rem;
  transition: background-color 300ms ease;
}

.btn-delete:hover {
  cursor: pointer;
  background-color: #c43333;
}
</style>
