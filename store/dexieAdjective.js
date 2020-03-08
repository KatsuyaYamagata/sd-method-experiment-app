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
      .put({ name: data.name, audioData: data.audioData })
      .then(function() {
        return state.dbAdj.adjectives.get(data.name);
      })
      .then(function(adjective) {
        console.log(adjective.audioData);
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
