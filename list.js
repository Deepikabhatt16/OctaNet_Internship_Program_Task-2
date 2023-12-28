import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath}from "url";
import {dirname} from "path";
const __dirname=dirname(fileURLToPath(import.meta.url));
const port=1000;
const app=express();
let task=[];
let type=[];
let start=[];
let end=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res) => {
   res.render(__dirname+"/views/list.ejs");
});

app.post("/submit",(req,res)=>{
  let head=req.body.task;
  let text=req.body.type;
  let suru=req.body.start;
  let khatm=req.body.end;
  task.push(head);
  type.push(text);
  start.push(suru);
  end.push(khatm);
  res.render(__dirname+"/views/list.ejs",{work:task,related:type,from:start,to:end});
  
});


app.listen(port,()=>{
    console.log("serving on port = "+port);
    console.log("kyu ni chlra bhyii");
});