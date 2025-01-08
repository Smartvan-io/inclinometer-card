import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/inclinometer/index.ts",
  output: {
    file: "./inclinometer.js",
    sourcemap: true,
  },
  context: "this",
  plugins: [
    resolve(),
    typescript(),
    // babel({
    //   babelHelpers: "bundled",
    //   presets: [["@babel/preset-env", { targets: "defaults" }]],
    //   plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
    // }),
    commonjs(),
    terser(),
  ],
};
