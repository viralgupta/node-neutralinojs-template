const NeutralinoApp = require("node-neutralino")

const app = new NeutralinoApp({url: "/", windowOptions: {enableInspector: false}})

app.init()

app.on("backend.maximize", ()=>{
    app.window.maximize()
})