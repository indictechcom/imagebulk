<template>
  <div class="py-5 d-flex justify- align-center position-relative">
    <div class="text-area d-flex justify-start align-center">
      <v-img :src="imageUrl" height="150" alt="" v-if="imageUrl" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
  },

  computed: {
    ...mapGetters(["getFiles"]),

    imageUrl() {
      console.log("imag files: ", this.getFiles);

      let imageLink = "";

      this.getFiles.forEach((file) => {
        if (file.title == this.filename) {
          console.log("imageUrl: ", file.url);
          imageLink = file.url;
        }
      });

      return imageLink;
    },
  },

  created() {
    let options = {
      // responseType: "blob",
      // onDownloadProgress: (progressEvent) => {
      //   console.log(progressEvent);
      //   const progress = (progressEvent.loaded / progressEvent.total) * 100;
      //   this.progress = progress;
      // },
      // headers: {
      //   "User-Agent": "Imagebulk tool",
      //   "Content-Type": "application/json",
      // },
      // params,
    };

    this.getFileToDownload(this.filename);
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