import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/clone.ts',
  output: {
    file: 'dist/clone.cjs.js',
    format: 'cjs',
  },
  plugins: [typescript()],
}
