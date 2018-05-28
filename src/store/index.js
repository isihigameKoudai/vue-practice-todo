import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const states = {
  lists: [
    { content: '牛丼', isDone: false },
    { content: 'ラーメン', isDone: false },
    { content: '豚トロ', isDone: true },
    { content: '馬刺し', isDone: false },
  ],
};

const mutation = {
  updateAddLists(state, payload) {
    state.lists.push({ content: payload, isDone: false });
  },
  updateDeleteList(state, payload) {
    state.lists.splice(payload, 1);
  },
  updateDoneList(state, payload) {
    state.lists[payload].isDone = true;
  },
  updateUndoList(state, payload) {
    state.lists[payload].isDone = false;
  },
};


const action = {
  // addTodo({commit},payload) {

  // },
  // doneList({commit},payload) {
  //   this.lists[index].isDone = true;
  // },
  // deleteList({commit},payload) {
  //   this.lists.splice(index,1);
  // },
  // returnList({commit},payload) {
  //   this.lists[index].isDone = false;
  // }
};

export default new Vuex.Store({
  state: states,
  mutations: mutation,
  actions: action,
});
