let detail;
let amount;

//holds all transactions
let transactions = [];

//get values from inputs
function getInputValues(){
    detail=document.getElementById('detail').value;
    amount=Number(document.getElementById('amount').value);
}

//validates the inputs
function isValid(){
    if(!detail || !amount){
        alert("Detail and amount are both required");
        return false;
    }   
    return true;
}

//populate the table
function displayTable(){
    const tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    for(let i=0; i<transactions.length; i++){
        tableBody.innerHTML += `
        <tr>
                <th>${transactions[i].type}</th>
                <th>${transactions[i].detail}</th>
                <th>${transactions[i].amount}</th>
            </tr>
        `;
    }
}

function getResults(){
    const incomeTotal = document.getElementById("incomeTotal");
    const expenseTotal = document.getElementById("expenseTotal");
    const amountTotal =  document.getElementById("amountTotal");

    let income = 0;
    let expense = 0
    let amount =0;

    if (transactions[i].type ==="Income"){
        income=income+transactions[i].amount;
    }
    if(transactions[i].type === "Expense"){
        expense=expense+transactions[i].amount;
    } 

    incomeTotal.innerHTML = income;
    expenseTotal.innerHTML = expense;
    amountTotal.innerHTML = income - expense;
}

function calc(type){
    getInputValues();
    
    if(!isValid()) return;

    transactions.push({type,detail,amount})
    getResults();
    displayTable();
}



