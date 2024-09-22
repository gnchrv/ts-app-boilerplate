import esbuild from 'esbuild'
import serve from '@es-exec/esbuild-plugin-serve'

// Basic options
const options = {

    // Entry points and the path to the final bundle
    entryPoints: ['src/index.ts'],
    outdir: 'dist',

    // Whether to bundle together, minify and add a source map
    bundle: true,
    minify: true,
    sourcemap: true,

    // A target environment (esbuild doesn’t support this option specified in tsconfig.json)
    target: 'node16',

    // Adjust the output to the node-friendly environment
    platform: 'node',

    // Don’t bundle the dependencies. Apart from making the bundle lightweight, it also allows for using `__dirname` and other node-related features
    packages: 'external',

    // Log level is specified in order to print basic information even when launched as an npm script from package.json
    logLevel: 'info',

    // Preserve ESM-formatted output when bundling for `platform: node`. Otherwise, CJS will be chosen by default which won’t allow for using top-level await.
    format: 'esm'
}

/* Define which file to serve (aka run after each build). Allow to be passed as a CLI argument: it will be the fourth one in the script `node esbuild.mjs watch %file-to-serve%` */
const fileToServe = process.argv[3] ?? 'dist/index.js'

// The augumented list of options that enables serving the result
const servingOptions = {

    // Include all the basic options
    ...options,

    // Run the module after it’s built
    plugins: [serve({ main: fileToServe })]
}

// Different types of builds
const configs = {

    // The default one. Builds right away
    'build': () => esbuild.build(options),

    // The watching one. Set the context first and starts the watchg process later
    'watch': () => esbuild.context(servingOptions).then(r => r.watch())
}

/* 
Run the config. A command of the type `node esbuild.js watch` should be used. The third element of the command will be treated as a config name
*/
await configs[process.argv[2]]()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })