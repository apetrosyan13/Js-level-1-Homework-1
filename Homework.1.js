Ex.1.
function x (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <=num; j++) {
      if (i === j || i + j === num + 1 ) {
        result += " * ";
      } else {
        result += " . ";
      }
    }
    console.log(result)
    result = "";
  }
}
x(10);
ex.2.
let result = {};
let array = [1,1,2,2,3];
let array1 = [4, 4];
let array2 = [1, 2, 3];
let l = array.length;
function getFrequency(ar) {
  let firstElem = ar[0];
  let elemCount = 0;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] === firstElem) {
    elemCount += 1;
  }
}
  switch (result[firstElem]) {
    case undefined:
      result[firstElem] = elemCount / l;
      break;
  }
     
  for (let j = 0; j < ar.length ; j++) {
    if (ar[j] === firstElem) {
      ar.splice(ar[j - 1],1);
    }
  }
  if (ar.length === 0) {
    return result;
  } else {
    return getFrequency(ar)
  }
}
console.log(getFrequency(array));
Ex.3.
let array1 = [1, "10", "hi", 2, 3];
let array2 = [1, 4, "i am a string", 456];
function countNumAndStr (arr) {
  let result = {};
  let num = 0;
  let str = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      num += 1;
    } else if (typeof arr[i] === "string") {
      str += 1;
    }
  }
  result.Numbers = num;
  result.Strings = str;
  return result;
}
console.log(countNumAndStr(array1));
Ex.4.
let str1 = "A revolution without dansing is a revolution not worth heaving.";
let str2 = "Which would be worse - to live as a monster , or to die as a good man.";
function getBiggiestWord (str) {
  let result;
  let wordQuantity = 0;
let arr = str.split(",");
  str = arr.join("");
  arr = str.split("-");
  str = arr.join("");
  arr = str.split(".");
  str = arr.join("");
  arr = str.split(" ");
 for (let i = 0; i < arr.length; i++) {
   if (arr[i].length >= wordQuantity) {
     wordQuantity = arr[i].length;
     result = arr[i];
   }
 }
  return result;
}
console.log(getBiggiestWord(str1));
Ex.5.
let str1 = "there are no two words in the english language more harmful than 'good job'.";
let str2 = "parting your soup is not a miracle, bruce.";
let arr = [];
let array = [];
let s = "";

function getLongestInt (str) {
  for(let j = 0; j < str.length; j++) {
    array.push(str[j]);
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === " ") {
      s += " ";
      continue;
    }
    if (s.includes(array[i])) {
      arr.push(s);
      array.splice(0, s.indexOf(array[i]) + 1);
      s = "";
      i = 0;
     }
    s += array[i];
   }
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    newArr.push(arr[x]);
  }
  for (let k = 0; k < newArr.length; k++) {
    let newStr = newArr[k].split(" ");
    newArr[k] = newStr.join("");
  }
  console.log(newArr);
  let maxL = 0;
  let result;
  for (j = 0; j < newArr.length; j++) {
    if (newArr[j].length >= maxL) {
      result = arr[j];
      maxL = newArr[j].length;
    }
  }
  console.log(arr);
  
  return result;
}
console.log(getLongestInt(str2));
Ex.6.
let str1 = "dfgjkloyp";
let str2 = "aweyoolp";
function reorder(str) {
  let poch = str.length % 3;
  let result = `${str[1]}`;
  for (let i = 2; i <= str.length; i++) {
    if (i > str.length - poch) {
      result += str[i - 1];
      result += str[i];
      break;
    } else {
 if (i % 3 !== 0) {
   result += str[i];
 } else {
   result += str[i - 3];
 }
    }
  }
  return result;
}
console.log(reorder(str2));
Ex.7.
let arr1 = [[2, -9, -3, 0], [1, 2], [-4, -11, 0]];
let arr2 = [[3, 4], [11, 0], [5, 6, 7, 8]];
let arr3 = [1, 2, 3];
function getBiggiestNegNum (arr) {
  for (let x = 0; x < arr.length; x++) {
    if (!Array.isArray(arr[x])) {
      return "Invalid arguments";
    } 
  }
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    let maxNegNum = -Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < 0 && arr[i][j] > maxNegNum) {
        maxNegNum = arr[i][j];
      }
    }
    if (maxNegNum !== -Infinity) {
      result *= maxNegNum;
    }
  } if (result === 1) {
    return "No negatives"
  } 
  else {
  return result;
  }
}
console.log(getBiggiestNegNum(arr3));
Ex.8.
let arr1 = [5, 9, 23, 0, -2, -1];
let arr2 = [4];
let arr3 = [19, 6];
let result = [];
let rec = arr1.length - 2;
 function getSubsets (arr) {
   if (arr.length <= 3) {
     return arr;
   } else {
     myFunc(arr)
function myFunc (arr) {
  let a = 0;
  let b = 1;
  let c = 2;
  let subArr = [];
  for (let j = 0; j < arr.length - 2; j++) {
  for (let i = c; i < arr.length; i++) {
    subArr.push(arr[a],arr[b],arr[i]);
    result.push(subArr);
    subArr = [];
   }
    b++;
    c++;
  } 
  rec--;
  if (rec > 0) {
    arr.shift();
    return myFunc(arr);
  }
  }
 }
   return result;
 }
console.log(getSubsets(arr1));