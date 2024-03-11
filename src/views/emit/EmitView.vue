<template>
  <div>
    <ChildComponent :items="items" @custom-event="handleCustomEvent" @child-mounted="handleChildMounted" />
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';

export default {
   name: 'EmitView',
  components: {
    ChildComponent
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    };
  },
  methods: {
    handleCustomEvent(data) {
      console.log('Evento personalizado recebido:', data);
    },
    handleChildMounted(message) {
      console.log('Evento de montagem do filho:', message);
    }
  }
}
</script>
