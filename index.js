function myEach(collection, alert) {
  let arr = Object.values(collection);
  for (let ele of arr) {
    alert(ele);
  }
  return collection;
}

function myMap(collection, callback) {
  let arr = Object.values(collection);
  let newArr = [];
  for (let ele of arr) {
    newArr.push(callback(ele));
  }
  return newArr;
}

function myReduce(collection, callback, ...acc) {
  let arr = Object.values(collection);
  let newAcc;
  let i;
  if (acc.length > 0) {
    newAcc = acc[0];
    i = 0;
  } else {
    newAcc = arr[0];
    i = 1;
  }
  for (i; i < arr.length; i++) {
    newAcc = callback(newAcc, arr[i], collection);
  }
  return newAcc;
}

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callback(element)) {
      return element;
    }
  }
}

function myFilter(arr, multiply) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (multiply(element)) {
      array.push(element);
    }
  }
  return array;
}

function mySize(collection) {
  let arr = Object.values(collection);

  return arr.length;
}

function myFirst(collection, nElements) {
  let newArr = collection.slice();

  if (!nElements) {
    return newArr[0];
  }
  return newArr.slice(0, nElements);
}

function myLast(collection, nElements) {
  let newArr = collection.slice();

  if (!nElements) {
    return newArr[newArr.length - 1];
  }

  return newArr.slice(-nElements);
}

function myKeys(obj) {
  let objKeys = [];

  for (let key in obj) {
    objKeys.push(key);
  }

  return objKeys;
}

function myValues(obj) {
  let objValues = [];

  for (let value in obj) {
    objValues.push(obj[value]);
  }

  return objValues;
}
