import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import HelloWorld from './components/HelloWorld.vue'
import Sider from './components/sider.vue'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/sider', component: Sider},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')