const stupidNumberStream = 
{
  each: (callback) =>
  {
    setTimeout(() => callback(1), 1000);
    setTimeout(() => callback(1), 2000);
    setTimeout(() => callback(1), 3000);
  }
};

createStupidNumberStream.each(console.log);
