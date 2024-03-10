<template>
  <div class="card">
    <div class="row">
      <h2>Formulário de Contato</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="formData.name" required />
          <span v-if="formErrors.name" class="error">{{
            formErrors.name
          }}</span>
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            @input="validateEmail"
          />
          <span v-if="formErrors.email" class="error">{{
            formErrors.email
          }}</span>
          <transition name="fade">
            <span v-if="showEmailValidation" class="email-validation">{{
              emailValidationMessage
            }}</span>
          </transition>
        </div>
        <div>
          <label for="phone">Telefone:</label>
          <input type="tel" id="phone" v-model="formData.phone" required />
          <span v-if="formErrors.phone" class="error">{{
            formErrors.phone
          }}</span>
        </div>
        <div>
          <label for="message">Mensagem:</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            maxlength="200"
          ></textarea>
          <span v-if="formErrors.message" class="error">{{
            formErrors.message
          }}</span>
        </div>
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? "Enviando..." : "Enviar" }}
        </button>
      </form>
    </div>
    <div v-if="showSuccessMessage" class="success-message">
      Formulário enviado com sucesso!
    </div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Define os dados iniciais para o componente do formulário.
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      formErrors: {}, // Mantém os erros de validação do formulário
      isSubmitting: false, // Indica se o formulário está sendo enviado
      showSuccessMessage: false, // Indica se a mensagem de sucesso deve ser exibida
      errorMessage: "", // Mensagem de erro ao enviar o formulário
      showEmailValidation: false, // Indica se a validação do email deve ser exibida
      emailValidationMessage: "", // Mensagem de validação do email
    };
  },
  methods: {
    submitForm() {
      // Método para enviar o formulário
      this.formErrors = {};
      this.isSubmitting = true;

      // Simulação de envio assíncrono
      setTimeout(() => {
        // Lógica de validação do formulário
        if (!this.formData.name.trim()) {
          this.formErrors.name = "Por favor, insira seu nome.";
        }
        if (!this.formData.email.trim()) {
          this.formErrors.email = "Por favor, insira seu email.";
        } else if (!this.isValidEmail(this.formData.email)) {
          this.formErrors.email = "Por favor, insira um email válido.";
        }
        if (!this.formData.phone.trim()) {
          this.formErrors.phone = "Por favor, insira seu telefone.";
        } else if (!this.isValidPhone(this.formData.phone)) {
          this.formErrors.phone =
            "Por favor, insira um número de telefone válido.";
        }
        if (!this.formData.message.trim()) {
          this.formErrors.message = "Por favor, insira sua mensagem.";
        } else if (this.formData.message.length > 200) {
          this.formErrors.message =
            "A mensagem não pode ter mais de 200 caracteres.";
        }

        // Verifica se há erros de validação
        if (Object.keys(this.formErrors).length === 0) {
          // Lógica para enviar o formulário (simulado)
          console.log("Formulário enviado:", this.formData);
          this.clearForm();
          this.showSuccessMessage = true;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        } else {
          // Exibe mensagem de erro
          this.errorMessage =
            "Erro ao enviar o formulário. Por favor, verifique os campos.";
          setTimeout(() => {
            this.errorMessage = "";
          }, 5000);
        }

        this.isSubmitting = false;
      }, 1500); // Simulação de tempo de envio
    },
    isValidEmail(email) {
      // Função para validar o formato do email usando uma expressão regular
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    isValidPhone(phone) {
      // Função para validar o formato do telefone usando uma expressão regular
      const phoneRegex = /^\d{10}$/; // Número de telefone com 10 dígitos
      
      //return phoneRegex.test(phone); // Comentei essa linha, não está sendo usada.
      return true; // Retornando true apenas para fins de simulação.
    },
    clearForm() {
      // Limpa os campos do formulário
      this.formData.name = "";
      this.formData.email = "";
      this.formData.phone = "";
      this.formData.message = "";
    },
    validateEmail() {
      // Valida o email e exibe mensagem de validação
      this.showEmailValidation = true;
      if (!this.formData.email.trim()) {
        this.emailValidationMessage = "";
      } else if (!this.isValidEmail(this.formData.email)) {
        this.emailValidationMessage = "Email inválido.";
      } else {
        this.emailValidationMessage = "Email válido.";
      }
    },
  },
};

</script>

<style scoped>

.row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007f00; /* Verde para o botão de enviar */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  margin-top: 5px;
}

.success-message {
  background-color: #4caf50; /* Cor verde para a mensagem de sucesso */
  color: white;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}

.error-message {
  background-color: #ff5733; /* Cor vermelha para a mensagem de erro */
  color: white;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
}

.email-validation {
  color: #007f00; /* Cor verde para a validação de email */
  font-size: 12px;
  margin-top: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
