<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-row justify="center" align-content="center">
            <v-col cols="12">
              <v-row justify="center" align-content="center">
                <v-col>
                  <div class="title">SD Method Experiment for Acoustics</div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row justify="center" align-content="center">
                <v-col cols="4">
                  <upload />
                </v-col>
                <v-col cols="4">
                  <setAdjectives />
                </v-col>
                <v-col cols="4">
                  <div class="links">
                    <nuxt-link to="/Experiment" class="button--green"
                      >Experiment Page</nuxt-link
                    >
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Upload from "~/components/Upload.vue";
import SetAdjectives from "~/components/SetAdjectives.vue";
export default {
  components: {
    Logo,
    Upload,
    SetAdjectives
  },
  method: {},
  mounted() {
    // 子コンポーネントのロードを無視して実行
    this.$nextTick(() => {
      this.$store.commit("dexieAudio/refreshDB");
      // ビュー全体がレンダリングされた後に実行
    });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: baseline;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1.25rem;
  color: #35495e;
  letter-spacing: 1px;
  top: 10%;
  margin-top: 3em;
  margin-bottom: 1em;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
