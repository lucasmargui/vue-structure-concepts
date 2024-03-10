<template>
  <div class="home">
    <h1 class="title">ArgumentosView</h1>

    <!-- Interpolação de Texto -->
    <p class="text">{{ message }}</p>

    <!-- Binding de Atributos -->
    <a v-bind:href="url" class="link">Link</a>

    <!-- Binding de Classes -->
    <div v-bind:class="{ active: isActive }" class="box"></div>

    <!-- Binding de Estilos -->
    <div v-bind:style="{ color: textColor, backgroundColor: bgColor }" class="styled-box">
      Texto com estilo dinâmico
    </div>

    <!-- Lista Dinâmica -->
    <ul class="list">
      <li v-for="item in filteredItems" :key="item.id" class="list-item">{{ item.name }}</li>
    </ul>

    <!-- Formulário Bidirecional -->
    <div class="form">
      <input type="text" v-model="message2" class="input" />
      <p class="text">{{ message2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArgumentosView",

  data() {
    return {
      message: "Olá, mundo!",
      url: "https://www.exemplo.com",
      isActive: true,
      textColor: "#333",
      bgColor: "#f0f0f0",
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ],
      message2: "",
    };
  },
};
</script>

<style scoped>
  /* Estilos mais complexos e bonitos */

  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
  }

  .title {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  .text {
    color: #333;
    margin-bottom: 10px;
  }

  .link {
    text-decoration: none;
    color: #007bff;
    margin-bottom: 10px;
  }

  .box {
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
  }

  .active {
    background-color: orange;
  }

  .styled-box {
    padding: 10px;
    margin-bottom: 10px;
    color: #333;
    background-color: #f0f0f0;
  }

  .list {
    list-style-type: none;
    padding: 0;
    text-align: center;
  }

  .list-item {
    margin-bottom: 5px;
  }

  .form {
    margin-top: 20px;
    text-align: center;
  }

  .input {
    padding: 5px;
    margin-bottom: 10px;
  }
</style>
