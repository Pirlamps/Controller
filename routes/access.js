module.exports = function accessRoutes(app){
 const root = require('child_process')
 var child
    app.get('/netflix', (req,res) => {
        child = root.exec('start chrome https://www.netflix.com/', () => {
            console.log(child.pid)
        })
    })

    app.get('/kill', (req,res) => {
        if(child != null){
            console.log('matando')
            root.exec('kill google-chrome', (msg) => {
                console.log(msg)
            })
        }
    })
    
}
