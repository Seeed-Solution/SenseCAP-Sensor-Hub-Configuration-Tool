module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'SenseCAP Sensor Hub Configuration Tool',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    general: {
      entry: 'src/main-general.js',
      template: 'public/index.html',
      filename: 'general.html',
      title: 'SenseCAP One Configuration Tool - General',
      chunks: ['chunk-vendors', 'chunk-common', 'general']
    },
    sensor: {
      entry: 'src/main-sensor.js',
      template: 'public/index.html',
      filename: 'sensor.html',
      title: 'SenseCAP One Configuration Tool - Sensor',
      chunks: ['chunk-vendors', 'chunk-common', 'sensor']
    },
  },
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use("i18n")
        .loader("@intlify/vue-i18n-loader")
        .end();
  },
  pluginOptions: {
    electronBuilder: {
      // List native deps here if they don't work
      externals: ['serialport'],
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      // nodeModulesPath: ['../../node_modules', './node_modules']

      nodeIntegration: true,

      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        'appId': 'cc.seeed.sensecap.tools.hub',
        'productName': 'SenseCAP Sensor Hub Configuration Tool',
        'copyright': 'Copyright ©2008-2020 Seeed Technology Co.,Ltd.',
        'nsis': {
          'installerIcon': 'build/icon.ico',
          'installerHeader': 'build/icon.png',
          'installerHeaderIcon': 'build/icon.ico',
          'oneClick': false,
          'allowToChangeInstallationDirectory': true,
          'runAfterFinish': false
        },
        'win': {
          'verifyUpdateCodeSignature': false,
          'target': ['nsis', 'portable'],
          'icon': 'build/icon.ico',
        },
        'dmg': {
          'title': 'SenseCAP Sensor Hub Configuration Tool',
          'icon': 'build/icon.png',
          'contents': [
            {
              'x': 100,
              'y': 200
            },
            {
              'x': 400,
              'y': 200,
              'type': 'link',
              'path': '/Applications'
            }
          ],
        },
        'mac': {
          'category': 'public.app-category.developer-tools',
          'target': 'default',
          'icon': 'build/icon.png',
          "hardenedRuntime" : true,
          "gatekeeperAssess": false,
          "entitlements": "build/entitlements.mac.plist",
          "entitlementsInherit": "build/entitlements.mac.plist"
        },
        "afterSign": "scripts/notarize.js",
        "linux": {
          "target": ["AppImage", "deb"],
          "icon": "build/iconset"
        },
        "publish": "github"
      }
    }
  }
}