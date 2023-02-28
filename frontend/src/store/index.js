import { createStore } from 'vuex'
import file from './modules/filedownload'
import category from './modules/categorydownload'

export default createStore({
  modules: {
    file, category
  }
})
