<script setup>
defineProps({
  filter: {
    type: String,
    required: true
  }
});
defineEmits(['update:filter']);
</script>

<template>
  <div class="filters shadow container">
    <form>
      <div class="field">
        <label for="filter">Filter Expenses</label>
        <select id="filter" :value="filter" @input="$emit('update:filter', $event.target.value)">
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
    </form>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  margin-top: 10rem;
}

.filters .field {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.filters label {
  font-size: 3rem;
  font-weight: 900;
  color: var(--dark-grey);
}

.filters select {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--light-grey);
  text-align: center;
}
</style>
