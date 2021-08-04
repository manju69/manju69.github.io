class SavingAccount extends Account {
    constructor(number,interest) {
        super(number);
        this.setInterest(interest);
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }
    addInterest(){
       this._balance += (this._balance * this._interest / 100);
    }

    toString() {
        return "Saving Account " + this._number + ": balance " + this._balance +": Interest "+this._interest;
    }

    endOfMonth() {
        this.addInterest();
        return "Interest added "+this.toString();
    }

}