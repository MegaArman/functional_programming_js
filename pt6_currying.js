const dragon = 
    name =>
      size =>
        element =>
          name + " is a " +
          size + " dragon that breathes " +
          element + "!";

const output = dragon("Karo")("Large")("Ice");
console.log(output);
