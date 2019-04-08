module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// function item(){
// name: name, 
// durability: Math.random(0-100) ,
// enhancement: Math.random(0-20)
// }

function succeed(item) {
  if(item.name === undefined){
    return {message: 'item lacks a name'}
  }
  if(item.durability === undefined){
    return {message: 'item lacks a condition'}
  }
  if(item.enhancement === undefined){
    return {message: 'item lacks an enhancment'}
  }
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
