<template>
  <div>
    <button @click="emitEvent">Clique aqui</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data() {
    return {
      message: 'Olá, mundo!'
    };
  },
  mounted() {
    this.$emit('child-mounted', 'Componente filho foi montado');
  },
  methods: {
    emitEvent() {
      const eventData = {
        title: 'Evento Importante',
        content: 'Este é um evento muito importante!',
        date: new Date()
      };
      this.$emit('custom-event', eventData);
      if (this.customCallback) {
        this.customCallback('Callback personalizado do filho');
      }
    }
  },
  props: {
    customCallback: {
      type: Function,
      default: null
    }
  }
}
</script>
