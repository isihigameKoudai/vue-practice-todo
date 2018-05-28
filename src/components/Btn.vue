<template>
  <input
    type="button"
    class="btn"
    :value="btnTitle"
    :class="cssBtnType()"
    @click="pushButton()"
  />
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  props: ['title', 'btnType', 'text', 'num'],
  data() {
    return {
      btnTitle: this.title,
    };
  },
  methods: {
    ...mapMutations(['updateAddLists', 'updateDeleteList', 'updateDoneList', 'updateUndoList']),
    cssBtnType() {
      switch (this.btnType) {
        case 'add':
          return 'btn-submit';
        case 'done':
          return 'btn-done';
        case 'delete':
          return 'btn-delete';
        default:
          return '';
      }
    },
    pushButton() {
      if (this.btnType === 'add') {
        this.updateAddLists(this.text);
      } else if (this.btnType === 'delete') {
        this.updateDeleteList(this.num);
      } else if (this.btnType === 'done') {
        this.updateDoneList(this.num);
      } else if (this.btnType === 'return') {
        this.updateUndoList(this.num);
      }
    },
  },
};
</script>
<style scoped>
.btn {
  width: auto;
  height: 32px;
  font-size: 24px;
  font-weight: 100;
  border-radius: 3px;
  border:none;
  box-sizing: border-box;
  box-shadow: #ccc 1px 1px 1px;
}

.btn.btn-submit {
  color: #eee;
  background-color: #333;
}

.btn.btn-delete {
  color: #eee;
  background-color: #e24141;
}

.btn.btn-done {
  color: #eee;
  background-color: #00bf71;
}
</style>
