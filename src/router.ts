import Doc from './view/Doc.vue'
import Home from './view/Home.vue'
import Switch from './components/SwitchDoc.vue'
import Button from './components/ButtonDoc.vue'
import Dialog from './components/DialogDoc.vue'
import Tabs from './components/TabsDoc.vue'
import Default from './components/DefaultDoc.vue'
import Markdown from './components/Markdown.vue';
import {createWebHashHistory, createRouter} from 'vue-router'
import {h} from 'vue'

const history = createWebHashHistory()
const md =  filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

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
                {path: "intro",  component: md('intro')},
                {path: "install", component: md('install')},
                {path: "get-started", component: md('get-started')},
            ],
        },
    ]
})
