const path = require('path');
const url = require('url');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({ width : 800, height : 800});
    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname,'index.html'),
        protocol : 'file:',
        slashes : true
    }));
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready',createWindow)

app.on('window-all-closed',() => {
    app.quit();
})