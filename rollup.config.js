import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: process.env.DESTINATION || "./index.js",
    sourcemap: true,
  },
  context: "this",
  plugins: [resolve(), typescript(), commonjs(), terser()],
  onLog(level, log, handler) {
    console.log(process.argv);
  },
};
