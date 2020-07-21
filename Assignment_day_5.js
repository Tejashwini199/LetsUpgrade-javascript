/*Write a program which does the following things: 
1. Takes a positive number from the user. 
2. Makes an array of numbers till the number given by user 
3. Use higher order function to filter the odd numbers 
4. Generate and array of the cubes of the filtered numbers */



let arr = prompt("enter your numbers ").split(",")
console.log(arr)



arr1 = arr;
// using high order function

let odd = arr1.filter(x=>x%2!==0);
console.log(`the odd number from the given list ${odd}`)

let oddcube = arr1.filter(x=>x%2!== 0).map(x=>x**3)
console.log(`the  cuberoot from the given list ${oddcube}`)

console.log(odd);
console.log(oddcube);





//Question2:-
/*Create a Class User with properties as name, age & email. 
He can login and logout 
Create another class Moderator which has all the features of User, plus additional functionality to Add coins and remove coins. 
Create one more class Admin which has all the features of Moderator plus additional features like add a Course and delete a particular course for a user.*/


class user{
    constructor(name, age , email){
    this.name = name;
    this.age  =  age ;
    this.email = email;
    this.luCoins = 0;
    this.courses = [];

}

login(){
    console.log(`${this.name} has logged in`);
    return this;
}
logout(){
    console.log(`${this.name} has logged out`);
    return this;
}
addCoins(){
    this.luCoins++;
    console.log(`${this.name} has ${this.luCoins} coins`);
    return this;
}
getDetails(){
    console.log(`Name is ${this.name}, email is ${this.email}`);
    return this;
}

}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }

}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
}


let user1 = new User('Tejshwini',18,'tejshwinijadhav9295@gmail.com')
let user2 = new User('yogi',24,'yogi@gmai.com')
let mod = new Moderator('veena',24,'veena@gmail.com','Moderator');
let admin = new Admin('pankaj',25,'pankaj@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});




//Question 3:-
/*Using promises/async await/fetch get the random todos from the json placeholder api. 
And log all the completed todos to the console.  
API Endpoint :?https://jsonplaceholder.typicode.com/todos*/



async function fetchtodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    console.log(data);
}

fetchtodos();


let obj1 = {
    name:'bhubesh',
    age:18,
    mail : "tejshwinijadhav9295@gmail.com",
}

console.log(obj1);
let x = JSON.stringify(obj1);   // stringify uses to convert the string to the json string
console.log(x)

let x1 = JSON.parse(str);
console.log(x1)
