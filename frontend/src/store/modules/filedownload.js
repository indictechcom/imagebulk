import axios from "axios";


const state = {
    filesToDownload: [],
    imageURL: "",
}

const mutations = {
    SET_FILE_TO_DOWNLOAD(state, payload) {
        console.log("file to download", payload)
        state.filesToDownload.unshift(payload);
    },

    SET_IMAGE_URL(state, payload) {
        state.imageURL = payload;
    }
}

const getters = {
    getFilesToDownload: (state) => state.filesToDownload,

    getFileLength: (state) => state.filesToDownload.length,

    currentFile: (state) => state.filesToDownload[0],

    getImageURL: (state) => state.imageURL
}

const actions = {
    getFileToDownload({ commit }, options) {
        console.log("current file,", state.filesToDownload[0])
        axios
            .get("https://picsum.photos/350/350", options)
            .then((res) => {
                commit(SET_IMAGE_URL, res.data);
            })
            .catch((err) => console.error(err));
    }
}

const fileModule = {
    state,
    mutations,
    getters,
    actions
}

export default fileModule;