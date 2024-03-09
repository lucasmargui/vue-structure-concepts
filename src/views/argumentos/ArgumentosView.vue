<template>
  <div class="home">
    <h1>ArgumentosView</h1>

    <!-- Interpolação de Texto -->
    <p>{{ message }}</p>

    <!-- Binding de Atributos -->
    <a v-bind:href="url">Link</a>

    <!-- Binding de Classes -->
    <div v-bind:class="{ active: isActive }"></div>

    <!-- Binding de Estilos -->
    <div v-bind:style="{ color: textColor, backgroundColor: bgColor }">
      Texto com estilo dinâmico
    </div>

    <!-- Lista Dinâmica -->
    <ul>
      <li v-for="item in filteredItems">{{ item.name }}</li>
    </ul>

    <!-- Formulário Bidirecional -->
    <div>
      <input type="text" v-model="message2" />
      <p>{{ message2 }}</p>
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
      textColor: "blue",
      bgColor: "yellow",
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
