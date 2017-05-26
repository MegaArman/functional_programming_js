const animals = 
[
  {name: "fluffykins", species: "rabbit"},
  {name: "Caro", species: "dog"},
  {name: "Hamilton", species: "dog" }
];

//set variable to first dog
const firstDog = animals.find((animal) => animal.species === "dog");
console.log(firstDog);

//const names = [];
//for (let i = 0; i < animals.length; i++)
//{
//    names.push(animals[i]);
//}
