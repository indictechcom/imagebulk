<template>
  <v-container>
    <!-- Category Input area -->
    <v-row class="align-center">
      <v-col cols="9">
        <form action>
          <v-text-field
            color="primary"
            v-model="imagesField"
            @keypress.enter="addImages"
            outlined
            class="mt-5"
            dense
            :placeholder="$t('cat-placeholder')"
            name="imageCategory"
          >
            <template v-slot:append>
              <v-btn
                depressed
                tile
                color="primary"
                class="my-0 py-5 mr-n3 mt-n2"
                @click="addImages"
              >{{ $t("add-images-button")}}</v-btn>
            </template>
          </v-text-field>
        </form>
      </v-col>

      <v-col cols="3" class="text-center">
        <v-dialog v-model="dialog" scrollable max-width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="gray" v-bind="attrs" v-on="on">{{ $t('changelanguage') }}</v-btn>
          </template>

          <v-card>
            <v-card-title>{{ $t('my-language') }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-radio-group v-model="language" column @change="changeLanguage">
                <v-radio label="English" selected value="en"></v-radio>
                <v-radio label="Français" value="fr"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="red darken-1" text @click="dialog = false">{{ $t('button-cancel') }}</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">{{ $t('button-save') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <!-- Images list textarea -->
    <v-row>
      <v-col cols="9">
        <p class="mb-2">{{ $t('lable-images-list') }}:</p>
        <v-textarea outlined name="imageList" row-height="60" :placeholder="$t('file-name')"></v-textarea>

        <v-btn color="success">{{ $t('start-zipping-button') }}</v-btn>
      </v-col>
    </v-row>

    <br />
    <br />
    <br />
    <br />
    <h5>{{ $t('notes') }}:-</h5>
    <p style="font-size: 12px; margin-bottom: 0px;">{{ $t('notes-1') }}</p>
    <p style="font-size: 12px;">{{ $t('notes-2') }}</p>
    <p>
      <small>
        Created by:
        <a href="https://meta.wikimedia.org/wiki/User:Jayprakash12345">Jay Prakash</a>
        For more information, see:
        <a
          href="https://meta.wikimedia.org/wiki/Indic-TechCom"
        >Indic-TechCom</a>,
        <a href="https://github.com/Jayprakash-SE/imagebulk">(View source)</a>
      </small>
    </p>
  </v-container>
</template>

<script>
export default {
  name: "ImageBulkComponent",

  data: () => ({
    imagesField: "",
    dialog: false,
    language: "en",
  }),

  methods: {
    addImages() {},

    changeLanguage() {
      if (this.language == "en") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "fr";
      }
    },
  },
};
</script>
