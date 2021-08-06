const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let sum = 0;
  function getNumber(){
    readline.question("enter a number OR type \"stop\" to exit the program: ", number=>{
            if(number==="stop"){
                console.log(sum);
                readline.close();
            }
            else{
                sum += parseInt(number);
                getNumber(); 
            }
    });
  }

  getNumber();
  