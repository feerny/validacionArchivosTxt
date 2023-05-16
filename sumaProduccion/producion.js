const fs = require("fs");
let arrayModelos1=fs.readFileSync('./modelos1.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let arrayModelos2=fs.readFileSync('./modelos2.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let cantidades2=fs.readFileSync('./cantidades2.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");


var objet=[];
var objet2=[];
var objetFinal=[];

for (let i = 0; i < arrayModelos2.length; i++) {
    objet2.push({
        modelo:arrayModelos2[i],
        cantidad: parseInt(cantidades2[i])
    })
}

arrayModelos1.map(data=>{
    objet.push(data.split("-"))
})

objet.map(data=>{
    var suma=0;
    data.map(data2=>{
       const filterarray= objet2.filter(data3=>data3.modelo===data2)
       filterarray.map(data4=>{
        suma=suma+data4.cantidad
       })

    })
    console.log(suma);
    suma=0
})


