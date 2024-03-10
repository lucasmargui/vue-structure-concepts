<template>
  <div class="card">
    <div class="row">
      <h2>Lista de Produtos</h2>
      <input
        type="text"
        v-model="search"
        placeholder="Buscar produtos"
        class="search-input"
      />
      <select v-model="sortBy" class="sort-select">
        <option value="name">Nome</option>
        <option value="price">Preço</option>
      </select>
      <button @click="toggleSortDirection">Toggle Sort Direction</button>
      <ul class="product-list">
        <li
          v-for="product in paginatedProducts"
          :key="product.id"
          class="product-item"
        >
          <img
            :src="getImage(product.name)"
            :alt="product.name"
            class="product-image"
          />
          <div class="product-details">
            <span class="product-name">{{ product.name }}</span>
            <span class="product-price">R$ {{ product.price }}</span>
          </div>
        </li>
      </ul>
      <div class="pagination">
        <button
          @click="previousPage"
          :disabled="currentPage === 0"
          class="pagination-btn"
        >
          Página Anterior
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === pageCount - 1"
          class="pagination-btn"
        >
          Próxima Página
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Define os dados iniciais para o componente, incluindo a lista de produtos, critérios de pesquisa e paginação.
    return {
       // Lista de produtos com id, nome e preço.
      products: [
        { id: 1, name: "Camiseta", price: 25 },
        { id: 2, name: "Calça Jeans", price: 50 },
        { id: 3, name: "Tênis", price: 80 },
        { id: 4, name: "Moletom", price: 45 },
        { id: 5, name: "Meias", price: 10 },
        { id: 6, name: "Jaqueta de Couro", price: 150 },
        { id: 7, name: "Vestido Floral", price: 60 },
        { id: 8, name: "Bermuda Esportiva", price: 30 },
        { id: 9, name: "Sapato Social", price: 100 },
        { id: 10, name: "Blusa de Lã", price: 55 },
        { id: 11, name: "Óculos de Sol", price: 20 },
        { id: 12, name: "Chapéu de Palha", price: 15 },
        { id: 13, name: "Pulseira de Prata", price: 35 },
        { id: 14, name: "Relógio de Pulso", price: 70 },
        { id: 15, name: "Bolsa de Couro", price: 90 },
        { id: 16, name: "Cinto de Tecido", price: 18 },
        { id: 17, name: "Boné Esportivo", price: 25 },
        { id: 18, name: "Camisa Social", price: 40 },
        { id: 19, name: "Short Jeans", price: 35 },
        { id: 20, name: "Calçado Casual", price: 75 },
      ], 
      search: "", // String de pesquisa para filtrar os produtos.
      sortBy: "name", // Critério de classificação padrão.
      itemsPerPage: 4, // Número de produtos exibidos por página.
      currentPage: 0, // Página atual sendo exibida.
      sortDirection: "asc", // Direção da ordenação: ascendente ('asc') ou descendente ('desc').
    };
  },
  computed: {
    filteredProducts() {
       // Filtra os produtos com base na pesquisa e os ordena de acordo com os critérios de classificação.
      // Retorna os produtos filtrados e ordenados.

      let filtered = this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.search.toLowerCase());
      });

      if (this.sortBy === "name") {
        filtered = filtered.sort((a, b) => {
          return this.sortDirection === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        });
      } else if (this.sortBy === "price") {
        filtered = filtered.sort((a, b) => {
          return this.sortDirection === "asc"
            ? a.price - b.price
            : b.price - a.price;
        });
      }

      return filtered;
    },
    paginatedProducts() {
    // Retorna uma página de produtos com base na página atual e no número de itens por página.

      const startIndex = this.currentPage * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    pageCount() {
       // Calcula o número total de páginas com base no número de produtos filtrados e no número de itens por página.
      // Retorna o número total de páginas.
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.pageCount - 1) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    getImage(productName) {
      // You can provide images based on product names or IDs
      // Example: return `images/${productName}.jpg`;
      return `https://via.placeholder.com/150?text=${productName}`;
    },
    toggleSortDirection() {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
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
  margin-bottom: 20px;
}

.search-input {
  width: 200px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

.sort-select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.product-list {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-item {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.product-price {
  color: #888;
}

.pagination {
  margin-top: 20px;
}

.pagination-btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.pagination-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
