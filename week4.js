const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

// app.get("/sum", function (req, res) {
//     let a = parseInt(req.query.a);
//     let b = parseInt(req.query.b);

//     const sum = a+b;
//     res.send(sum.toString());
    

// });

app.get("/interest",function(req , res){
    let p = parseInt(req.query.p);
    let r = parseInt(req.query.r);
    let t = parseInt(req.query.t);

    const interest = (p*r*t)/100;
    const total = interest + p;
    const ret = { total:total,interest:interest};
    res.json(ret);    
})

app.listen(3300);