<template>
  <div class="card">
    <div class="row">
      <h2>Tabela de Usuários</h2>
      <table>
        <!-- Cabeçalho da tabela -->
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <!-- Corpo da tabela -->
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="editUser(index)">Editar</button>
              <button @click="deleteUser(index)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Formulário de edição -->
    <div v-if="editing !== null" class="edit-form">
      <h2>Editar Usuário</h2>
      <form @submit.prevent="saveEdit">
        <label for="editName">Nome:</label>
        <input type="text" id="editName" v-model="editedUser.name">
        <label for="editEmail">Email:</label>
        <input type="email" id="editEmail" v-model="editedUser.email">
        <button type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: 'João', email: 'joao@example.com' },
        { name: 'Maria', email: 'maria@example.com' },
        { name: 'Pedro', email: 'pedro@example.com' }
      ],
      editing: null,
      editedUser: { name: '', email: '' }
    };
  },
  methods: {
    editUser(index) {
      this.editing = index;
      this.editedUser = Object.assign({}, this.users[index]); // Clona o usuário para o formulário de edição
    },
    saveEdit() {
      if (this.editing !== null) {
        // Validação de entrada
        if (this.validateInput(this.editedUser)) {
          this.users.splice(this.editing, 1, this.editedUser); // Substitui o usuário original pelo editado
          this.editing = null; // Limpa a flag de edição
          this.editedUser = { name: '', email: '' }; // Limpa o formulário de edição
        } else {
          alert('Por favor, insira um nome e um email válidos.');
        }
      }
    },
    deleteUser(index) {
      // Confirmação de exclusão
      if (confirm('Tem certeza de que deseja excluir este usuário?')) {
        this.users.splice(index, 1);
      }
    },
    validateInput(user) {
      // Validação simples de nome e email
      return user.name.trim() !== '' && user.email.trim() !== '';
    }
  }
};
</script>


<style scoped>
/* Estilos para a página */


.row {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  margin-right: 5px;
}

.edit-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
