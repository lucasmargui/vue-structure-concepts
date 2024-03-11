<template>
  <div>
    <div class="home">
  <h1>Operações Assíncronas</h1>
  <button @click="fetchData">Buscar Dados Assíncronos</button>

  <div v-if="dataFetched">
    <h2>Dados Recebidos:</h2>
    <ul>
      <li v-for="(item, index) in fetchedData" :key="index">{{ item }}</li>
    </ul>
  </div>
  <div v-if="error">
    <h2>Ocorreu um erro ao buscar os dados:</h2>
    <p>{{ errorMessage }}</p>
  </div>
</div>

    <!-- Primeiro Componente -->
    <div class="home">
      <h1>MetodosView</h1>
      <button @click="sayHello">Dizer Olá</button>
      <button @click="doubleNumber">Duplicar Número</button>
    </div>

    <!-- Segundo Componente -->
    <div class="home">
      <h1>{{ title }}</h1>
      <button @click="generateRandomNumber">Gerar Número Aleatório</button>
      <div v-if="randomNumber !== null">
        <p>Número Aleatório: {{ randomNumber }}</p>
        <button @click="resetRandomNumber">Resetar Número Aleatório</button>
      </div>
      <div>
        <h2>Lista de Tarefas</h2>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            {{ task }}
            <button @click="removeTask(index)">Remover</button>
          </li>
        </ul>
        <input v-model="newTask" type="text" placeholder="Nova Tarefa" />
        <button @click="addTask">Adicionar Tarefa</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetodosView",
  data() {
    return {
      title: "Métodos e Dados",
      randomNumber: null,
      tasks: ["Estudar Vue.js", "Fazer compras", "Escrever código"],
      newTask: "",
            dataFetched: false,
      fetchedData: [],
      error: false,
      errorMessage: ""
    };
  },
  methods: {
    // Método para buscar dados de uma API
    async fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let data = await response.json();
        this.fetchedData = data;
        this.dataFetched = true;
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        this.error = true;
        this.errorMessage = error.message;
      }
    },

    // Método para enviar dados para o servidor
    async sendData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: "Novo post",
              body: "Conteúdo do novo post",
            }),
          }
        );
        let data = await response.json();
        console.log("Dados enviados:", data);
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
      }
    },

    // Método para deletar um recurso do servidor
    async deleteData(id) {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          console.log("Recurso deletado com sucesso!");
        } else {
          console.error("Erro ao deletar recurso:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao deletar recurso:", error);
      }
    },

    // Método para dizer olá
    sayHello() {
      alert("Olá! Bem-vindo à página de métodos!");
    },
    // Método para duplicar um número
    doubleNumber() {
      let numberToDouble = 5; // Exemplo de número a ser duplicado
      let doubledNumber = numberToDouble * 2;
      console.log(`O dobro de ${numberToDouble} é ${doubledNumber}`);
    },


    generateRandomNumber() {
      this.randomNumber = Math.floor(Math.random() * 100);
    },
    resetRandomNumber() {
      this.randomNumber = null;
    },
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push(this.newTask.trim());
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 20px;
}
</style>
