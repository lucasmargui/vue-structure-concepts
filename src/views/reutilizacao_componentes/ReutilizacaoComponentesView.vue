<template>
  <div class="home">
    <h1>ReutilizacaoComponentesView</h1>

        <CustomNavigationBarComponent />
        <CustomFormComponent />
    <CustomButtonComponent text="Clique Aqui" @click="handleClick" />

    <CustomListComponent :items="listaDeItens" />
    
  </div>
</template>

<script>
// Importando os componentes
import CustomButtonComponent from './components/CustomButtonComponent.vue'
import CustomFormComponent from './components/CustomFormComponent.vue'
import CustomListComponent from './components/CustomListComponent.vue'
import CustomNavigationBarComponent from './components/CustomNavigationBarComponent.vue'


export default {
  name: 'ReutilizacaoComponentesView',
  components: {
    CustomButtonComponent,
    CustomFormComponent,
    CustomListComponent,
    CustomNavigationBarComponent
  },
  data() {
    return {
      listaDeItens: ['Item 1', 'Item 2', 'Item 3']
    };
  },
  methods: {
    handleClick() {
      // Lógica de clique do botão
    }
  }
}
</script>
