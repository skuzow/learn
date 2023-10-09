<script setup>
import { ref, reactive, watch, computed, onMounted } from 'vue';

import Budget from './components/Budget.vue';
import BudgetControl from './components/BudgetControl.vue';
import Modal from './components/Modal.vue';
import Filters from './components/Filters.vue';
import Expense from './components/Expense.vue';

import newExpenseIcon from './assets/img/nuevo-gasto.svg';

import { generateId } from './helpers';

const budget = ref(0);
const available = ref(0);
const spent = ref(0);
const filter = ref('');

const modal = reactive({
  show: false,
  animate: false
});

const expense = reactive({
  name: '',
  quantity: '',
  category: '',
  id: null,
  date: null
});
const expenses = ref([]);

watch(
  expenses,
  () => {
    const totalExpenses = expenses.value.reduce((acc, expense) => acc + expense.quantity, 0);
    spent.value = totalExpenses;
    available.value = budget.value - totalExpenses;
    localStorage.setItem('expenses', JSON.stringify(expenses.value));
  },
  { deep: true }
);

watch(
  modal,
  () => {
    if (!modal.show) resetExpense();
  },
  { deep: true }
);

watch(budget, () => {
  localStorage.setItem('budget', budget.value);
});

onMounted(() => {
  const budgetStorage = localStorage.getItem('budget');
  if (budgetStorage) {
    budget.value = Number(budgetStorage);
    available.value = Number(budgetStorage);
  }
  const expensesStorage = localStorage.getItem('expenses');
  if (expensesStorage) expenses.value = JSON.parse(expensesStorage);
});

const resetExpense = () => {
  Object.assign(expense, {
    name: '',
    quantity: '',
    category: '',
    id: null,
    date: null
  });
};

const defineBudget = (amount) => {
  budget.value = amount;
  available.value = amount;
};

const showModal = () => {
  modal.show = true;
  setTimeout(() => {
    modal.animate = true;
  }, 300);
};

const hideModal = () => {
  modal.animate = false;
  setTimeout(() => {
    modal.show = false;
  }, 300);
};

const saveExpense = () => {
  if (expense.id) {
    const { id } = expense;
    const expenseIndex = expenses.value.findIndex((expense) => expense.id === id);
    expenses.value[expenseIndex] = { ...expense };
  } else {
    expenses.value.push({ ...expense, id: generateId(), date: Date.now() });
  }
  hideModal();
};

const selectExpense = (id) => {
  const selectedExpense = expenses.value.find((expense) => expense.id === id);
  Object.assign(expense, selectedExpense);
  showModal();
};

const deleteExpense = () => {
  if (!confirm('Are you sure you want to delete this expense?')) return;
  expenses.value = expenses.value.filter((expenseState) => expenseState.id !== expense.id);
  hideModal();
};

const filteredExpenses = computed(() => {
  if (filter.value) {
    return expenses.value.filter((expense) => expense.category === filter.value);
  }
  return expenses.value;
});

const resetApp = () => {
  if (!confirm('Are you sure you want to reset budget and expenses?')) return;
  budget.value = 0;
  expenses.value = [];
};
</script>

<template>
  <div :class="{ fix: modal.show }">
    <header>
      <h1>Expense Manager</h1>
      <div class="container-header container shadow">
        <Budget v-if="budget === 0" @define-budget="defineBudget" />
        <BudgetControl
          v-else
          :budget="budget"
          :available="available"
          :spent="spent"
          @reset-app="resetApp"
        />
      </div>
    </header>

    <main v-if="budget > 0">
      <Filters v-model:filter="filter" />
      <div class="expense-list container">
        <h2>{{ filteredExpenses.length > 0 ? 'Expenses' : 'No expenses' }}</h2>
        <Expense
          v-for="expense in filteredExpenses"
          :key="expense.id"
          :expense="expense"
          @select-expense="selectExpense"
        />
      </div>

      <div class="create-expense">
        <img :src="newExpenseIcon" alt="new expense icon" @click="showModal" />
      </div>
      <Modal
        v-if="modal.show"
        :modal="modal"
        :available="available"
        :id="expense.id"
        v-model:name="expense.name"
        v-model:quantity="expense.quantity"
        v-model:category="expense.category"
        @hide-modal="hideModal"
        @save-expense="saveExpense"
        @delete-expense="deleteExpense"
      />
    </main>
  </div>
</template>

<style lang="scss">
:root {
  --blue: #3b82f6;
  --white: #fff;
  --light-grey: #f5f5f5;
  --grey: #94a3b8;
  --dark-grey: #64748b;
  --black: #000;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
  background-color: var(--light-grey);
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

.fix {
  overflow: hidden;
  height: 100vh;
}

header {
  background-color: var(--blue);
}

header h1 {
  padding: 3rem 0;
  margin: 0;
  color: var(--white);
  text-align: center;
}

.container {
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
}

.container-header {
  margin-top: -5rem;
  transform: translateY(5rem);
  padding: 5rem;
}

.shadow {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  border-radius: 1.2rem;
  padding: 5rem;
}

.create-expense {
  position: fixed;
  bottom: 5rem;
  right: 5rem;
}

.create-expense img {
  width: 5rem;
  cursor: pointer;
}

.expense-list {
  margin-top: 10rem;
}

.expense-list h2 {
  font-weight: 900;
  color: var(--dark-grey);
}
</style>
