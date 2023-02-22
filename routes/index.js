const { time } = require('console');
const express = require('express');
const router = express.Router();

const fs = require("fs")

const json_fotos = fs.readFileSync("src/fotos.json","utf-8")
const fotos = JSON.parse(json_fotos)

/* GET home page. */
router.get('/',(req, res, ) =>{
  res.render("landing")
})


router.get('/add',(req, res,)=> {
  res.render('add', { title: 'añadir' });
  
});

router.get('/index',(req, res,)=> {
  res.render('index', { fotos });
});

router.get("/images,"),(req,res)=>{
  res.render("/public/images")
}
  

router.post("/add", function(req,res){
  const{ titulo, imagen, date, desc}  =req.body
  if(!titulo || !date || !imagen || !desc){
    res.status(400).render("error_campos")
  return
}
  let newFoto = {
  titulo,
  imagen,
  date,
  desc
}
  fotos.push(newFoto)

  const json_fotos = JSON.stringify(fotos)
  fs.writeFileSync("src/fotos.json", json_fotos, "utf-8")

  res.redirect("/index");

  
}
)


module.exports = router;
