import axios from "axios";

const state = {
    catImageURL: "",
}

const mutations = {
    SET_CAT_IMAGE_URL(state, payload) {
        state.catImageURL = payload;
    }
}

const getters = {
    getCatImageURL: (state) => state.catImageURL
}

const actions = {
    getCategoryToDownload({ commit, rootState }) {
        console.log("current category,", rootState.categoryToDownload)
        let params = {
            action: "query",
            format: "json",
            list: "categorymembers",
            cmtitle: "Category:" + rootState.categoryToDownload.replace(" ", "_"),
            cmprop: "title",
            cmnamespace: "6",
            cmtype: "file",
            cmlimit: "250",
            origin: "*",
        };

        axios
            .get("https://commons.wikimedia.org/w/api.php", {
                headers: {
                    "Content-Type": "application/json",
                },
                params: params,
            })
            .then((res) => {
                let data = res.data.query.categorymembers
                console.log("category images: ", data);

                data.forEach(file => {
                    let cleaned = file.title.split("File:")[1]
                    commit("SET_FILE_TO_DOWNLOAD", cleaned)
                });
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