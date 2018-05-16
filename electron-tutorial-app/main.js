const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function creatwWindow () {
    mainWindow = new BrowserWindow({ frame: false, width: 1281, height: 800, minWidth: 1281, minHeight: 800 })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', creatwWindow)

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})