<template>
  <v-card>
    <v-tabs fixed-tabs v-model="tab" bg-color="green-darken-2">
      <v-tab value="file">File</v-tab>
      <v-tab value="category">Category</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="file">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="loadFileImage"
          >
            <v-text-field
              v-model="filename"
              :rules="filenameRules"
              hint="Hint, File:The Earth seen from Apollo 17.jpg"
              required
              variant="outlined"
            ></v-text-field>

            <v-btn color="success" class="me-4 mt-4" @click="loadFileImage">
              Load
            </v-btn>
          </v-form>
        </v-window-item>

        <v-window-item value="category">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit.prevent="loadCategoryImages"
          >
            <v-text-field
              v-model="category"
              :rules="categoryRules"
              hint="Hint, Category:Photos of Earth by Apollo spacecraft"
              variant="outlined"
            ></v-text-field>

            <v-btn
              color="success"
              class="me-4 mt-4"
              @click="loadCategoryImages"
            >
              Load
            </v-btn>
          </v-form>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data: () => ({
    tab: null,
    valid: true,
    category: "",
    categoryRules: [
      (v) =>
        (v && v.length >= 10) || "Category must not be less than 10 characters",
    ],
    filename: "",
    filenameRules: [
      (v) =>
        (v && v.length >= 10) ||
        "File Name must not be less than 10 characters",
    ],
  }),

  methods: {
    ...mapMutations(["SET_FILE_TO_DOWNLOAD"]),

    loadFileImage() {
      console.log("file download: ", this.filename.split("File:")[1].trim());
      this.SET_FILE_TO_DOWNLOAD(this.filename.split("File:")[1].trim());
    },

    loadCategoryImages() {
      if (this.category !== "") {
        let params = {
          action: "query",
          format: "json",
          list: "categorymembers",
          cmtitle: "Category:" + this.category.replace("Category:", ""),
          cmprop: "title",
          cmnamespace: "6",
          cmtype: "file",
          cmlimit: "250",
          origin: "*",
        };

        axios
          .get("https://commons.wikimedia.org/w/api.php", {
            headers: {
              "User-Agent": "Imagebulk tool",
              "Content-Type": "application/json",
            },
            params: params,
          })
          .then((res) => {
            console.log("category images: ", res);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
      }
    },
  },
};
</script>