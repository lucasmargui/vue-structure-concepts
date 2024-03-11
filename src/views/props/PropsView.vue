<template>
  <div class="parent-component">
    <h2>Parent Component</h2>
    <ChildComponent
      :name="person.name"
      :age="person.age"
      :onClick="handleClick"
      :person="person"
      :items="items"
      @name-updated="updateName"
      @age-updated="updateAge"
      @item-added="addItem"
    />
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';

export default {
  name: 'PropsView',
  components: {
    ChildComponent,
  },
  data() {
    return {
      person: { name: 'Alice', age: 30 },
      items: ['Apple', 'Banana', 'Orange'],
    };
  },
  methods: {
    handleClick() {
      console.log('Button clicked!');
    },
    updateName(newName) {
      this.person.name = newName;
    },
    updateAge(newAge) {
      this.person.age = newAge;
    },
    addItem(newItem) {
      this.items.push(newItem);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos do componente */
</style>
