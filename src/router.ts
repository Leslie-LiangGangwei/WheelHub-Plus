import Doc from './view/Doc.vue'
import Home from './view/Home.vue'
import Switch from './components/SwitchDoc.vue'
import Button from './components/ButtonDoc.vue'
import Dialog from './components/DialogDoc.vue'
import Tabs from './components/TabsDoc.vue'
import Default from './components/DefaultDoc.vue'
import Intro from './components/Intro.vue'
import Install from './components/Install.vue'
import GetStarted from './components/GetStarted.vue'
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
                {path: "intro", component: Intro},
                {path: "install", component: Install},
                {path: "getStarted", component: GetStarted},
            ],
        },
    ]
})


