<template>
  <div class="py-5 d-flex align-center position-relative">
    <div class="text-area d-flex justify-start align-center">
      <v-img :src="imageUrl" height="150" alt="" v-if="imageUrl">
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="blue-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
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
    ...mapActions([
      "getFileToDownload",
      "getCategoryToDownload",
      "getTotalSize",
    ]),
  },

  computed: {
    ...mapGetters(["getFiles", "getTag"]),

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
    if (!Object.values(this.getFiles).indexOf(this.filename) >= 0) {
      this.getFileToDownload(this.filename);
    }
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