//参考 https://qiita.com/umaniel_/items/bdc92fe188187cfbdb25

import Dexie from 'dexie';

const DATABASE_NAME = "testDB";
const INDEX = "test";
const STORE_NAME = "testStore";

export const state = () => ({
  db: null,
  sounds_num: 0
});

export const mutations = {
  DB_CONNECTION: (state, payload) => (state.db = payload),
  setSoundsNumber(state) {

    state.sounds_num += 2;
    console.log(state.sounds_num);
  },
};

export const actions = {
  createDatabase({ commit }) {
    const indexedDB =
      window.indexedDB || window.mozIndexedDB || window.msIndexedDB;
    if (indexedDB) {
      var dbOpen = indexedDB.open(`${DATABASE_NAME}`); // 第2引数はversion
      // データベースがない場合、既存のversionよりも大きい引数でopenした場合
      dbOpen.onupgradeneeded = function(event) {
        const dbConnection = event.target.result;
        // スキーマを作成する
        const store = dbConnection.createObjectStore(`${STORE_NAME}`, {
          // store = テーブルのようなもの
          keyPath: `name`, // 主キー用
          autoIncrement: true // オートインクリメントを有効にしておかないとレコード挿入時に指定必須
        });
        store.createIndex("contentIndex", `${INDEX}`); // index = カラムのようなもの
        commit("DB_CONNECTION", dbConnection);
      };
      // 接続成功の場合
      dbOpen.onsuccess = function(event) {
        commit("DB_CONNECTION", event.target.result);
        console.log("success connection");
      };
    } else {
      // IndexedDB使用不可
    }
  },

  deleteDatabese(){

  },

  putObject(){
    var data = {name : 'test' , arrayBuffer:{'test1':0, 'test2':1}};
    var dbOpen = indexedDB.open(`${DATABASE_NAME}`);
    dbOpen.onsuccess = function(event){
      var db = event.target.result;
      var trans = db.transaction(`${STORE_NAME}`, 'readwrite');
      var store = trans.objectStore(`${STORE_NAME}`);
      var putReq = store.put(data);
      putReq.onsuccess = function(){
        console.log('put data success');
      }
      trans.oncomplete = function(){
      // トランザクション完了時(putReq.onsuccessの後)に実行
        console.log('transaction complete');
      }
    }
  }
};
