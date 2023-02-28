import { createStore } from "vuex";
import file from "./modules/filedownload";
import category from "./modules/categorydownload";

export default createStore({
  state: () => ({
    filesToDownload: new Set(),
    categoryToDownload: "",
    bulkTag: "",
    imageData: new Set(),
    totalSize: 0
  }),

  mutations: {
    SET_FILE_TO_DOWNLOAD(state, payload) {
      console.log("file to download", payload);
      state.filesToDownload.add(payload)
    },

    SET_CATEGORY_TO_DOWNLOAD(state, payload) {
      console.log("category download...", payload);
      state.categoryToDownload = payload;
    },

    SET_IMAGE_DATA(state, payload) {
      state.imageData.add(payload)
    },

    SET_BULK_TAG(state, payload) {
      state.bulkTag = payload;
    },

    SET_TOTAL_SIZE(state, payload) {
      state.totalSize = payload
    }
  },

  getters: {
    filesToDownload: (state) => Array.from(state.filesToDownload),

    getFileLength: (state) => state.filesToDownload.size,

    getTag: (state) => state.bulkTag,

    getTotalSize: (state) => state.totalSize,

    getImageData: (state) => Array.from(state.imageData)
  },

  actions: {
    getTotalSize({ commit, state }) {
      let cleanedData = Array.from(state.imageData)

      let bytes = 0
      let decimals = 2

      cleanedData.forEach(item => {
        bytes += item.size
      });

      if (!+bytes) return '0 B'

      const k = 1024
      const dm = decimals < 0 ? 0 : decimals
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

      const i = Math.floor(Math.log(bytes) / Math.log(k))

      const total = `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`

      console.log("imageDATA: ", cleanedData)
      console.log("imageTOTAL: ", total)

      commit("SET_TOTAL_SIZE", total)
    }
  },

  modules: {
    file,
    category,
  },
});
