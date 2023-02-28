import axios from "axios";

const state = {
    categoryToDownload: [],
    catImageURL: "",
}

const mutations = {
    SET_CATEGORY_TO_DOWNLOAD(state, payload) {
        console.log("category to download", payload)
        state.categoryToDownload.unshift(payload);
    },

    SET_CAT_IMAGE_URL(state, payload) {
        state.catImageURL = payload;
    }
}

const getters = {
    getCategoryToDownload: (state) => state.categoryToDownload,

    getCategoryLength: (state) => state.categoryToDownload.length,

    currentCategory: (state) => state.categoryToDownload[0],

    getCatImageURL: (state) => state.catImageURL
}

const actions = {
    getCategoryToDownload({ commit }, fileURL) {
        console.log("current category,", state.categoryToDownload[0])
        let params = {
            action: "query",
            format: "json",
            list: "categorymembers",
            cmtitle: "Category:" + fileURL,
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
}

const categoryModule = {
    state,
    mutations,
    getters,
    actions
}

export default categoryModule;