<template>
  <div class="colBox">
    <div class="taC">
    <h2>TodoList App</h2>
    <input
      type="text"
      class="txtBox"
      v-model="message"
    />
    <Btn
      title="ADD"
      btnType="add"
      :text="message"
      @click="cli()"
    />
    </div>
  </div>
</template>
<script>
import Btn from '../components/Btn';

export default {
  data() {
    return {
      message: '',
    };
  },
  components: {
    Btn,
  },
  methods: {
    cli() {
      // console.log('click');
    },
  },
};
</script>
<style scoped>
.colBox {
  width: calc(100% - 8px);
  margin: 4px;
  padding: 10px 10px 25px 10px;
  box-sizing: border-box;
  vertical-align: top;
  background-color: #eee;
}

.colBox__half {
  width: calc(50% - 14px);
}

.colBox input {
  margin-right: 10px;
}

.txtBox {
  width: 200px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius:3px;
  box-shadow: #ccc 1px 1px 1px;
  font-size:24px;
  font-weight: 100;
}

.taC {
  text-align: center !important;
}
</style>
