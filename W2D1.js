

function sum(num = []) {
   return num.reduce((accumulator,currentValue)=>accumulator+currentValue);
}

function multiply(num = []){
    return num.reduce((accumulator,currentValue)=>accumulator*currentValue);
}

function reverse(str){
    return str.split("").reduce((init,rev)=>rev+init,"");
}

function filterLongWords(words =[],i){
    return words.filter(element=>element.length>i);
}

// function longestNoSpace(){
    
//     return arguments.split(" ").filter(e=>e!=" ").reduce(maxLength);
// }

// function maxLength(a,b){
//     return (a.length>b.length)?a.length:b.length;
// }
// describe("longestNoSpace", function () {
//     it("takes array of number, and returns the sum of array",
//         function () {
//             assert.equal(7, longestNoSpace("this is the longest array"));
//         });
// });

describe("sum", function () {
    it("takes array of number, and returns the sum of array",
        function () {
            assert.equal(9, sum([2,3,4]));
        });
});
describe("multiply", function () {
    it("takes array of number, and returns the multiplication of array",
        function () {
            assert.equal(24, multiply([2,3,4]));
        });
});
describe("reverse", function () {
    it("takes string, and returns reversed string",
        function () {
            assert.equal("ujnam", reverse("manju"));
        });
});
describe("filterLongWords", function () {
    it("takes array of string, and returns the longest word",
        function () {
            assert.equal("Ramkrishna", filterLongWords(["manju","Ramkrishna","suz"],5));
        });
});
