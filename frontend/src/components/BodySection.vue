<template>
  <v-container class="px-10" id="fileDownloadArea">
    <!-- grid and download-button section -->

    <!-- file download area -->
    <v-row v-if="filesToDownload">
      <v-col
        cols="3"
        v-for="(file, index) in filesToDownload"
        :key="file + index"
      >
        <download-widget :filename="file" />
      </v-col>
    </v-row>

    <v-btn
      class="float-right my-5"
      :loading="loading"
      :disabled="loading"
      color="info"
      @click="load()"
      >Download
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>mdi-cached</v-icon>
        </span>
      </template>
    </v-btn>
  </v-container>
</template>

<script>
import DownloadWidget from "./DownloadWidget.vue";
import { mapGetters } from "vuex";

export default {
  components: { DownloadWidget },

  computed: {
    ...mapGetters(["filesToDownload", "getFileLength"]),
  },

  data: () => ({
    loading: false,
  }),

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 3000);
    },
  },

  created() {
    // console.log("current file", this.currentFile());
  },
};
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>