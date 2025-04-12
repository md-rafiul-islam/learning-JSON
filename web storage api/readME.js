//how to see local storage via inspect in the website: inspect->application->localstorage
// key: setItem,getItem, removeItem, localStorage.clear();




//setItem
// localStorage.setItem() take key value pairs and store also both must be string
localStorage.setItem("Name", "Rafiul");
localStorage.setItem("ID", "011221086");

// localStorage cannot take value other than string. So if any array is passed. it need to convert into Json file that is "JSON.stringify(data)";
const language = ["bangla", "english"];
localStorage.setItem("Language", JSON.stringify(language));




//getItem
const name = localStorage.getItem("Name");
console.log(name);
//array need to convert to JSON to javascript
const x = JSON.parse(localStorage.getItem("Language"));
console.log(x);




//removeItem
localStorage.removeItem("ID");
console.log(localStorage.getItem("ID"));  //it will return null

// localStorage.clear();


