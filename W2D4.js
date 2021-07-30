
    const filterableObj = {
        filter(banned) {
          const filtered = this.value.split(" ");
          return filtered.filter(elem => !(banned.includes(elem))).join(" ");
        }
      };


describe("filter", function () {
    it("remove banned words from the string , and returns the string without banned words",
        function () { 
            let s = {
                value: "remove bad from string example"
              }
              s.__proto__ = filterableObj;
              console.log(s.filter(['bad']));
            assert.equal("remove from string example", s.filter(['bad']));
        });
});

const sortableObj = {
    bubbleSort() { 
    const sortingArray = this.array;
    for(let i= 0; i<sortingArray.length-1;i++){
        for(let j = i+1; j<sortingArray.length; j++){
         if(sortingArray[i]>sortingArray[j]){
         const temp  =  sortingArray[i];
         sortingArray[i] = sortingArray[j];
         sortingArray[j] = temp;
         } 
      }
    }
   return sortingArray;
    }
  };

  describe("bubbleSort", function () {
    it("sort array in ascending order , and returns the sorted array",
        function () { 
            let arrayList = {
                array:[6,4,0, 3,-2,1]
            };
            arrayList.__proto__ = sortableObj;
            console.log(arrayList.bubbleSort());
            assert.equal(true, isArrayEqual([-2,0, 1, 3, 4, 6], arrayList.bubbleSort()));
        });
});

function isArrayEqual(arr1,arr2) {
    if(arr1.length!=arr2.length)
    return false;
    let status = true;
    for(let i = 0; i<arr1.length; i++){
        if(arr1[i]!==arr2[i]){
            status = false;
            break;
        }    
    }
    return status;
}

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach
var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    console.log(this.name+" is now teaching "+subject);
    return this.name+" is now teaching "+subject;
}
    

describe("Inheritance test", function () {
    it("receives a string called subject, and returns the string with teacher's name and subject",
        function () { 
            var him = new Teacher();
            him.initialize("Adam", 45);
            him.teach("Inheritance");
            assert.equal("Adam is now teaching Inheritance", him.teach("Inheritance"));
        });
});