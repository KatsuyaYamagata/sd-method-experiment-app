<template>
  <div>
    <div>
      <h3>2. Adjective Pairs Settings</h3>
      <div>
        <input class="input-box" type="text" name="adjective1" v-model="list.adjective1" placeholder="adjective1"/>
        <span> - </span>
        <input class="input-box" type="text" name="adjective2" v-model="list.adjective2" placeholder="adjective2"/>
      </div>
      <div>
        <button @click="insert" class="button--green">add</button>
      </div>
      <ul>
        <li v-for="(list, index) in todos" :key="index">
          <span>{{ list.adjective1 }}</span>
          <span> - </span>
          <span>{{ list.adjective2 }}</span>
          <span @click="remove(list)">×</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      list: {
        adjective1: "",
        adjective2: ""
      }
    };
  },
  computed: {
    todos() {
      return this.$store.state.adjective.list;
    }
  },
  methods: {
    insert() {
      this.$store.commit("dexieAdjective/createDB", this.list);
      this.list.adjective1 = "";
      this.list.adjective2 = "";
    },
    remove(list) {
      this.$store.commit("adjective/remove", list);
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
}
.item {
  width: 25%;
}

.input-box{
    margin-bottom: 10px;
    padding: 10px 15px; /*ボックスを大きくする*/
    font-size: 16px;
    border-radius: 3px; /*ボックス角の丸み*/
    border: 2px solid #ddd; /*枠線*/
    box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}:focus {
    border: 2px solid #3b8070;
    z-index: 10;
    outline: 0
}
</style>
