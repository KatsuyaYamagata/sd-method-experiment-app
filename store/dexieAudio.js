import Dexie from "dexie";

export const state = () => ({
  db: null
});

export const mutations = {
  createDB(state, data) {
    console.log(data);
    state.db = new Dexie("testAudioDB");
    console.log(state.db);
    state.db.version(1).stores({
      sounds: "name,audioData"
    });
    state.db.sounds
      .put({ name: data.name, audioData: data.audioData })
      .then(function() {
        return state.db.sounds.get(data.name);
      })
      .then(function(sound) {
        console.log(sound);
      })
      .catch(function(error) {
        console.log("Ooops: " + error);
      });
  },
  refreshDB() {
    Dexie.delete('testAudioDB');
  }
};

export const actions = {
  getData() {
    this.$store.state.dexie.db.sounds.get("decision1.mp3", sounds => {
      console.log(sounds);
    });
  }
};
