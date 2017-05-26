const animals = 
[
  {name: "fluffykins", species: "rabbit"},
  {name: "Caro", species: "dog"},
  {name: "Hamilton", species: "dog" }
];

//append each dog to an array
const dogs = animals.filter((animal) => animal.species === "dog");
console.log(dogs);

//var dogs = [];
//for (let i = 0; i < animals.length; i++)
//{
//  if (animals[i].species === "dog")
//  {
//    dogs.push(animals[i]);
//  }
//}
