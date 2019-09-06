import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import pkg from './package.json'

const outputES = { file: pkg.module, format: 'es' }
const outputCJS = { file: pkg.main, format: 'cjs' }
const external = ['svelte/store']

export default {
  input: 'index.js',
  output: [outputES, outputCJS],
  external,
  plugins: [commonjs(), buble()]
}
