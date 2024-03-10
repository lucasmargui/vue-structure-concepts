<template>
  <div class="home">
       <h1>ComponentesView</h1>
  
      <BarraProgresso />
      <BotaoSimples />
      <Calendario />
      <CarrinhoCompras />
      <Contador />
      <Formulario />
      <ListaDragDrop />
      <ListaFiltragemOrdenacao />
      <Modal />
      <TabelaDinamica />
      <UploadArquivo />
      <ValidacaoFormulario />

 



 
  </div>
</template>

<style>

/* Estilo para o elemento "card" */
.card {
    border-radius: 8px; /* Borda arredondada para criar a aparência de um cartão */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para adicionar profundidade ao cartão */
    padding: 20px; /* Espaçamento interno do cartão */
    background-color: #afafaf; /* Cor de fundo do cartão */
    transition: transform 0.3s, box-shadow 0.3s; /* Transição suave para transformação e sombra */
    margin: 50px;
}

/* Efeito de levantamento no hover */
.card:hover {
    transform: translateY(-5px); /* Move o cartão para cima quando o mouse está sobre ele */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Aumenta a sombra quando o mouse está sobre ele */
}

  /* Definição da classe "row" */
.row {
   
    display: flex; /* Define que os elementos dentro da linha serão exibidos em linha */
    flex-wrap: wrap; /* Permite que os elementos que não cabem na linha quebrem para a próxima linha */
    margin-right: -15px; /* Remove a margem direita para compensar o espaçamento negativo dos elementos internos */
    margin-left: -15px; /* Remove a margem esquerda para compensar o espaçamento negativo dos elementos internos */
    margin-top: 100px;
}

/* Estilo para os elementos filhos da classe "row" */
.row > * {
    box-sizing: border-box; /* Garante que a largura dos elementos inclua preenchimento e borda, mas não a margem */
    padding-right: 15px; /* Adiciona preenchimento à direita de cada elemento filho */
    padding-left: 15px; /* Adiciona preenchimento à esquerda de cada elemento filho */
}

</style>


<script>
import BarraProgresso from './components/BarraProgresso.vue';
import BotaoSimples from './components/BotaoSimples.vue';
import Calendario from './components/Calendario.vue';
import CarrinhoCompras from './components/CarrinhoCompras.vue';
import Contador from './components/Contador.vue';
import Formulario from './components/Formulario.vue';
import ListaDragDrop from './components/ListaDragDrop.vue';
import ListaFiltragemOrdenacao from './components/ListaFiltragemOrdenacao.vue';
import Modal from './components/Modal.vue';
import TabelaDinamica from './components/TabelaDinamica.vue';
import UploadArquivo from './components/UploadArquivo.vue';
import ValidacaoFormulario from './components/ValidacaoFormulario.vue';




export default {
  name: 'ComponentesView',
  components: {
    BarraProgresso,BotaoSimples,Calendario,CarrinhoCompras,Contador,Contador,Formulario,ListaDragDrop,ListaFiltragemOrdenacao,Modal,TabelaDinamica,UploadArquivo,ValidacaoFormulario
  }
}
</script>