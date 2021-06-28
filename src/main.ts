import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import Doc from './view/Doc.vue'
import Home from './view/Home.vue'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')