function crateBankAccount(initialBalance){
    let  balance=initialBalance;
 return{
      deposit(amount){
     balance=balance+amount;
      return balance;
    },
      getBalance(){
        return balance ;
    }
 };
 

}

const finalResult=crateBankAccount(1000);
console.log(finalResult.deposit(50))
console.log(finalResult.deposit(100))
console.log(finalResult.getBalance());