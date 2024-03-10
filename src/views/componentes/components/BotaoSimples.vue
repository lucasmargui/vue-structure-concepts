<template>
  <div class="card">
    <div >
      <button @click="handleClick" :style="buttonStyle" :class="{ 'loading': isLoading }" v-if="!isLoading" class="custom-button">
        <slot>{{ buttonText }}</slot>
      </button>
      <button class="loading-button" v-else>
        <span class="spinner"></span> {{ loadingText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Click Here"
    },
    buttonColor: {
      type: String,
      default: "blue"
    },
    buttonSize: {
      type: String,
      default: "medium"
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: "Loading..."
    }
  },
  data() {
    return {
      buttonStyles: {
        small: {
          fontSize: "12px",
          padding: "5px 10px"
        },
        medium: {
          fontSize: "14px",
          padding: "8px 15px"
        },
        large: {
          fontSize: "16px",
          padding: "10px 20px"
        }
      }
    };
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.buttonColor,
        ...this.buttonStyles[this.buttonSize]
      };
    }
  },
  methods: {
    handleClick() {
       // Define a função para lidar com o clique no botão.
      // Emitirá um evento para atualizar o estado de isLoading e exibir um alerta após 2 segundos.
      this.$emit('update:isLoading', true);
      setTimeout(() => {
        alert("Button clicked after 2 seconds!");
        this.$emit('update:isLoading', false);
      }, 2000);
    }
  }
};
</script>

<style scoped>
.custom-button {
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-right: 10px; /* Adicionei margem entre os botões */
}

.loading-button {
  display: none;
}

.loading {
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  background-color: gray;
  color: white;
  cursor: not-allowed;
  margin-right: 10px; /* Adicionei margem entre os botões */
}

.spinner {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: spin 0.8s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6px;
  margin-left: -6px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
