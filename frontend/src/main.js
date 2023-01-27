import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import FlagIcon from "vue-flag-icon";

loadFonts();

createApp(App).use(FlagIcon).use(router).use(store).use(vuetify).mount("#app");
