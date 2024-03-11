<template>
  <main class="main-content">
    <h2>Main Content</h2>
    <div class="content">
      <p>Welcome to our website. We offer a variety of services...</p>
      <button @click="showMore">Show More</button>
      <div v-if="showDetails">
        <!-- Conteúdo detalhado -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainContentComponent',
  data() {
    return {
      showDetails: false
    };
  },
  methods: {
    showMore() {
      this.showDetails = !this.showDetails;
    }
  }
}
</script>

<style scoped>
.main-content {
  padding: 20px;
  background-color: #f0f0f0;
}

.content {
  margin-top: 20px;
}

.content button {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.content button:hover {
  background-color: #555;
  transition: background-color 0.3s ease;
}
</style>
