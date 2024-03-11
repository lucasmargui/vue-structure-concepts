<template>
  <div>
    <div class="event-card">
      <h3>Evento de Clique</h3>
      <button @click="handleClick" class="event-button">Clique Aqui</button>
      <p v-if="clickData">Último clique: {{ clickData }}</p>
    </div>
    
    <div class="event-card">
      <h3>Evento de Input</h3>
      <input type="text" @input="handleInput" class="event-input" :class="{ 'error-input': inputDataError }">
      <p v-if="inputData">Último input: {{ inputData }}</p>
    </div>
    
    <div class="event-card">
      <h3>Evento de Keydown</h3>
      <input type="text" @keydown="handleKeydown" class="event-input">
      <p v-if="keydownData">Última tecla pressionada: {{ keydownData }}</p>
    </div>
    
    <div class="event-card">
      <h3>Evento de Submit</h3>
      <form @submit.prevent="handleSubmit" class="event-form">
        <input type="text" v-model="formData.name" class="event-input" :class="{ 'error-input': formDataError }">
        <button type="submit" class="event-submit">Enviar</button>
      </form>
      <p v-if="submitData">Dados do formulário: {{ submitData }}</p>
    </div>

    <p v-if="formSubmittedSuccessfully" class="success-message">Formulário enviado com sucesso!</p>
  </div>
</template>

<script>
export default {
   name: 'EventosView',
  data() {
    return {
      clickData: '',
      inputData: '',
      keydownData: '',
      submitData: '',
      formData: {
        name: ''
      },
      inputDataError: false,
      formDataError: false,
      formSubmittedSuccessfully: false
    };
  },
  methods: {
    handleClick() {
      this.clickData = new Date().toLocaleTimeString();
    },
    handleInput(event) {
      this.inputData = event.target.value;
      // Exemplo de validação de input
      this.inputDataError = event.target.value.length < 3; // Condição de validação
    },
    handleKeydown(event) {
      this.keydownData = event.key;
    },
    handleSubmit() {
      // Validar o formulário antes do envio
      if (this.formData.name.trim() === '') {
        this.formDataError = true;
        return;
      }

      // Simulando envio do formulário (pode ser substituído por uma chamada de API real)
      this.submitData = JSON.stringify(this.formData);
      this.formSubmittedSuccessfully = true;

      // Limpar os campos após o envio
      this.formData.name = '';
    }
  }
};
</script>

<style>
.event-card {
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.event-card h3 {
  margin-bottom: 10px;
}

.event-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.event-button,
.event-input,
.event-submit {
  margin: 5px;
}

.error-input {
  border: 1px solid red;
}

.success-message {
  color: green;
}
</style>
