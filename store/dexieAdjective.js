import Dexie from "dexie";

export const state = () => ({
  dbAdj: null
});

export const mutations = {
  createDB(state, data) {
    console.log(data);
    state.dbAdj = new Dexie("testAdjectiveDB");
    console.log(state.dbAdj);
    state.dbAdj.version(1).stores({
      adjectives: "++id,adjective1,adjective2"
    });
    state.dbAdj.adjectives
      .put({ adjective1: data.adjective1, adjective2: data.adjective2 })
      .then(function() {
        return state.dbAdj.adjectives.get(data.id);
      })
      .then(function(adjective) {
        console.log(adjective);
      })
      .catch(function(error) {
        console.log("Ooops: " + error);
      });
  },
  refreshDB() {
    Dexie.delete('testAdjectiveDB');
  }
};

export const actions = {
  getAdjData() {
    this.$store.state.dexie.dbAdj.adjectives.get("decision1.mp3", adjectives => {
      console.log(adejectives);
    });
  }
};
