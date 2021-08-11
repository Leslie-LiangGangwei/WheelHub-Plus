import Doc from './view/Doc.vue'
import Home from './view/Home.vue'
import InstallDoc from './components/InstallDoc.vue'
import GetStartedDoc from './components/GetStartedDoc.vue'
import IntroDoc from './components/IntroDoc.vue'
import SwitchDoc from './components/SwitchDoc.vue'
import IconDoc from './components/IconDoc.vue'
import InputDoc from './components/InputDoc.vue'
import ButtonDoc from './components/ButtonDoc.vue'
import DialogDoc from './components/DialogDoc.vue'
import TabsDoc from './components/TabsDoc.vue'
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
                {path: "icon", component: IconDoc},
                {path: "switch", component: SwitchDoc},
                {path: "input", component: InputDoc},
                {path: "button", component: ButtonDoc},
                {path: "dialog", component: DialogDoc},
                {path: "tabs", component: TabsDoc},
                {path: "intro", component: IntroDoc},
                {path: "install", component: InstallDoc},
                {path: "get-started", component: GetStartedDoc},
            ],
        },
    ]
})
