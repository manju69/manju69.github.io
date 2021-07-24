function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  //My function test
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, maxOfThree(20, 10,30)));
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
  console.log("Expected output of sum([20,10]) is 30  " + myFunctionTest(30, sum([20, 10])));
  console.log("Expected output of multiply([20,10]) is 200  " + myFunctionTest(200, multiply([20, 10])));
  console.log("Expected output of reverse('manju') is 'ujnam'  " + myFunctionTest('ujnam', reverse('manju')));
  console.log("Expected output of findLongestWord(['this','is','the','longest','word']) is 7  " + myFunctionTest(7, findLongestWord(['this','is','the','longest','word'])));
  console.log("Expected output of filterLongWords(['this','is','the','longest','word']) is 'longest'  " + myFunctionTest('longest', filterLongWords(['this','is','the','longest','word'])));
 
  // assert test
  console.assert(max(20, 10)===20, 'Expected output of max(20,10) is 20');
  console.assert(maxOfThree(20, 10,30)===30, "Expected output of maxOfThree(20,10,30) is 30");
  console.assert(isVowel('a')===true, "Expected output of isVowel('a') is true  ");
  console.assert(sum([20, 10]===30, "Expected output of sum([20,10]) is 30  " );
  console.assert(multiply([20, 10]===200, "Expected output of multiply([20,10]) is 200  ");
  console.assert(reverse('manju')==='ujnam', "Expected output of reverse('manju') is 'ujnam'");
  console.assert(findLongestWord(['this','is','the','longest','word'])===7, "Expected output of max(20,10) is 20");
  console.assert(filterLongWords(['this','is','the','longest','word'])==='longest', "Expected output of max(20,10) is 20");
 
function max (x, y){
    var largest;
    if(x>y){
        largest = x;
    }else largest = y;
    return largest;
};
function maxOfThree(x,y,z){
   if(x>y){
       if(x>z){
           return x;
       }else{
           return z;}
    }else if(y>z){
        return y;
   } else {
       return z;} 
};

function isVowel(character){
    let vowel = ['a','e','i','o','u'];
    for(let i = 0; i<vowel.length; i++){
        if (character==vowel[i])
        return true;
    }
    return false;
};

 function sum(num = []){
     let sum = 0;
    for(let i= 0; i<num.length; i++){
        sum+=num[i];
    }
    return sum;
 }

 function multiply(num = []){
     let result = 1;
     for(let i= 0; i<num.length;i++){
         result *= num[i];
     }
     return result;
 }

 function reverse(stringVal){
     let strArr = [stringVal.length];
     let result = "";  for(let i = 0; i<stringVal.length;i++){
         strArr[i]=stringVal.charAt(stringVal.length-1-i);
       
     }
     return strArr.join("");
 }

 function findLongestWord(words = []){
     let len = words[0].length;
     for(let i =1; i<words.length; i++){
        if(len < words[i].length)
            len = words[i].length;
     }
     return len;
 }

 function filterLongWords(words = []){
    let len = words[0].length;
    let word ="";
    for(let i =1; i<words.length; i++){
       if(len < words[i].length)
           len = words[i].length;
    }
    for(let j =1; j<words.length; j++){
       if(len == words[j].length)
        word = words[j];
    }
    return word;
 }

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 3;
});


const c = a.filter(function(elem, i, array){
  return elem === 3;});

const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
function myArrayCompare(expected, found) {
    if(expected.length!=found.length)
    return false;
    let status = true;
    for(let i = 0; i<expected.length; i++){
        if(expected[i]!==found[i]){
            status = false;
            break;
        }    
    }
    return status;
}
function myArrayTest(expected, found){
    const status = myArrayCompare(expected, found);
    if (status) {
        return "TEST SUCCEEDED";
      } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
      }
}
//assert test  
console.assert(myArrayCompare([3,9,15,9,9],b), 'Expected output of b is [3,9,15,9,9]');
console.assert(myArrayCompare([3,3,3],c), 'Expected output of c is [3,3,3]');
console.assert(d===135, "Expected output of d is 135 ");
//my function test
  console.log("Expected output of b is [3,9,15,9,9]  " + myArrayTest([3,9,15,9,9], b));
  console.log("Expected output of c is [3,3,3]  " + myArrayTest([3,3,3], c));
  console.log("Expected output of d is 135  " + myFunctionTest(135, d));
