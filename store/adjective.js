import Dexie from "dexie";

export const state = () => ({
  list: [
    { adjective1: "きれいな", adjective2: "汚い"},
    { adjective1: "暗い", adjective2: "明るい"}
  ]
});

export const mutations = {
  insert(state, obj) {
    console.log(obj);
    state.list.unshift({
      adjective1: obj.adjective1,
      adjective2: obj.adjective2
    });
  },
  remove(state, obj) {
    for (let i = 0; i < state.list.length; i++) {
      const ob = state.list[i];
      if (ob.adjective1 == obj.adjective1 && ob.adjective2 == obj.adjective2) {
        alert("remove " + ob.adjective1 + ' - ' + ob.adjective2);
        state.list.splice(i, 1);
        return;
      }
    }
  }
};

export const actions = {};
