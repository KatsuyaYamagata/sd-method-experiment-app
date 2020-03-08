<template>
  <div>
    <div>
      <button @click="counter">ボタン</button>
      <p>{{ this.$store.state.dexie.db }}</p>
      <button @click="connectDB">DBに接続</button>
      <button @click="putObject">データ挿入</button>
    </div>
    <div>
      <h3>Dexie Test</h3>
      <!--<button @click="dexie">Dexieのテスト</button>-->
      <label
        >ファイルアップロード
        <input
          type="file"
          id="audioFile"
          @change="addData"
          multiple="multiple"
        />
      </label>
      <button @click="getData">データ参照</button>
    </div>
  </div>
</template>

<script>
import Dexie from "dexie";
export default {
  methods: {
    counter() {
      this.$store.commit("increment/increment");
    },
    connectDB() {
      this.$store.dispatch("audio/createDatabase");
    },
    putObject() {
      this.$store.dispatch("audio/putObject");
    },
    addData(event) {
      Array.prototype.forEach.call(event.target.files, element => {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        var audioCtx = new AudioContext();
        const file = element;
        const reader = new FileReader();
        reader.onload = e => {
          //this.$emit("load", e.target.result);
          var arrayBuffer = reader.result;

          /*
          // decode処理
          audioCtx.decodeAudioData(arrayBuffer).then(function(audioBuffer) {
            //console.log(audioBuffer);

            console.log(data);
          });
          */
          var data = { name: file.name, audioData: arrayBuffer };
          console.log(data);
          this.$store.commit("dexieAudio/createDB", data);
        };
        reader.readAsArrayBuffer(file);
      });
    },
    getData() {
      return this.playSound("decision1.mp3");
      /*
      this.$store.state.dexie.db.sounds.each(function(item, cursor) {
        console.log(item.audioData);
        allsoundsBuffer.push(item.audioData);
        console.log(allsoundsBuffer);
      });

      audioCtx.decodeAudioData(allsoundsBuffer, function(audioBuffer) {
        //console.log(audioBuffer);
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.start(0);
      });


      this.$store.state.dexie.db.sounds.get("decision3.mp3", sounds => {
        console.log(sounds.audioData);
        audioCtx.decodeAudioData(sounds.audioData, function(audioBuffer) {
          source.buffer = audioBuffer;
          source.connect(audioCtx.destination);
          source.start(0);
        });
      });

      //var music = new Audio('mymusic.mp3');
      //music.play();
      */
    }
  }
};
</script>
