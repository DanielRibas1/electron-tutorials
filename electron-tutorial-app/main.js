const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function creatwWindow () {
    mainWindow = new BrowserWindow({ 
        frame: false, 
        width: 1281, 
        height: 800, 
        minWidth: 1281, 
        minHeight: 800,
        backgroundColor: '#312450',
        show: false,
        icon: path.join(__dirname, 'assets/icons/png/64x64.png')
        })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function () {
        mainWindow = null
    })
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
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