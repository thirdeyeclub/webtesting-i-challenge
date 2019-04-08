module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// function item(){
// name, 
// durability: Math.random(0-100) ,
// enhancement: Math.random(0-20)
// }

function succeed(item) {
  return { ...item };
}

function fail(item) {  
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
