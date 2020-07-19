/*Question no. 1:-
Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and
"fizzbuzz" at multiples of 3 and 5.
*/



for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}




// Question 2:
// Destructure the following object


const student = {
    name : "Helsinki",
    age : 24,
    projects :{
        dicegame : "two player dice game using javascript"

    }
}


console.log(student.name)
console.log(student.age); // 2
console.log(student.projects.dicegame);  // two player dice game using javascript




/* Question 3:
Imagine you are going out to do some grocery shopping.
So you have an array called shoppingList with all the products you want to buy.
 Now that you are inside of the shop, you have a basket with all the products from your list, but you want to
 add a few more.
 Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some
 new products into it.
*/



let shoppingList = ['chocolates' , 'biscuit' , 'cold drinks' , ',cookies' , 'bread']
console.log(shoppingList)

// creating an new array

let shoppingBasket = ['fruits' , 'juice' , 'vegetables' , 'wheat']
// add the new array to the old one
console.log(shoppingList.concat(shoppingBasket))





/* Question 4:
 Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division,
 Square root, Percentage.
*/


function c(val)
{
document.getElementById("d").value=val;
}
function v(val)
{
document.getElementById("d").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
} 





//Question no.5



function multiply()
{
    var commission;
    var totaltradevalue = document.getElementById('totaltradevalue').nodeValue;
    var tradevalue = document.getElementById('tradevalue').nodeValue;

    if(totaltradevalue < 5000)
        commission = tradevalue * .2;
    else if(totaltradevalue < 10000)
        commission = tradevalue * .5;
    else if(totaltradevalue < 20000)  
        commission = tradevalue * .7;
    else
        commission = tradevalue * .10;
        
    document.getElementById('totalcommission').value = commission;    
}






/*
Question 6:
Rewrite the function using '?' or '||'
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them
to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the
input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special
handling for a non-numeric input in this task.
*/ 



var number = parseInt(prompt("Please enter a number from 1 to 100", ""));

if (number < 100) {
    document.write("Your number (" + number + ") is matches requirements", "");
} else if (isNaN(number)) {
    parseInt(prompt("It is not a number. Please enter a number from 1 to 100", ""))
} else {
    parseInt(prompt("Your number (" + number + ") is above 100. Please enter a number from 1 to 100", ""))
}






/*
Question 7:
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything
except 1 and itself.
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.
P.S. The code should work for any n, not be hard-tuned for any fixed value
*/ 


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) 
    continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}






/*Question no.8
Replace Function Expersion with arrow function in the code below:*/


//solution:-
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);