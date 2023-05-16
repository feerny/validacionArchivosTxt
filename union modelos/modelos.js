const fs = require("fs");
let arrayMaterial1=fs.readFileSync('./material1.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let arrayMaterial2=fs.readFileSync('./material2.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let modelos=fs.readFileSync('./modelos.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");


var objet=[];
var objetFinal=[];

for (let i = 0; i < arrayMaterial2.length; i++) {
    objet.push({
        material:arrayMaterial2[i],
        modelo: modelos[i]
    })
}


arrayMaterial1.map(data=>{
    const filterdata= objet.filter(data2=>data2.material===data)
    var modelosdata=[]
    filterdata.map(data3=>{modelosdata.push(data3.modelo) } )
 
    const resultModelos = modelosdata.filter((item,index)=>{
     return modelosdata.indexOf(item) === index;
   })
   var modeloComplet="";
   resultModelos.map(data4=>{
    if (modeloComplet==="") {
        modeloComplet=data4
    }else{
        modeloComplet=modeloComplet+"-"+data4
    }
    
   })
   if (resultModelos.length>0) {
    objetFinal.push({
        material:data,
        modelo:modeloComplet
       })
   }else{
    objetFinal.push({
        material:"null",
        modelo:"null"
       })
   }

   modeloComplet=""
})
console.log(`Material,               Modelo,`);
objetFinal.map(data=>{
    console.log(`${data.material},               ${data.modelo},`);
})






