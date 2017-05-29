const arr = [13, 14, 15, 16, 17];
arr.slice(1,arr.length).forEach(elem => console.log(elem));
//forEach is to be used when side effects are to be caused 
//file I/O (stdout in this case) is the side effect
//split gives a shallow copy (does not waste memory)
//split is EXCLUSIVE for the UPPER bounds
