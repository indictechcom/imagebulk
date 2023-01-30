<template>
  <v-container fluid class="bg-grey-lighten-2 px-16 py-12">
    <v-row class="">
      <v-col cols="6">
        <h1 class="font-weight-medium title">Imagebulk tool!</h1>
        <h3 class="font-weight-regular subtitle">
          The tool for Wikimedia file downloads
        </h3>

        <v-list dense class="bg-transparent px-0 ml-0 mt-3">
          <v-list-item
            class="px-0"
            v-for="(benefit, index) in benefits"
            :key="benefit + index"
          >
            <template v-slot:prepend>
              <v-icon icon="mdi-check-circle-outline"></v-icon>
            </template>
            <v-list-item-title class="benefit">{{ benefit }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="6" class="mt-8">
        <v-card>
          <v-tabs fixed-tabs v-model="tab" bg-color="green-darken-2">
            <v-tab value="one">Category</v-tab>
            <v-tab value="two">File</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="category"
                    :rules="categoryRules"
                    model-value="Category:"
                    hint="Hint, Category:Photos of Earth by Apollo spacecraft"
                    required
                    variant="outlined"
                  ></v-text-field>

                  <v-btn color="success" class="me-4 mt-4" @click="validate">
                    Load
                  </v-btn>
                </v-form>
              </v-window-item>

              <v-window-item value="two">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="filename"
                    :rules="filenameRules"
                    model-value="File:"
                    hint="Hint, File:The Earth seen from Apollo 17.jpg"
                    required
                    variant="outlined"
                  ></v-text-field>

                  <v-btn color="success" class="me-4 mt-4" @click="validate">
                    Load
                  </v-btn>
                </v-form>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TopSection",

  data: () => ({
    benefits: [
      "Free online images download",
      "Bulk image download",
      "Wikimedia images only",
    ],
    tab: null,
    valid: true,
    category: "",
    categoryRules: [
      (v) => v.length > 10 || "Category must not be less than 10 characters",
    ],
    filename: "",
    filenameRules: [
      (v) =>
        (v && v.length >= 10) ||
        "File Name must not be less than 10 characters",
    ],
  }),

  methods: {
    validate() {},
  },
};
</script>

<style scoped>
.title {
  font-size: 50px;
}
.subtitle {
  font-size: 32px;
}
.benefit {
  font-size: 26px;
}
</style>