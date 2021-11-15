import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";

export default {
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser(),
  ],
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};