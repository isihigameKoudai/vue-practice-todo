<template>
  <Todo />
</template>

<script>
import Todo from './pages/Todo';
import Btn from './components/Btn';

export default {
  name: 'App',
  components: {
    Todo,
    Btn,
  },
};
</script>

<style>
body {
  margin:0;
  padding:0;
}

ul,li {
  margin: 0;
  padding: 0;
}

li {
  list-style:none;
}
</style>
