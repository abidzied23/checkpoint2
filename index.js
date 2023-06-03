const  express = require('express')
const path = require("path")

const app = express()
const port = 3000
app.set('view engine', 'jade');
app.set('views','./views');

// app.get('/',(req,res)=>{
//   res.sendFile(path.join(__dirname,"views","home.html"))
// })

app.get('/home', (req, res) => {
  res.render('home',{
    home:"/home",
    services:"/services",
    contact:"/contact"

  })
})
app.get('/services',(req,res)=>{
  res.render('service',{
    home:"/home",
    services:"/services",
    contact:"/contact"

  })
})
app.get('/contact',(req,res)=>{
  res.render('contact',{
    home:"/home",
    services:"/services",
    contact:"/contact"

  })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))