<template>
  <div class="progress-container card">
    <h2>Barra de Progresso</h2>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progressBarWidth, transition: 'width 0.5s' }"></div>
    </div>
    <div class="buttons">
      <button @click="increaseProgress">Concluir Etapa</button>
      <button @click="decreaseProgress">Voltar Etapa</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      progressBarWidth: '0%', // Define a largura inicial da barra de progresso como 0%
      increment: 20 // Incremento alterado para 20 para mostrar progresso em etapas
    };
  },
  methods: {
    // Função para aumentar o progresso
    increaseProgress() {
      if (this.progress < 100) {
        this.progress = Math.min(100, this.progress + this.increment); // Garante que o progresso não ultrapasse 100%
        this.updateProgressBar(); // Chama a função para atualizar a barra de progresso
      }
    },
    // Função para diminuir o progresso
    decreaseProgress() {
      if (this.progress > 0) {
        this.progress = Math.max(0, this.progress - this.increment); // Garante que o progresso não seja menor que 0%
        this.updateProgressBar(); // Chama a função para atualizar a barra de progresso
      }
    },
    // Função para atualizar a largura da barra de progresso
    updateProgressBar() {
      this.progressBarWidth = `${this.progress}%`; // Atualiza a largura da barra de progresso com base no progresso atual
      if (this.progress === 100) {
        this.$emit('progress-complete'); // Emite um evento quando o progresso atinge 100%
      }
    }
  }
};
</script>


<style scoped>
.progress-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #4caf50;
}

.buttons button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.buttons button:hover {
  background-color: #45a049;
}
</style>
