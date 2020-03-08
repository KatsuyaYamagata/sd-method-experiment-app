<template>
  <div>
    <h3>1. Stimuli Settings</h3>
    <div>
      <label class="button--green">choose your sounds
        <input
          type="file"
          id="audioFile"
          @change="addData"
          multiple="multiple"
        />
      </label>
      <h2 class="stimuli">stimuli: {{ $store.state.sounds_num }}</h2>
    </div>
  </div>
</template>

<style>
.button--green input{
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  cursor: pointer;
}

.stimuli {
  display: inline-block;
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 50px;
}
</style>

<script>
export default {
  methods: {
    loadTextFromFile(event) {
      //Array.prototype.forEach.call(event.target.files, (element) => {console.log(element);});
      console.log(event.target.files);
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        this.$emit("load", e.target.result);
        const view = new DataView(reader.result);
        const audioBlob = new Blob([view], { type: "audio" });
        const myURL = window.URL || window.webkitURL;
        const audioElement = document.getElementById("audio");
        audioElement.src = myURL.createObjectURL(audioBlob);
        console.log(reader.result);
      };
      reader.readAsArrayBuffer(file);
      this.$store.commit("setSoundsNumber", event);
    },
    addData(event) {
      Array.prototype.forEach.call(event.target.files, element => {
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        var audioCtx = new AudioContext();
        const file = element;
        const reader = new FileReader();
        reader.onload = e => {
          var arrayBuffer = reader.result;
          var data = { name: file.name, audioData: arrayBuffer };
          console.log(data);
          this.$store.commit("dexieAudio/createDB", data);
        };
        reader.readAsArrayBuffer(file);
      });
      this.$store.commit("setSoundsNumber", event);
    },
  }
};
</script>
