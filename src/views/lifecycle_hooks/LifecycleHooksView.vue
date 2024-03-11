<template>
  <div class="home">
    <h1>{{ lifecycleMessage }}</h1>

    <div v-if="loading">
      <p>Loading data...</p>
      <div class="progress">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <button @click="cancelLoad">Cancel</button>
    </div>

    <div v-if="error">
      <p>
        An error occurred while loading data.
        <button @click="retryLoad">Retry</button>
      </p>
    </div>

    <div v-if="success">
      <h2>Data Received:</h2>
      <ul>
        <li v-for="item in receivedData" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifecycleHooksView",
  data() {
    return {
      lifecycleMessage: "",
      loading: false,
      error: false,
      success: false,
      receivedData: [],
      retryAttempts: 0,
      maxRetryAttempts: 3,
      timeout: null,
      progress: 0,
    };
  },
  created() {
    // Você pode executar tarefas após a inicialização dos dados e métodos.
    // No entanto, o template ainda não foi montado no DOM.
    // Este é um bom lugar para chamadas de API ou busca inicial de dados.
    this.lifecycleMessage = "created hook executed";
    this.loadData();
  },
  beforeCreate: function () {
    console.log(
      "beforeCreate: A instância Vue está sendo criada, mas os dados e eventos ainda não estão inicializados."
    );
    // Você pode realizar algumas tarefas de configuração aqui, mas ainda não pode acessar 'data' ou 'methods'.
  },
  beforeMount: function () {
    console.log(
      "beforeMount: A instância Vue está prestes a ser renderizada ou montada no DOM."
    );
    // Você tem acesso ao template aqui, mas ele ainda não foi renderizado.
  },
  mounted: function () {
    console.log("mounted: A instância Vue foi montada no DOM.");
    // O template foi renderizado e montado no DOM.
    // Você pode interagir com o DOM ou executar qualquer tarefa relacionada ao DOM aqui.
  },
  beforeUpdate: function () {
    console.log(
      "beforeUpdate: Os dados estão prestes a ser atualizados e o Vue irá re-renderizar o DOM."
    );
    // Isso é acionado sempre que os dados mudam, mas antes do DOM ser atualizado.
  },
  updated: function () {
    console.log(
      "updated: Os dados foram atualizados e o DOM foi re-renderizado."
    );
    // Os dados foram atualizados e o DOM foi re-renderizado.
  },
  beforeDestroy: function () {
    console.log("beforeDestroy: A instância Vue está prestes a ser destruída.");
    // Isso é chamado antes que a instância Vue seja destruída.
    // Você pode realizar tarefas de limpeza aqui.
  },
  destroyed: function () {
    console.log("destroyed: A instância Vue foi destruída.");
    // A instância Vue e seus dados foram destruídos.
  },
  methods: {
    loadData() {
      this.loading = true;
      this.timeout = setTimeout(() => {
        this.error = true;
        this.loading = false;
      }, 5000); // Tempo limite de 5 segundos

      // Simulação de requisição assíncrona
      const interval = setInterval(() => {
        this.progress += 20;
        if (this.progress >= 100) {
          clearInterval(interval);
          this.progress = 0;
          this.loading = false;
          clearTimeout(this.timeout);
          this.success = true;
          // Dados recebidos da API (simulação)
          const responseData = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" },
          ];
          // Define os dados recebidos
          this.receivedData = responseData;
        }
      }, 1000); // Atualiza a barra de progresso a cada 1 segundo
    },
    cancelLoad() {
      clearInterval(this.interval);
      clearTimeout(this.timeout);
      this.loading = false;
      this.progress = 0;
    },
    retryLoad() {
      this.error = false;
      if (this.retryAttempts < this.maxRetryAttempts) {
        this.loadData();
        this.retryAttempts++;
      }
    },
  },
};
</script>

<style scoped>
/* Estilos opcionais para o componente */
.home {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}

.error {
  color: red;
}

.progress {
  width: 100%;
  background-color: #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 20px;
  background-color: #4caf50;
  width: 0;
  transition: width 0.5s ease;
}
</style>
