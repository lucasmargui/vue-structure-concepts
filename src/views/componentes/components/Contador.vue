<template>
  <div class="card" :class="{ 'positive': count > 0, 'negative': count < 0 }">
    <div class="title">Placar</div>
    <div class="row">
      <h2>{{ count }}</h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Define os dados iniciais para o componente, incluindo o contador e o limite superior.
    return {
      count: 0, // Contador inicial
      limit: 10 // Limite superior para o contador
    };
  },
  methods: {
    increment() {
      // Método para incrementar o contador se o limite não for alcançado.
      if (this.count < this.limit) {
        this.count++; // Incrementa o contador
        if (this.count === this.limit) {
          // Emite um evento se o limite for atingido após o incremento.
          this.$emit('limitReached', this.count);
        }
      }
    },
    decrement() {
      // Método para decrementar o contador se o limite negativo não for alcançado.
      if (this.count > -this.limit) {
        this.count--; // Decrementa o contador
        if (this.count === -this.limit) {
          // Emite um evento se o limite negativo for atingido após o decremento.
          this.$emit('limitReached', this.count);
        }
      }
    }
  }
};

</script>

<style scoped>


.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 36px;
  margin: 0;
}

button {
  width: 40px;
  height: 40px;
  font-size: 24px;
  background-color: #007f00; /* Verde para time da casa */
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #005200; /* Verde escuro no hover */
}

button:last-child {
  margin-bottom: 10px;
}

button.negative {
  background-color: #ff0000; /* Vermelho para time visitante */
}

button.negative:hover {
  background-color: #cc0000; /* Vermelho escuro no hover */
}
</style>
