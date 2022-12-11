import { createApp } from 'vue'
import { vue3Debounce } from 'vue-debounce'
import './style.scss'
import App from './App.vue'
import {store, key} from './store'

createApp(App)
    .use(store, key)
    .directive('debounce', vue3Debounce({ lock: true }))
    .mount('#app')
