class SonAccount {
    balance: number;
  
    constructor() {
      this.balance = 0;
    }
  
    oneDeposit(amount: number)  {
      this.balance += amount;
    }
  
    oneWithdraw(amount: number) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Saldo insufficiente.");
      }
    }
  }
  
  class MotherAccount extends SonAccount {
    addInterest() {
      const interest = this.balance * 0.1;
      this.balance -= interest;
    }
  }
  
 
  

  const sonAccount = new SonAccount();
  const motherAccount = new MotherAccount();
  
  
  sonAccount.oneDeposit(500);
  console.log("Saldo del conto del figlio:", sonAccount.balance);
  

  sonAccount.oneWithdraw(450);
  console.log("Saldo del conto del figlio dopo il prelievo:", sonAccount.balance);
  

  motherAccount.oneDeposit(1000);
  console.log("Saldo del conto della madre:", motherAccount.balance);
  
  motherAccount.oneWithdraw(300)
  console.log("Saldo del conto della madre dopo il prelievo: ", motherAccount.balance)
 
  motherAccount.addInterest();
  console.log("Saldo del conto della madre dopo l'aggiunta degli interessi:", motherAccount.balance);
  