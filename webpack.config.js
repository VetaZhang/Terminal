var precss = require('precss');
var fs = require('fs');

function readdir(path) {
  var filename = fs.readdirSync(path);
  var list = [];
  for (i of filename) {
    list.push(path + i);
  }
  return list;
}

module.exports = {
  entry: {
    js: './src/main.js'
    // png: './public/img/logo.png'
    // core: ['./apps/core/js/'],
    // init: ['./public/js/init.js', './public/css/']
    // render: './public/js/render.js',
    // apps: readdir('./public/js/apps/'),
    // components: readdir('./public/js/components/'),
    // style: readdir('./public/css/')
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
    // filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"},
      { test: /\.(otf|eot|svg|ttf|woff|woff2|png)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  resolve: {
    //查找module的话从这里开始查找
    // root: '/Users/veta/Private/Terminal', //绝对路径
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', '.json', '.scss', '.vue'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  postcss: function () {
    return [precss];
  },
  vue: {
    postcss: [precss()],
    loaders: {
      js: 'babel',
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
};
