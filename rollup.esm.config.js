import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/clone.ts',
  output: {
    file: 'dist/clone.esm.js',
    format: 'es',
  },
  plugins: [typescript()]
}