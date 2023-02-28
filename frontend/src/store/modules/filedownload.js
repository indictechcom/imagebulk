import axios from "axios";


const state = {
    filesToDownload: [],
    imageInfo: {},
    files: []
}

const mutations = {
    SET_FILE_TO_DOWNLOAD(state, payload) {
        console.log("file to download", payload)
        state.filesToDownload.unshift(payload);
    },

    SET_IMAGE_INFO(state, payload) {
        state.imageInfo = payload;
        state.files.unshift(payload)
    }
}

const getters = {
    filesToDownload: (state) => state.filesToDownload,

    getFileLength: (state) => state.filesToDownload.length,

    getFiles: (state) => state.files
}

const actions = {
    getFileToDownload({ commit }, filename) {
        console.log("current file,", state.filesToDownload[0])
        let params = {
            format: "json",
            action: "query",
            iiprop: "mime|mediatype|dimensions|url",
            prop: "imageinfo",
            titles: "File:" + state.filesToDownload[0].replace(" ", "_"),
            origin: "*",
        };

        axios
            .get("https://commons.wikimedia.org/w/api.php", {
                headers: {
                    "User-Agent": "Imagebulk tool",
                    "Content-Type": "application/json",
                }, params
            })
            .then((res) => {
                let data = res['data']['query']['pages']
                let imageData = {}

                for (var key in data) {
                    imageData = { "title": data[key]['title'].split(":")[1], ...data[key]["imageinfo"][0] }
                }

                console.log("response data: ", imageData)

                commit("SET_IMAGE_INFO", imageData);
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