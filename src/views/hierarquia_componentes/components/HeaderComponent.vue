<template>
  <header class="header">
    <div class="logo">
      <img src="https://via.placeholder.com/75?text=logopng" alt="Logo">
    </div>
    <nav class="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  max-width: 150px;
}

.navigation ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.navigation ul li {
  margin-right: 20px;
}

.navigation ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.navigation ul li a:hover {
  text-decoration: underline;
}
</style>
