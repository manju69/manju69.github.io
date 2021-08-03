class Bank{
    
    static nextNumber = 1;
    constructor(){
        this._accounts = [];
    }

    getAccounts(){
        return this._accounts;
    }

    addAccount(){
        let account = new Account(nextNumber++);
        this._accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest){
        let savingAccount = new SavingAccount(nextNumber++, interest);
        this.accounts.push(savingAccount);
        return savingAccount.getNumber();      
    }

    addCheckingAccount(overdraft){
        let checkingAccount = new CheckingAccount(nextNumber++,overdraft);
        this.accounts.push(checkingAccount)
        return checkingAccount.getNumber();
    }

    closeAccount(number){
        if(this._accounts[number]){
            this._accounts.splice(number,1);
            return "account closed";
        }
        else
         return "account not founr;"
        

    }

    accountReport(){
        let output="";
        for(let i=0;i<this._accounts.length;i++){
            output += this._accounts[i].join(" \n");
        }
        return output;
    }

    endOfMonth(){
        for (let i=0;i<this._accounts.length;i++){
            return this._accounts[i].endOfMonth();
        }
    }
}