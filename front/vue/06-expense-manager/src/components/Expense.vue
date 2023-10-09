<script setup>
import savingIcon from '../assets/img/icono_ahorro.svg';
import foodIcon from '../assets/img/icono_comida.svg';
import houseIcon from '../assets/img/icono_casa.svg';
import expensesIcon from '../assets/img/icono_gastos.svg';
import entertainmentIcon from '../assets/img/icono_ocio.svg';
import healthIcon from '../assets/img/icono_salud.svg';
import subscriptionsIcon from '../assets/img/icono_suscripciones.svg';

import { formatDate, formatQuantity } from '../helpers';

const categoryIcons = {
  saving: savingIcon,
  food: foodIcon,
  house: houseIcon,
  expenses: expensesIcon,
  entertainment: entertainmentIcon,
  health: healthIcon,
  subscriptions: subscriptionsIcon
};

const props = defineProps({
  expense: {
    type: Object,
    required: true
  }
});
defineEmits(['select-expense']);
</script>

<template>
  <div class="expense shadow">
    <div class="content">
      <img :src="categoryIcons[expense.category]" alt="Expense icon" class="icon" />
      <div class="details">
        <p class="category">{{ expense.category }}</p>
        <p class="name" @click="$emit('select-expense', expense.id)">{{ expense.name }}</p>
        <p class="date">
          Date:
          <span>{{ formatDate(expense.date) }}</span>
        </p>
      </div>
    </div>
    <p class="quantity">{{ formatQuantity(expense.quantity) }}</p>
  </div>
</template>

<style lang="scss" scoped>
.expense {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.icon {
  width: 5rem;
}

.details p {
  margin: 0 0 1rem 0;
}

.category {
  color: var(--grey);
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 900;
}

.name {
  color: var(--dark-grey);
  font-size: 2.4rem;
  font-weight: 700;
  cursor: pointer;
}

.date {
  color: var(--dark-grey);
  font-size: 1.6rem;
  font-weight: 900;
}

.date span {
  font-weight: 400;
}

.quantity {
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
}
</style>
