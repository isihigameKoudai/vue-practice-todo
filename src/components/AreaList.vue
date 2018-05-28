<template>
  <div class="colBox colBox__half">
    <h2>Todos List</h2>
    <ul>
      <li
        class="list"
        v-for="(list, index) in lists"
        v-if="!list.isDone"
        :key=index
      >
        <div class="content-list">{{list.content}}</div>
        <div>
          <Btn
            title="DONE"
            btnType="done"
            :num=index
          />
          <Btn
            title="DELETE"
            btnType="delete"
            :num=index
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Btn from '../components/Btn';

export default {
  computed: {
    ...mapState(['lists']),
  },
  components: {
    Btn,
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
  width: calc(50% - 11px);
}

@media screen and (max-width: 700px) {
  .colBox__half {
  width: 100%;
  }
}

.colBox input {
  margin-right: 10px;
}

.taC {
  text-align: center !important;
}

.list {
  width: 100%;
  height:auto;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content-list {
  font-size:20px;
  font-weight: 100;
}
</style>
