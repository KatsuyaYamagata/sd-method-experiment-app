import Vue from 'vue'

Vue.mixin({
  methods: {
    truncate(str, length) {
      return str.length <= length ? str: (str.substr(0, length) + "...");
    },
    playSound(audioName){
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      var audioCtx = new AudioContext();
      var source = audioCtx.createBufferSource();
      this.$store.state.dexie.db.sounds.get(audioName, sounds => {
        console.log(sounds.audioData);
        audioCtx.decodeAudioData(sounds.audioData, function(audioBuffer) {
          source.buffer = audioBuffer;
          source.connect(audioCtx.destination);
          source.start(0);
        });
      });
    }
  }
})
