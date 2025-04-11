//key: requir("./fileNameWithLocation") function which fetch data from JSON
// update, delete
//Jsonpathfinder website for accessing desired data


const info = require("./practiceForIndexJs.json");

// accessing JSON data
console.log(info);
console.log(info.Info[0].name);
console.log(info.Info[0].language[0]);
console.log(info.Info[0].friends[0].name);

//update
info.Info[0].friends[0].name="Rasel"
console.log(info.Info[0].friends[0].name);

//delete
delete info.Info[0].friends[0].name;
console.log(info.Info[0].friends[0].name); // it will print undefined