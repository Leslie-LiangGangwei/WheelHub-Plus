// @ts-nocheck
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

export default {
    vueCustomBlockTransforms: {
        base: './',
        assetsDir: 'assets',
        demo: (options) => {
            const {path} = options
            const file = fs.readFileSync(path).toString()
            const parsed = baseParse(file).children.find(n => n.tag === 'demo')
            const main = file.split(parsed.loc.source).join('').trim()
            return `export default function (Component) {
        Component.__sourceCode = ${
                JSON.stringify(main)
            }
      }`.trim()
        }
    }
};
