import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css';
import './assets/global.css';
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUtensils, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faUtensils, faTimes);

createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
