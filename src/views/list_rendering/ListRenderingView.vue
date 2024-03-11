<template>
  <div class="supermarket">
    <h1>Bem-vindo ao Supermercado</h1>

    <!-- Adicionar novas frutas -->
    <div class="add-item">
      <input type="text" v-model="newFruit" placeholder="Nova Fruta">
      <button @click="addFruit">Adicionar Fruta</button>
    </div>

    <!-- Lista de frutas com opção de filtro -->
    <div class="item-list">
      <h2>Lista de Frutas:</h2>
      <input type="text" v-model="filterFruit" placeholder="Filtrar Fruta">
      <ul>
        <li v-for="(item, index) in filteredItems" :key="'fruits-' + index">
          <div class="card">
            <span>{{ item }}</span>
            <button @click="removeFruit(index)">Remover</button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Adicionar novos produtos -->
    <div class="add-item">
      <input type="text" v-model="newProductName" placeholder="Nome do Produto">
      <input type="number" v-model="newProductQuantity" placeholder="Quantidade">
      <button @click="addProduct">Adicionar Produto</button>
    </div>

    <!-- Lista de produtos com opção de ordenação -->
    <div class="item-list">
      <h2>Lista de Produtos:</h2>
      <select v-model="sortBy">
        <option value="name">Nome</option>
        <option value="quantity">Quantidade</option>
      </select>
      <ul>
        <li v-for="(item, index) in sortedItems" :key="'products-' + index">
          <div class="card">
            <span>{{ item.name }} - {{ item.quantity }}</span>
            <button @click="removeProduct(index)">Remover</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListRenderingView',
  data() {
    return {
      fruits: ['Maçã', 'Banana', 'Laranja', 'Uvas'],
      products: [
        { name: 'Maçã', quantity: 5 },
        { name: 'Banana', quantity: 3 },
        { name: 'Laranja', quantity: 7 },
        { name: 'Uvas', quantity: 10 }
      ],
      newFruit: '',
      newProductName: '',
      newProductQuantity: 0,
      filterFruit: '',
      sortBy: 'name'
    };
  },
  computed: {
    filteredItems() {
      return this.fruits.filter(item => item.toLowerCase().includes(this.filterFruit.toLowerCase()));
    },
    sortedItems() {
      return this.products.slice().sort((a, b) => {
        if (this.sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (this.sortBy === 'quantity') {
          return a.quantity - b.quantity;
        }
      });
    }
  },
  methods: {
    addFruit() {
      if (this.newFruit.trim() !== '') {
        this.fruits.push(this.newFruit.trim());
        this.newFruit = '';
      }
    },
    removeFruit(index) {
      this.fruits.splice(index, 1);
    },
    addProduct() {
      if (this.newProductName.trim() !== '' && this.newProductQuantity > 0) {
        this.products.push({
          name: this.newProductName.trim(),
          quantity: this.newProductQuantity
        });
        this.newProductName = '';
        this.newProductQuantity = 0;
      }
    },
    removeProduct(index) {
      this.products.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.supermarket {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
}

.add-item {
  margin-bottom: 20px;
}

.item-list {
  margin-bottom: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 5px;
}

button {
  margin-left: 10px;
}
</style>
