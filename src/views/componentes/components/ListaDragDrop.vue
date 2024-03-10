<template>
  <div class="card">
    <div class="row">
      <h2>Lista de Tarefas</h2>
      <ul class="task-list">
        <li v-for="(task, index) in tasks" :key="index" draggable @dragstart="dragStart(index)" @dragover.prevent @drop="drop(index)" class="task-item">
          <div class="task-content">
            {{ task }}
            <button class="remove-button" @click="removeTask(index)">Remover</button>
          </div>
        </li>
      </ul>
      <div class="add-task-container">
        <input type="text" v-model="newTask" @keyup.enter="addTask" class="add-task-input" placeholder="Adicionar nova tarefa">
        <button @click="addTask" class="add-task-button">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: ['Estudar Vue.js', 'Fazer compras', 'Fazer exercícios'],
      newTask: '',
      draggedItemIndex: null
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    dragStart(index) {
      this.draggedItemIndex = index;
    },
    drop(targetIndex) {
      const draggedItem = this.tasks[this.draggedItemIndex];
      this.tasks.splice(this.draggedItemIndex, 1);
      this.tasks.splice(targetIndex, 0, draggedItem);
    }
  }
}
</script>

<style scoped>


.row {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.task-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.task-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}

.task-item:hover {
  background-color: #f0f0f0;
}

.task-content {
  display: flex;
  align-items: center;
}

.remove-button {
  margin-left: auto;
  background-color: #ff6666;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #ff4d4d;
}

.add-task-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.add-task-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 200px;
}

.add-task-button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.add-task-button:hover {
  background-color: #45a049;
}
</style>
