import axios from "axios";

const state = {
    imageInfo: {},
    files: new Set()
}

const mutations = {
    SET_IMAGE_INFO(state, payload) {
        state.imageInfo = payload;
        state.files.add(payload)
    }
}

const getters = {
    getFiles: (state) => Array.from(state.files)
}

const actions = {

    getFileToDownload({ commit, dispatch, rootState }, filename_) {
        let filesArray = Array.from(rootState.filesToDownload)
        console.log("current file,", filesArray[filesArray.length - 1])
        let filename = rootState.bulkTag == 'file' ? filesArray[filesArray.length - 1] : filename_

        let params = {
            format: "json",
            action: "query",
            iiprop: "mime|mediatype|dimensions|url",
            prop: "imageinfo",
            titles: "File:" + filename?.replace(" ", "_"),
            origin: "*",
        };

        axios
            .get("https://commons.wikimedia.org/w/api.php", {
                headers: {
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

                commit("SET_IMAGE_DATA", imageData)

                dispatch("getTotalSize");
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