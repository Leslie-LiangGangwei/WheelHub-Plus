import Doc from './view/Doc.vue'
import Home from './view/Home.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'
import Default from './components/Default.vue'
import {createWebHashHistory, createRouter} from 'vue-router'


const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path: "", component: Default},
                {path: "switch", component: Switch},
                {path: "button", component: Button},
                {path: "dialog", component: Dialog},
                {path: "tabs", component: Tabs},
            ],
        },
    ]
})


