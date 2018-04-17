var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}


function deleteFromObjectByKey(object, key){
  console.log(object[key]);
  delete object[key];
  var updatedObj = object;
  return Object.assign({}, updatedObj);
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
