import Doc from './view/Doc.vue'
import Home from './view/Home.vue'
import InstallDoc from './components/InstallDoc.vue'
import GetStartedDoc from './components/GetStartedDoc.vue'
import IntroDoc from './components/IntroDoc.vue'
import Switch from './components/SwitchDoc.vue'
import Button from './components/ButtonDoc.vue'
import Dialog from './components/DialogDoc.vue'
import Tabs from './components/TabsDoc.vue'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()

export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path: "", redirect: "/doc/intro"},
                {path: "switch", component: Switch},
                {path: "button", component: Button},
                {path: "dialog", component: Dialog},
                {path: "tabs", component: Tabs},
                {path: "intro", component: IntroDoc},
                {path: "install", component: InstallDoc},
                {path: "get-started", component: GetStartedDoc},
            ],
        },
    ]
})
