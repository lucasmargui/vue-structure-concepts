<template>
  <div class="child-component">
    <p>{{ greeting }}</p>
    <p>Name: <input v-model="editedName" @input="updateName" /></p>
    <p>Age: <input type="number" v-model.number="editedAge" @input="updateAge" /></p>
    <button v-if="onClick" @click="onClick">Click me</button>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
      <input v-model="newItem" @keyup.enter="addItem" placeholder="Add new item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    name: String,
    age: Number,
    onClick: Function,
    person: Object,
    items: Array,
  },
  data() {
    return {
      editedName: this.name,
      editedAge: this.age,
      newItem: '',
    };
  },
  computed: {
    greeting() {
      return 'Welcome to ChildComponent!';
    },
  },
  methods: {
    updateName() {
      this.$emit('name-updated', this.editedName);
    },
    updateAge() {
      this.$emit('age-updated', this.editedAge);
    },
    addItem() {
      if (this.newItem.trim() !== '') {
        this.$emit('item-added', this.newItem);
        this.newItem = '';
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos do componente */
</style>
