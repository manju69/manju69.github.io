
let account = new Account("12345");
let savingAccount = new SavingAccount("62471",5);
let checkingAccount = new CheckingAccount("8191535", 300);
let bank = new Bank();
account.deposit(2334);

describe("getNumber", function () {
    it("returns the account number",
        function () { 
            assert.equal("12345", account.getNumber());
            //assert.throws()
        });
});

describe("getBalance", function () {
    it("returns the balance",
        function () { 
            assert.equal("2334", account.getBalance());
            //assert.throws()
        });
});

describe("toString", function () {
    it("return string that contain balance and account number information",
        function () { 
            assert.equal("Account 12345: balance 2334", account.toString());
            //assert.throws()
        });
});

describe("endOfMonth", function () {
    it("returns and empty string",
        function () { 
            assert.equal("", account.endOfMonth());
            //assert.throws()
        });
});

savingAccount.deposit(90000);
savingAccount.setInterest(10);
savingAccount.addInterest();

describe ("savingsgetInterest", function(){
    it("returns the interest of the savings Account", function(){
        assert.equal(savingAccount.getInterest(),"10");
    }
    )
});

describe ("SavingAccount_getBalance", function(){
    it("returns the amount on the savings account plus interest", function(){
        assert.equal(savingAccount.getBalance(),99000);
    }
    )
});

describe("SavingAccount_toString", function () {
    it("return string that contain balance and account number information",
        function () { 
            assert.equal("Saving Account 62471: balance 99000: Interest 10", savingAccount.toString());
            //assert.throws()
        });
});

checkingAccount.deposit(10000);
checkingAccount.withdraw(10300);

describe ("Checking_getOverdraft", function(){
    it("returns the overdraft limit of the account", function(){
        assert.equal(checkingAccount.getOverdraft(),"300");
    }
    )
});


describe ("addAccount", function(){
    it("Adds an account in the bank array", function(){
        assert.equal(bank.addAccount(),1);
    }
    )
});

describe ("addAccount", function(){
    it("Adds an account", function(){
        assert.equal(bank.addAccount(),2);
    }
    )
});

describe ("addsavingAccount", function(){
    it("Adds an account", function(){
        assert.equal(bank.addSavingsAccount(12),3);
    }
    )
});

describe ("addcheckingAccount", function(){
    it("Adds an account", function(){
        assert.equal(bank.addCheckingAccount(200),4);
    }
    )
});


describe ("closeAccount", function(){
    it("closes an account", function(){
        assert.equal(bank.closeAccount(1),"account closed");
    }
    )
});

describe ("closeAccount", function(){
    it("closes an account", function(){
        assert.equal(bank.closeAccount(4),"account not found");
    }
    )
});



let resultstr="Account 1: balance 0the savings Account 3 :balance 0 interest 12checking Account: 4 :balance 0 :overdraft limit 200";

describe ("AccountReport", function(){
    it("gives an account report", function(){
        assert.equal(bank.accountReport(),resultstr);
    }
    )
});

let returnString = "Account 1: balance 0the interest added the savings Account 3 :balance 0 interest 12Warning, low balance checking Account: 4:balance 0 :overdraft limit 200"
describe("endOfMonth", function(){
    it(" gives status of accounts at the end of the month",function(){
        let myBankarray=myBank.getAccounts();
for (let i=0;i<myBankarray.length;i++){
    let acc=myBank.getAccount(myBankarray[i].getNumber())
    acc.deposit(10000);
    console.log(acc);
}
        assert.equal(myBank.endOfMonth(),returnString)
    })
})

