/* eslint-disable @typescript-eslint/no-require-imports */
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  mainWindow.loadURL('http://localhost:5173')
  // mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
