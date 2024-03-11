<template>
  <div>
    <!-- Utilizando slot -->
    <div>
      <h2>Conteúdo do Slot:</h2>
      <slot></slot>
    </div>
    
    <!-- v-bind -->
    <div v-bind:class="{ active: isActive }">Exemplo de v-bind</div>
    
    <!-- v-if / v-else -->
    <div v-if="isTrue">Render if true</div>
    <div v-else>Render if false</div>
    
    <!-- v-for -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    
    <!-- v-on -->
    <button @click="handleClick">Clique aqui</button>
    
    <!-- v-model -->
    <input v-model="message" placeholder="Digite aqui">
    
    <!-- v-show -->
    <div v-show="isVisible">Este texto é visível</div>
    
    <!-- v-html -->
    <div v-html="htmlContent"></div>
    
    <!-- v-pre -->
    <div v-pre>{{ não interpretado }}</div>
    
    <!-- v-cloak -->
    <div v-cloak>{{ message }}</div>
    
    <!-- v-once -->
    <div v-once>{{ message }}</div>
    
    <!-- Utilizando métodos computados -->
    <div>{{ reversedMessage }}</div>
  </div>
</template>

<script>
export default {
   name: 'DiretivaView',
  data() {
    return {
      isActive: true,
      isTrue: true,
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ],
      message: 'Olá Mundo!',
      isVisible: true,
      htmlContent: '<span>Conteúdo HTML</span>'
    }
  },
  methods: {
    handleClick() {
      this.$emit('custom-click', 'Clicado!');
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  props: {
    parentProp: {
      type: String,
      required: true
    }
  },
  created() {
    console.log('Componente criado');
  },
  mounted() {
    console.log('Componente montado');
  },
  updated() {
    console.log('Componente atualizado');
  },
  destroyed() {
    console.log('Componente destruído');
  }
}
</script>
