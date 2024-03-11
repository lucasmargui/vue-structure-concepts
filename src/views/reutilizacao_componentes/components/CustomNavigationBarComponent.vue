<template>
  <div class="navigation-bar">
    <ul class="navigation-list">
      <li class="navigation-item"><a href="#" class="navigation-link">Home</a></li>
      <li class="navigation-item"><a href="#" class="navigation-link">Sobre</a></li>
      <li class="navigation-item"><a href="#" class="navigation-link">Serviços</a></li>
      <li class="navigation-item"><a href="#" class="navigation-link">Contato</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomNavigationBarComponent',
  // Lógica do componente, se necessário
}
</script>

<style scoped>
.navigation-bar {
  background-color: #333;
  padding: 10px 20px;
  border-bottom: 2px solid #ff6600;
}

.navigation-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation-item {
  display: inline-block;
  margin-right: 20px;
}

.navigation-link {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navigation-link:hover {
  color: #ff6600;
}
</style>
