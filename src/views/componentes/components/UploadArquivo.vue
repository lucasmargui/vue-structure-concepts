<template>
<div class="card">
  <div class="row">
    <h2>Upload de Arquivos</h2>
    <input type="file" @change="handleFileUpload">
    <button @click="uploadFile">Upload</button>
    <div v-if="showProgressBar">
      <div class="progress-bar" :style="{ width: uploadProgress + '%' }"></div>
      <span>{{ uploadProgress }}%</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      showProgressBar: false,
      uploadProgress: 0
    };
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    uploadFile() {
      if (this.file) {
        this.showProgressBar = true;
        // Simulação de upload de arquivo com barra de progresso
        const interval = setInterval(() => {
          this.uploadProgress += 10;
          if (this.uploadProgress === 100) {
            clearInterval(interval);
            this.showProgressBar = false;
            this.uploadProgress = 0;
            alert('Arquivo enviado com sucesso!');
          }
        }, 1000);
      } else {
        alert('Por favor, selecione um arquivo.');
      }
    }
  }
}
</script>

<style scoped>
.progress-bar {
  width: 0%;
  height: 20px;
  background-color: #4caf50;
}
</style>
