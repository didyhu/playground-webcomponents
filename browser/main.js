const { app, BrowserWindow  } = require("electron")
const path = require("path")

app.on("ready", () => {
    const entry = path.resolve(__dirname, "index.html")
    const win = new BrowserWindow ({ width: 800, height: 600 })
    win.loadFile(entry)
})
