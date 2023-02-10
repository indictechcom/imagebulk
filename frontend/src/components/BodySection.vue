<template>
  <v-container class="px-10">
    <!-- grid and download-button section -->

    <!-- file download area -->
    <v-row>
      <v-col cols="12" v-if="currentFile">
        <download-widget
          :filename="file"
          v-for="file in getFilesToDownload"
          :key="file"
        />

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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DownloadWidget from "./DownloadWidget.vue";
import { mapGetters } from "vuex";

export default {
  components: { DownloadWidget },

  computed: {
    ...mapGetters(["currentFile", "getFileLength", "getFilesToDownload"]),
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