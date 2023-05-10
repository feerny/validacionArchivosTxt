const fs = require("fs");
let arrayMaterial1=fs.readFileSync('./material1.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let arrayCantidad1=fs.readFileSync('./cantidad1.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let arrayMaterial2=fs.readFileSync('./material2.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let arrayCantidad2=fs.readFileSync('./cantidad2.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let arrayReferencia=fs.readFileSync('./ref.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let arrayFecha=fs.readFileSync('./fecha.txt', 'utf-8').replace(/(\n|\n)/gm, "").split("\r");

var objet1=[];
var objet2=[];
var objetFinal=[];

for (let i = 0; i < arrayMaterial1.length; i++) {
    objet1.push({
        material:arrayMaterial1[i],
        cantidad: parseInt(arrayCantidad1[i])
    })
}
for (let i = 0; i < arrayMaterial2.length; i++) {
    objet2.push({
        material:arrayMaterial2[i],
        cantidad:parseInt(arrayCantidad2[i]),
        ref:arrayReferencia[i],
        fecha:arrayFecha[i]
    })
}


objet1.map(data1=>{
    const dataFilter=objet2.filter(data=>data.material===data1.material && data.cantidad>=data1.cantidad)
    if (dataFilter.length>0) {
        objetFinal.push(dataFilter[0])
    }else{
        const dataFilter2=objet2.filter(data=>data.material===data1.material && data.cantidad<=data1.cantidad)
        if (dataFilter2.length>0) {
            dataFilter2.reverse()
            objetFinal.push(dataFilter2[0])
        }else{
            objetFinal.push({
                material: "null", cantidad: "null", ref: "null" , fecha: "null" 
            })
        }
    }
})
console.log(`MATERIAL,          CANTIDAD,          REF,          fecha,\r`);
objetFinal.map(dataFinal=>{
    console.log(`${dataFinal.material},          ${dataFinal.cantidad},          ${dataFinal.ref},          ${dataFinal.fecha},\r`);
})




