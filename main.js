var app = require('app');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1200, height: 675, title: 'Terminal'});
  mainWindow.setMinimumSize(1200, 675);
  mainWindow.openDevTools()
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
