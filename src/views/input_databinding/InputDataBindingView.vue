<template>
  <div class="container-input">
    <!-- Card - Interpolação de Texto -->
    <div class="card">
      <span>{{ message }}</span>
      <p>Valor de message: {{ message }}</p>
    </div>
    
    <!-- Card - Atributos HTML -->
    <div class="card">
      <img v-bind:src="imageSource" alt="Imagem">
      <p>Valor de imageSource: {{ imageSource }}</p>
    </div>

    <!-- Card - Classes CSS Dinâmicas -->
    <div class="card">
      <div v-bind:class="{ active: isActive, 'text-danger': hasError }">Classe Dinâmica</div>
      <p>Valor de isActive: {{ isActive }}, Valor de hasError: {{ hasError }}</p>
    </div>
    
    <!-- Card - Estilos CSS Dinâmicos -->
    <div class="card">
      <div v-bind:style="{ color: textColor, fontSize: fontSize + 'px' }">Estilo Dinâmico</div>
      <p>Valor de textColor: {{ textColor }}, Valor de fontSize: {{ fontSize }}</p>
    </div>
    
    <!-- Card - Eventos -->
    <div class="card">
      <button v-on:click="incrementCounter">Incrementar</button>
      <p>Valor de counter: {{ counter }}</p>
    </div>
    
    <!-- Card - Input de Formulário -->
    <div class="card">
      <input v-model="inputText" type="text">
      <p>Valor de inputText: {{ inputText }}</p>
    </div>
    
    <!-- Card - Iteração de Lista -->
    <div class="card">
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      <p>Valor de items: {{ items }}</p>
    </div>

    <!-- Card - Mostrar ou Esconder Elementos -->
    <div class="card">
      <div v-if="showElement">Este elemento será mostrado/ocultado</div>
      <p>Valor de showElement: {{ showElement }}</p>
    </div>

    <!-- Card - Bind de Atributo Personalizado -->
    <div class="card">
      <a :href="link">Link Externo</a>
      <p>Valor de link: {{ link }}</p>
    </div>

    <!-- Card - Utilização de Expressões JavaScript -->
    <div class="card">
      <p>O resultado da expressão é: {{ counter * 2 }}</p>
    </div>

    <!-- Card - Checkbox com Data Binding -->
    <div class="card">
      <input type="checkbox" v-model="isChecked">
      <label>Checkbox</label>
      <p>Valor de isChecked: {{ isChecked }}</p>
    </div>

    <!-- Card - Checkbox com Múltipla Seleção -->
    <div class="card">
      <div>
        <label v-for="option in options" :key="option.id">
          <input type="checkbox" :value="option.id" v-model="selectedOptions">
          {{ option.name }}
        </label>
      </div>
      <p>Valor de selectedOptions: {{ selectedOptions }}</p>
    </div>

    <!-- Card - Select com Data Binding -->
    <div class="card">
      <select v-model="selectedItem">
        <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
      </select>
      <p>Valor de selectedItem: {{ selectedItem }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputDataBindingView",
  data() {
    return {
      message: 'Olá, Vue!',
      imageSource: 'caminho/para/imagem.png',
      isActive: true,
      hasError: false,
      textColor: 'blue',
      fontSize: 16,
      counter: 0,
      inputText: '',
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ],
      showElement: true,
      link: 'https://www.example.com',
      isChecked: false,
      selectedOptions: [],
      options: [
        { id: 1, name: 'Opção A' },
        { id: 2, name: 'Opção B' },
        { id: 3, name: 'Opção C' }
      ],
      selectedItem: null
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  }
};
</script>

<style scoped>

.container-input {
    display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 250px;
  text-align: center;
}
</style>
