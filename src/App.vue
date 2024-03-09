<template>
  <nav>
    <div class="container">
      <!-- Iterar sobre a lista de rotas e criar um router-link para cada uma -->
      <CustomRouterLink v-for="route in routes" :route="route" />
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.container {
  display: flex; /* Ativar o flexbox */
  justify-content: center; /* Centralizar horizontalmente */
  align-items: center; /* Centralizar verticalmente */
  height: 100px;
  border: 2px solid #333; /* Borda para visualização */
}



</style>

<script>
// Importe as rotas diretamente do arquivo de rotas
import routes from "@/constants/routes.js";
import CustomRouterLink from "@/components/CustomRouterLink.vue";

export default {
  data() {
    return {
      routes: routes,
    };
  },
  components: {
    CustomRouterLink,
  },
};
</script>

