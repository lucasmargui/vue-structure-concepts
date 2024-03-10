<template>

    <div class="card">
      <h2>Carrinho de Compras</h2>
      <div class="products">
        <ul>
          <li v-for="(product, index) in products" :key="index" class="product-item">
            <div class="product-info">
              <span class="product-name">{{ product.name }}</span>
              <span class="product-price">R$ {{ product.price }}</span>
              <span class="product-stock">Estoque: {{ product.stock }}</span>
            </div>
            <div class="product-controls">
              <input type="number" v-model="quantity[index]" min="0" :max="product.stock" step="1" class="product-quantity" />
              <button @click="addToCart(index)" class="add-to-cart">Adicionar ao Carrinho</button>
            </div>
          </li>
        </ul>
      </div>
      <h3>Itens no Carrinho:</h3>
      <div class="cart">
        <ul>
          <li v-for="(item, index) in cart" :key="index" class="cart-item">
            <div class="cart-info">
              <span class="cart-name">{{ item.name }}</span>
              <span class="cart-price">R$ {{ item.price }}</span>
              <span class="cart-quantity">x {{ item.quantity }}</span>
            </div>
            <button @click="removeFromCart(index)" class="remove-from-cart">Remover</button>
          </li>
        </ul>
        <p v-if="cart.length === 0" class="empty-cart">Seu carrinho está vazio.</p>
      </div>
      <div class="checkout" v-if="user && cart.length > 0">
        <button @click="checkout" class="checkout-btn">Finalizar Compra</button>
      </div>
      <div v-if="user">
        <button @click="logout" class="logout-btn">Logout</button>
      </div>
      <div v-else>
        <button @click="login" class="login-btn">Login</button>
      </div>
      <p class="total">Total: R$ {{ getTotal() }}</p>
    </div>

</template>

<script>
export default {
  data() {
    // Define os dados iniciais para o componente, incluindo os produtos, carrinho, quantidade e usuário.
    return {
      products: [
        { name: 'Camiseta', price: 29.99, stock: 10 },
        { name: 'Calça Jeans', price: 49.99, stock: 5 },
        { name: 'Tênis', price: 79.99, stock: 3 }
      ],
      cart: [], // Array para armazenar os itens do carrinho
      quantity: [], // Array para armazenar a quantidade de cada produto adicionado ao carrinho
      user: null // Armazena informações do usuário logado
    };
  },
  methods: {
    addToCart(index) {
      // Adiciona um item ao carrinho com base no índice fornecido, verificando se a quantidade é válida e se há estoque suficiente.
      if (this.quantity[index] > 0 && this.products[index].stock >= this.quantity[index]) {
        let newItem = { ...this.products[index], quantity: this.quantity[index] };
        this.cart.push(newItem); // Adiciona o novo item ao carrinho
        this.products[index].stock -= this.quantity[index]; // Atualiza o estoque do produto
        this.quantity[index] = 0; // Reseta a quantidade
        this.saveCart(); // Salva o carrinho localmente
      } else {
        alert('Quantidade inválida ou estoque insuficiente!'); // Alerta se a quantidade for inválida ou o estoque for insuficiente
      }
    },
    removeFromCart(index) {
      // Remove um item do carrinho com base no índice fornecido e atualiza o estoque do produto.
      this.products.forEach((product, i) => {
        if (product.name === this.cart[index].name) {
          this.products[i].stock += this.cart[index].quantity; // Retorna a quantidade removida ao estoque
        }
      });
      this.cart.splice(index, 1); // Remove o item do carrinho
      this.saveCart(); // Salva o carrinho localmente
    },
    getTotal() {
      // Calcula o total dos itens no carrinho.
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    },
    login() {
      // Simula a implementação real de login, definindo o usuário como logado.
      this.user = { name: 'Usuário' };
    },
    logout() {
      // Simula a implementação real de logout, definindo o usuário como não logado.
      this.user = null;
    },
    saveCart() {
      // Simula a implementação real de salvamento do carrinho localmente (pode usar LocalStorage ou Cookies).
    },
    checkout() {
      // Simula a implementação real de checkout, exibindo uma mensagem de alerta.
      alert('Implementação de checkout avançado aqui');
    }
  }
};

</script>

<style scoped>



h2, h3 {
  margin-bottom: 15px;
}

.products, .cart {
  margin-bottom: 20px;
}

.product-item, .cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.product-info, .cart-info {
  flex: 1;
}

.product-controls {
  display: flex;
  align-items: center;
}

.add-to-cart, .remove-from-cart {
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.empty-cart {
  font-style: italic;
}

.checkout-btn, .login-btn, .logout-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.total {
  font-size: 18px;
  font-weight: bold;
  text-align: right;
}
</style>
