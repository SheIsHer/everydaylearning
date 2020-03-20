function deepClone(target) {
  let result;
  if(typeof target === 'object') {
    if(Array.isArray(target)) {
      result = [];
      for (let i in target) {
        result.push(deepClone(target[i]))
      }
    } else if(target === null) {
      result = null;
    } else if(target.constructor === RegExp) {
      result = target;
    } else {
      result = {};
      for (let i in target) {
        result[i] = deepClone(target[i]);
      }
    }
  } else {
    result = target;
  }
  return result;
}

let obj1 = {
  a: {
      c: /a/,
      d: undefined,
      b: null
  },
  b: function () {
      console.log(this.a)
  },
  c: [
      {
          a: 'c',
          b: /b/,
          c: undefined
      },
      'a',
      3
  ]
}
let obj2 = deepClone(obj1);
  console.log(obj2);