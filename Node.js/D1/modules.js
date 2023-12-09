// const abc = require('./people')

// console.log(abc);

//here abc is an empty oject, so we can only get the inside information from it therfore we can't access the data directly from another file by using require function

// to access inside the people file we can manually export the data by using module.exports = 'xyz'  
// abc (emptyfile) = people
// console.log(abc);



// can export multiple objects with it's properties by using destructing {objects}
const { people, ages } = require('./people');

console.log(people, ages);



//Node js built-in modules
//following is to get the detailed information about the current OS that is running on
const os = require('os');

// console.log(os);

//following is to find out the platform that we are runnning on and also home directory
console.log(os.platform(), os.homedir());