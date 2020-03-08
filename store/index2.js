export const state = () => ({
  audioFiles: [],
  count: 0,
  key: 0,
  sounds_num: 0
});

export const mutations = {
  increment(state) {
    state.count += 2;
    state.key++;
    var keyStr = "key" + String(state.key);
    console.log(keyStr);
    var data = {
      name: keyStr,
      number: state.count
    };
    state.audioFiles.push(data);
  },
  addItemToLocalStorage(state) {
    var data = {};
    localStorage.setItem("my-key", datalist);
  },
  setIndexedDB(state) {
    var dbName = "sampleDB";
    var openReq = indexedDB.open(dbName);
    openReq.onupgradeneeded = function(event) {
      console.log("db upgrade");
    };
    openReq.onsuccess = function(event) {
      console.log("db open success");
      var db = event.target.result;
      db.close();
    };
    openReq.onerror = function(event) {
      console.log("db open error");
    };
  }
};
