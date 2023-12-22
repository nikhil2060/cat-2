const bodyParser = require("body-parser")
const express=require("express")
const app=express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
var name
var pass
app.get("/",(req,res)=>
{

    res.sendFile(__dirname+"/index.html")

})

app.post("/result",(req,res)=>
{
 name=req.body.uname
 pass=req.body.psw

 if(name=="23337249" && pass=="947242")
{
    res.sendFile(__dirname+"/result.pdf")

}
})


app.listen(3000)