<template>
  <div class="company-form card">
    <h2>Registration Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="form.username" @blur="validateUsername" />
        <span v-if="errors.username" class="error">{{ errors.username }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" @blur="validateEmail" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="form.password" @blur="validatePassword" />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="form.confirmPassword" @blur="validateConfirmPassword" />
        <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>
      </div>

      <button type="submit" :disabled="hasErrors">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      errors: {},
    };
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  },
  methods: {
    submitForm() {
      if (!this.hasErrors) {
        alert('Form submitted!');
      }
    },
    validateUsername() {
      this.errors.username = '';
      if (!this.form.username) {
        this.errors.username = 'Username is required';
      }
    },
    validateEmail() {
      this.errors.email = '';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email) {
        this.errors.email = 'Email is required';
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Invalid email format';
      }
    },
    validatePassword() {
      this.errors.password = '';
      if (!this.form.password) {
        this.errors.password = 'Password is required';
      } else if (this.form.password.length < 8) {
        this.errors.password = 'Password must be at least 8 characters';
      }
    },
    validateConfirmPassword() {
      this.errors.confirmPassword = '';
      if (!this.form.confirmPassword) {
        this.errors.confirmPassword = 'Confirm password is required';
      } else if (this.form.confirmPassword !== this.form.password) {
        this.errors.confirmPassword = 'Passwords do not match';
      }
    }
  }
};
</script>

<style scoped>
.company-form {
  max-width: 400px;
  
  margin: auto;
  padding: 50px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
