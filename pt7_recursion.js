const categories = 
[
  {"id": "animals", "parent": null},
  {"id": "mammals", "parent": "animals"},
  {"id": "cats", "parent": "mammals"},
  {"id": "dogs", "parent": "mammals"},
  {"id": "chihuahua", "parent": "dogs"},
  {"id": "labrador", "parent": "dogs"},
  {"id": "persian", "parent": "cats"},
  {"id": "siamese", "parent": "cats"},
];

const makeTree = (categories, parent) => 
{
  const node = {};
  
  categories.filter(c => c.parent === parent)
            .forEach(c =>
              node[c.id] = makeTree(categories, c.id));
  return node;
};

console.log("animals-------------");
console.log(
  JSON.stringify(
    makeTree(categories, "animals"), null, 2)
);

console.log("cats only-----------");
console.log(
  JSON.stringify(
    makeTree(categories, "cats"), null, 2)
);
