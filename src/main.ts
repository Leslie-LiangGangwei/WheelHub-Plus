import './index.scss'
import './lib/g.scss'
import {createApp} from 'vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')