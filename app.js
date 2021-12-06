console.log("Hey guys this thing really works")
let alien =  {
    name: 'Ntsako',
    tech:'JS',

    laptop: {
        cpu:'i7',
        ram: 4,
        brand:'Asus'
    }


}

console.log(alien.laptop.brand.length)

// delete  alien.tech
console.log(alien)

// ////////////////////////////////
// for loops
console.log('for loops\n')

for(let key in alien){
    console.log(key, alien[key])
}


console.log('The next loop is displayed here\n')
for(let key in alien.laptop){
    console.log(key, alien.laptop[key])
}

// //////////////////////////////
//functions 
function greet(user){
    return 'hello '+user+"!!!";
}
let user = 'Ntsako'
let str = greet(user);

console.log(str)

//function express

let add = function(num1, num2){
    return num1+num2;
}
let sum = add

let result = sum(7,20);

console.log(result);

//function
function addition(num1,num2,num3=1){
    console.log(num1,num2,num3);
    return num1+num2+num3;
}

result = addition(5,6,);
console.log(result);

// /////////////////////////////////
//arrow functions in javascript
let multiply = (num1,num2) =>  num1*num2;
            
function multi(num1, num2){
    return 'Hello this is a test: '+num1*num2
}

console.log(multi(2,1))
let results = multiply(2,1);
console.log(results);


let laptop = {
    cpu: '19',
    ram:16,
    brand: 'HP',

    greet1: function(yess){
        console.log('Hello World '+yess);
    }
}
laptop.greet1('it works');
