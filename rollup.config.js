import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import vue2 from 'rollup-plugin-vue2';
import css from 'rollup-plugin-css-porter';
import fs from 'fs';
import path from 'path';

const prefix = 'vsm-';
const components = fs.readdirSync('packages/components').filter(component => {
    return fs.statSync(path.resolve('packages/components', component)).isDirectory()
});

const directives = fs.readdirSync('packages/directives').filter(dir => {
    return fs.statSync(path.resolve('packages/directives', dir)).isDirectory()
});

export default [{
  input: 'packages/index.js',

  output: [
    {
      file: 'lib/index.esm.js',
      name: 'visam',
      format: 'esm'
    }, {
      file: 'lib/index.umd.js',
      name: 'visam',
      format: 'umd',
      exports: 'named'
    }, {
      file: 'lib/src/index.js',
      name: 'visam'
    },
  ],

  plugins: [
    vue2({
        compileTemplate: true
    }),
    terser(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    css({
        dest: 'lib/visam.css',
        minified: true,
    }),
  ]
}, ...components.map(component => {
    return {
        input: `packages/components/${component}/index.js`,
        output: {
            file: `lib/src/${prefix}${component}/index.js`,
            name: `${prefix}${component}`,
            format: 'esm',
            exports: 'named'
        },
        plugins: [
            vue2({
                compileTemplate: true
            }),
            terser(),
        ]
    }
}), ...directives.map(dir => {
    return {
        input: `packages/directives/${dir}/index.js`,
        output: {
            file: `lib/src/${dir}/index.js`,
            name: `${dir}`,
            format: 'esm',
            exports: 'named',
        },
        plugins: [
            vue2({
                compileTemplate: true
            }),
            terser(),
        ]
    }
})];
