<template>
  <v-container class="px-10" id="fileDownloadArea">
    <!-- grid and download-button section -->

    <v-row class="justify-end">
      <v-btn
        class="my-5"
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
    </v-row>

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

    <v-row class="justify-end">
      <v-btn
        class="my-5"
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
    </v-row>
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
      setTimeout(() => {
        this.$router.push("download");
        this.loading = false;
      }, 3000);
    },
  },

  created() {},
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