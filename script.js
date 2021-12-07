let detail;
let amount;


// holds all transactions
let transactions = [];
document.body.onload=load();

// get values from inputs
function getInputValues() {
  detail = document.getElementById("detail").value;
  amount = Number(document.getElementById("amount").value);
  
}

// validate inputs
function isValid() {
  if (!detail || !amount) {
    alert("Detail and Amount are both required");
    return false;
  }
  return true;
}

// populate the table
function displayTable() {
  const tableBody = document.getElementById("tableBody");

  tableBody.innerHTML = "";

  for (let i = 0; i < transactions.length; i++) {
    tableBody.innerHTML += `
        <tr>
                <th>${transactions[i].type}</th>
                <th>${transactions[i].detail}</th>
                <th>${transactions[i].amount}</th>
            </tr>
        `;
  }
}


function getResults () {
    const incomeTotal = document.getElementById("incomeTotal");
    const expenseTotal = document.getElementById("expenseTotal");
    const amountTotal = document.getElementById("amountTotal");

    let income = 0;
    let expense = 0;
    let amount = 0;

   for (let i = 0; i < transactions.length; i++) {

    if (transactions[i].type === "Income") {
        income += transactions[i].amount;
    }

    if (transactions[i].type === "Expense") {
        expense += transactions[i].amount;
    }
       
   }

   incomeTotal.innerHTML = income;
   expenseTotal.innerHTML = expense;
   amountTotal.innerHTML = income - expense;
}


function calc(type) {
  getInputValues();

  if (!isValid()) return;

  transactions.push({ type, detail, amount })
  store_data()
  getResults();
  displayTable();
  document.getElementById("detail").value=null;
  Number(document.getElementById("amount").value=null);

}

function reset(){
    transactions.length=0;
    localStorage.clear();
    getResults();
    displayTable();
}

function store_data(){
  // localStorage.setItem("detail",detail);
  // localStorage.setItem("amount",amount);
  
  // let trans = JSON.parse(transactions);
  localStorage.setItem("myArray",JSON.stringify(transactions));
  console.log(localStorage.myArray)
  
  // localStorage.clear();
  // localStorage.removeItem()
}

function load(){
  if (localStorage.getItem("myArray")){
    transactions = JSON.parse(localStorage.getItem("myArray"));
    console.log(transactions)
    getResults();
    displayTable();
  } 
  else{
    transactions=[]
  }

}