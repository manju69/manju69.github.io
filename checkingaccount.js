class CheckingAccount extends Account{
    constructor (number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft(){
        return this._overdraft;
    }

    setOverdraft(){
        this._overdraft = overdraft;
    }
    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraft) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;

    }

    toString(){
        return "Checking Account " + this._number + ": balance " + this._balance +": Interest "+this._interest+ ": overdraft" + this._overdraft;
    }

    endOfMonth() {
        if(this._balance<0){
            return "Warning, low balance " + this.toString();
        }
        else{
            return this.toString();
        }
    }
}
