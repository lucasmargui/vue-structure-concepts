<template>
  <button @click="handleClick" class="custom-button">
    <span class="button-text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'CustomButtonComponent',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.custom-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition-duration: 0.4s;
}

.custom-button:hover {
  background-color: #45a049;
}

.button-text {
  font-weight: bold;
}
</style>
