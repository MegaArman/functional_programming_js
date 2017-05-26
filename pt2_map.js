const animals = 
[
  {name: "fluffykins", species: "rabbit"},
  {name: "Caro", species: "dog"},
  {name: "Hamilton", species: "dog" }
];

//append each dog name to an array
const names = animals.map((animal) => animal.name);
console.log(names);

//const names = [];
//for (let i = 0; i < animals.length; i++)
//{
//    names.push(animals[i]);
//}
