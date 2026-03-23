/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000*/
    const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
let credit=transactions.filter(trans=>trans.type=="credit")
console.log(credit)
let trans=transactions.map(tra=>tra.amount)
console.log(trans)
let finalbalance=transactions.reduce((acc,tran)=>acc+tran.amount,0)
console.log(finalbalance)
let findfirst=transactions.find(tran=>tran.type=="debit")
console.log(findfirst)
let findindex=transactions.findIndex(tran=>tran.amount==10000)
console.log(findindex)
