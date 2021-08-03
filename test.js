
let account = new Account("12345");
let savingAccount = new SavingAccount("2345",5);
savingAccount.addInterest();
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



describe("toString", function () {
    it("return string that contain balance and account number information",
        function () { 
            assert.equal("Account 12345: balance 2450.7: Interest 5", savingAccount.toString());
            assert.throws()
        });
});

describe("endOfMonth", function () {
    it("returns and empty string",
        function () { 
            assert.equal("Interest added SavingsAccount 2: balance: 2450.7 interest: 5", savingAccount.endOfMonth());
            //assert.throws()
        });
});