import Doc from './view/Doc.vue'
import Home from './view/Home.vue'
import Switch from './components/Switch.vue'
import {createWebHashHistory, createRouter} from 'vue-router'


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path: "switch", component: Switch}
            ]
        },
    ]
})


