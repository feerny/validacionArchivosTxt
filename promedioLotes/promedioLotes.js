const fs = require("fs");
let arrayModelos1=fs.readFileSync('./modelos1.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let arrayModelos2=fs.readFileSync('./modelos2.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");
let lotes2=fs.readFileSync('./lotes2.txt', 'utf-8').replace(/(\r\n|\n|\r)/gm, "").split("/");


var objet=[];
var objet2=[];

for (let i = 0; i < arrayModelos2.length; i++) {
    objet2.push({
        modelo:arrayModelos2[i],
        lote: parseInt(lotes2[i])
    })
}

arrayModelos1.map(data=>{
    objet.push(data.split("-"))
})


objet.map(data=>{
    var promLotes=[];
    data.map(data2=>{
       const filterarray= objet2.filter(data3=>data3.modelo===data2)
       filterarray.map(data4=>{
        promLotes.push(data4.lote)
       })

    })
    function getAverageAge(users) {
        return users.reduce((prev, user) => prev + user, 0) / users.length;
      }
    console.log(getAverageAge(promLotes));
    promLotes=[]
})