const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');

const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: HMR,
    BANNER_TEXT:'BETA',
  KEYCLOAK: '/assets/js/keycloak.min.js'
});

/**
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function(options) {
  return webpackMerge(commonConfig({env: ENV}), {

    /**
     * Merged metadata from webpack.common.js for index.html
     *
     * See: (custom attribute)
     */
    metadata: METADATA,

    /**
     * Switch loaders to debug mode.
     *
     * See: http://webpack.github.io/docs/configuration.html#debug
     */
    debug: true,

    /**
     * Developer tool to enhance debugging
     *
     * See: http://webpack.github.io/docs/configuration.html#devtool
     * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
     */
    devtool: 'cheap-module-source-map',

    /**
     * Options affecting the output of the compilation.
     *
     * See: http://webpack.github.io/docs/configuration.html#output
     */
    output: {

      /**
       * The output directory as absolute path (required).
       *
       * See: http://webpack.github.io/docs/configuration.html#output-path
       */
      path: helpers.root('dist'),

      /**
       * Specifies the name of each output file on disk.
       * IMPORTANT: You must not specify an absolute path here!
       *
       * See: http://webpack.github.io/docs/configuration.html#output-filename
       */
      filename: '[name].[hash].bundle.js',

        /**
         * The filename of the SourceMaps for the JavaScript files.
         * They are inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
         */
        sourceMapFilename: '[name].[hash].map',

        /** The filename of non-entry chunks as relative path
         * inside the output.path directory.
         *
         * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
         */
        chunkFilename: '[id].[chunkhash].chunk.js',

        library: 'ac_[name]',
      libraryTarget: 'var',
    },

    plugins: [

      /**
       * Plugin: DefinePlugin
       * Description: Define free variables.
       * Useful for having development builds with debug logging or adding global constants.
       *
       * Environment helpers
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
       */
      // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
      new DefinePlugin({
          'IR_BASE_PATH':JSON.stringify('https://api.maritimeconnectivity.net'),
          'SR_BASE_PATH':JSON.stringify('https://sr.maritimeconnectivity.net'),
          'ENDORSEMENT_BASE_PATH':JSON.stringify('https://endorse.maritimeconnectivity.net'),
          'KEYCLOAK_JSON':JSON.stringify('assets/dev-temp-prod-keycloak.json'),
          'ENVIRONMENT_TEXT':JSON.stringify('Production'),
          'IS_DEV': true,
          'CAN_JOIN': true,
          'ENV': JSON.stringify(METADATA.ENV),
          'IDP_NAMESPACE': JSON.stringify('mcc'),
          'HMR': METADATA.HMR,
          'process.env': {
              'ENV': JSON.stringify(METADATA.ENV),
              'NODE_ENV': JSON.stringify(METADATA.ENV),
              'HMR': METADATA.HMR,
          }
      }),

      /**
       * Plugin: NamedModulesPlugin (experimental)
       * Description: Uses file names as module name.
       *
       * See: https://github.com/webpack/webpack/commit/a04ffb928365b19feb75087c63f13cadfc08e1eb
       */
      new NamedModulesPlugin(),

    ],

    /**
     * Static analysis linter for TypeScript advanced options configuration
     * Description: An extensible linter for the TypeScript language.
     *
     * See: https://github.com/wbuchwalter/tslint-loader
     */
    tslint: {
      emitErrors: false,
      failOnHint: false,
      resourcePath: 'src'
    },

    /**
     * Webpack Development Server configuration
     * Description: The webpack-dev-server is a little node.js Express server.
     * The server emits information about the compilation state to the client,
     * which reacts to those events.
     *
     * See: https://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      outputPath: helpers.root('dist')
    },

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: 'window',
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  });
}
