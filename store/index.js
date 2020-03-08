export const state = () => ({
  sounds_num: 0
});

export const mutations = {
  setSoundsNumber(state, event) {
    state.sounds_num = event.target.files.length;
  }
};
