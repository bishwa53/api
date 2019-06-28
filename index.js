const Express = require("express")
const app = Express()
const cors = require('cors')
const handlers = require('./handlers');

//body parser stuffs
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//use cors
app.use(cors());

const route = "api/";
app.get(route+"teacher/",handlers.getAllUsers)

app.post(route+"teacher/",handlers.registerTeacher)


//start server
const port = 5000;
app.listen(port,()=>{
    console.log("Server listening on "+port);
})