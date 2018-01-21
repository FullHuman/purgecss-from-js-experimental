import babel from "rollup-plugin-babel"
// import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"

export default {
    input: "index.js",
    output: [
        {
            file: "lib/purgejs.es.js",
            format: "es"
        },
        {
            file: "lib/purgejs.js",
            format: "cjs"
        }
    ],
    plugins: [
        resolve(),
        // commonjs(),
        babel()
    ],
    external: ["prepack"]
}
