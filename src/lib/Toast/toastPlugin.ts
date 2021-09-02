import {createApp, h} from "vue";
import Toast from './Toast.vue'

export const toastPlugin = (options) => {
    const {message, type, autoClose, showClose} = options
    const div = document.createElement("div")
    document.body.append(div)
    const close = () => {
        // @ts-ignore
        app.unmount(div);
        div.remove();
    };
    const toastHtml = (message) => {
        if (message.substr(0,1) === '<') {
            const tagIndex = message.substr(1).indexOf('>')
            const tag = message.substr(1).substring(0, tagIndex)
            const first = message.indexOf('>') + 1
            const last = message.substr(1).indexOf('<') + 1
            const content = message.substring(first, last)
            return {message: () => h(tag, content)}
        } else {
            return {message: () => message}
        }
    }
    const app = createApp({
        render() {
            return h(Toast,
                {
                    visible: true,
                    "onUpdate:visible": (newValue) => {
                        if (newValue === false) {
                            close()
                        }
                    },
                    type,
                    autoClose,
                    showClose
                },
                toastHtml(message)
            )
        }
    })
    app.mount(div)
}