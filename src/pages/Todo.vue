<template>
  <div>
    <AreaAdd />
    <div class="list_boxes">
      <AreaList />
      <AreaDone />
    </div>
  </div>
</template>

<script>
import AreaAdd from '../components/AreaAdd';
import AreaList from '../components/AreaList';
import AreaDone from '../components/AreaDone';

export default {
  components: {
    AreaAdd, AreaList, AreaDone,
  },
};
</script>
<style>
/* .list_boxes {
  font-size: 0;
} */
.list_boxes > .colBox {
  display: inline-block;

}
</style>
