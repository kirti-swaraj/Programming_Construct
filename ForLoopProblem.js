const prompt = require('prompt-sync')();
// 1. Print powers of a 2 until a given index

let index = Number(prompt('Enter the number: '));
for(i=1;i<=index;i++)
{
    console.log(Math.pow(2,i));
}


// 2. Print the nth harmonic number
let n = Number(prompt('Enter the number: '));
harmonicNo=0;
for(i=1;i<=n;i++)
{
    harmonicNo+=1/i;
}
console.log(n+"th Harmonic number= "+harmonicNo);


// 3. Find if number is prime or not

let m = Number(prompt('Enter the number: '));
let flag=true;
if (m <= 1)
flag=false;
else 
{
    for (let i = 2; i < m; i++) 
    {
        if (m % i == 0)
            flag = false;        
    }
}
if(flag==false)
console.log("It is not a prime number");
if(flag==true)
console.log("It is a prime number");


// 4. Take range of numbers as input and print the prime numbers

var numArray= new Array(5);
var primeNumberArr =[];
for(let i=0;i<numArray.length;i++)
{
    numArray[i]=Number(prompt('Enter the number: '));
}
for(let i=0;i<numArray.length;i++)
{
    let flag = true;
    if (numArray[i] <= 1)
        flag = false;
    else 
    {
        for (let j = 2; j < numArray[i]; j++) 
        {
            if (numArray[i]%j==0)
                flag = false;
        }
    }
    if(flag==true)
    primeNumberArr[i]=numArray[i];
}
console.log("Prime numbers:")
primeNumberArr.forEach(element=>console.log(element));


// 5.Factorial of a number n

let o = Number(prompt('Enter the number n: '));
let fact = 1;
if (o < 0)
    console.log("Enter a positive number");
else 
{
    if (o == 0)
        fact = 1;
    for (let i = 2; i <= o; i++) 
    {
        fact *= i;
    }
    console.log(o + "!=" + fact);
}


// 6. Print prime factors of a number n

let p = Number(prompt('Enter the number: '));
// Print the number of 2s that divide n
while (p % 2 == 0) 
{
    console.log("2");
    p = p / 2;
}  
// n must be odd at this point. So we can skip  
// one element (Note i = i+2)  
for (let i = 3; i * i <= p; i = i + 2) 
{
    // While i divides n, print i and divide n  
    while (p % i == 0) 
    {
        console.log(i);
        p = p / i;
    }
}
// This condition is to handle the case when after division by 2 n  
// is a prime number greater than 2  
if (p > 2)
    console.log(p);  