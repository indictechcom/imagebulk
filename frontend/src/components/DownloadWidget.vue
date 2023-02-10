<template>
  <div class="py-5 d-flex justify- align-center position-relative">
    <div class="text-area d-flex justify-start align-center">
      <v-img :src="image" height="50" alt="" v-if="image" />
      <p class="ml-2 filetext">{{ filename }}</p>
    </div>
    <v-progress-linear
      width="500px"
      style="margin-right: 174px; left: 40%"
      color="blue-lighten-3"
      v-model="progress"
      height="15"
    >
      <strong>{{ Math.ceil(progress) }}%</strong>
    </v-progress-linear>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    filename: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    progress: 0,
    image: "",
  }),

  methods: {
    ...mapActions(["getFileToDownload"]),
    ...mapMutations(["SET_IMG_URL"]),
  },

  computed: {
    imageUrl() {
      console.log("imageUrl: ", this.$store.state.file.imageURL);
      return this.$store.state.file.imageURL;
    },
  },

  created() {
    let options = {
      responseType: "blob",
      onDownloadProgress: (progressEvent) => {
        console.log(progressEvent);
        const progress = (progressEvent.loaded / progressEvent.total) * 100;
        this.progress = progress;
      },
    };

    this.getFileToDownload(options);
  },
};
</script>

<style scoped>
.text-area {
  width: 800px;
}
.filetext {
  font-size: 20px;
}
</style>