<template>
  <footer class="footer">
    <p>&copy; 2024 My Website. All rights reserved.</p>
    <div class="social-links">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

.social-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.social-links a:hover {
  color: #55acee;
}
</style>
