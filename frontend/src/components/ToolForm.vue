<template>
  <v-col cols="8" class="mt-2">
    <v-card color="secondary" class="pa-1">
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="loadFiles"
          class="pa-10"
        >
          <div class="mt-1 mb-6 d-flex align-center justify-center">
            <v-icon size="large" class="mr-1">mdi-link-variant</v-icon>
            <h2>Enter URL</h2>
          </div>
          <v-text-field
            id="commonsField"
            v-model="commonsURL"
            :rules="rules"
            class="mb-5"
            hint="The link of the image file or category from commons"
            required
            variant="flat"
            bg-color="white"
            clearable
            clear-icon="mdi-close"
            autofocus
            density="compact"
            persistent-clear
            persistent-hint
            placeholder="https://commons.wikimedia.org/Category:SpaceX"
          ></v-text-field>

          <div class="text-center mt-8">
            <v-btn
              color="success"
              prepend-icon="mdi-progress-download"
              width="175px"
              class="text-white"
              @click="loadFiles"
            >
              Load
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    commonsURL: "",
    rules: [
      (v) => !!v || "Required.",
      (v) =>
        /https:\/\/commons.wikimedia.org\/[\w!?/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/.test(
          v
        ) || "Please enter a valid commons URL",
    ],
  }),

  methods: {
    ...mapMutations(["SET_FILE_TO_DOWNLOAD", "SET_CATEGORY_TO_DOWNLOAD"]),

    scrollToElement(options) {
      const el = document.getElementById("fileDownloadArea");

      if (el) {
        el.scrollIntoView(options);
      }
    },

    loadFiles() {
      if (this.commonsURL.includes("Category")) {
        this.loadCategoryImages();
      }

      if (this.commonsURL.includes("File")) {
        this.loadFileImage();
        this.scrollToElement({ behavior: "smooth" });
      }
    },

    loadFileImage() {
      this.SET_FILE_TO_DOWNLOAD(this.commonsURL.split("File:")[1].trim());
    },

    loadCategoryImages() {
      this.SET_CATEGORY_TO_DOWNLOAD(
        this.commonsURL.split("Category:")[1].trim()
      );
    },
  },
};
</script>

<style scoped>
form.v-form {
  border: 2px dotted #f5f5f5d3;
  border-radius: 5px;
  background-color: #1976d2;
}
button.v-btn {
  color: white !important;
  font-weight: bold;
}

div#commonsField-messages {
  opacity: 1;
}
</style>