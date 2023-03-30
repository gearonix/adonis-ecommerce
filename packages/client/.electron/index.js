const path = require('path')
const { format } = require('url')

const { BrowserWindow, app, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')

app.on('ready', async () => {
  await prepareNext(path.resolve(__dirname, '..'))

  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true,
  })
  mainWindow.maximize()
  mainWindow.show()

  const url = isDev ?
    'http://localhost:8000' :
    format({
      pathname: path.join(__dirname, '../out/index.html'),
      protocol: 'file:',
      slashes: true
    })

  mainWindow.loadURL(url)
})

app.on('window-all-closed', app.quit)

ipcMain.on('message', (event, message) => {
  event.sender.send('message', message)
})
