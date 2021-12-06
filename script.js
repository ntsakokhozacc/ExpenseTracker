let detail;
let amount;

function getInputValues(){
    detail=document.getElementById('detail').value;
    amount=Number(document.getElementById('amount').value);

}

function isValid(){
    if(!detail || !amount){
        alert("Detail and amount are both required");
        return false;
    }   
    return true;
}

function add_income(){
    console.log("income")
}

function calcExpense(){
    console.log("expense");
}

function calcExpense(){
    getInputValues();
    if(!isValid()){
        return false;
    }
    console.log(detail,amount);
}
