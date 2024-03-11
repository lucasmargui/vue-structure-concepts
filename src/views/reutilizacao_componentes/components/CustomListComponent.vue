<template>
  <ul class="custom-list">
    <li v-for="item in items" :key="item" class="custom-list-item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CustomListComponent',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.custom-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.custom-list-item {
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.custom-list-item:hover {
  background-color: #eaeaea;
}
</style>
