
//Question 1
/*Write a program that will iterate over an array of colors and change the background of the page after 5 seconds. */


<!DOCTYPE html>
<html>
<head>
</head>
<body id="demo">
<h3>Write a program that will iterate over an array of colors and change the background of the page after 5 seconds. </h3>
<script>
var i=0;
var colours=['violet','indigo','blue','green','yellow','orange','red'];
var ele=document.getElementById('demo');
function changeBackground(){
      c=colours[i++];
      ele.style.backgroundColor=`${c}`;
}
setInterval(changeBackground,5000);
</script>
</body>
</html>





//Question 2:-
/*Write a program that will display the multiplication table of a number on the webpage in a proper format. Take the input from the user. 
Input - 5 
Output - 5 x 1 = 5 
         5 x 2 = 10  
         and so on… */


<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h3 style="color:seagreen">Multiplication table of a number</h3>
<div id="demo"></div>
<script>
var i=0;
var text="<table>";
while(1){
var n=+window.prompt("Enter a number for which you want the multiplication table",0);
if(n>=0){
for(i=1;i<=10;i++)
{
text+="<tr><td>"+n+" x "+i+" = "+(n*i)+"</td></tr>";
}
document.getElementById("demo").innerHTML+=text+"</table>";
break;
}
}
</script>
</body>
</html>





//Question 3:-
/*Make a webpage that will ask the name of the user. Then will display a welcome message on the webpage. Also the webpage should also have a clock. 
Using the toggle method of classList add a dark mode feature to the website. */


/*Make a webpage that will ask the name of the user. Then will display a welcome message on the webpage. Also the webpage should also have a clock. 
Using the toggle method of classList add a dark mode feature to the website. */


var name = window.prompt("what is your name ?");
 document.write(" welcome "+ name +", how are you");

 function changecolor()
 {setTimeout(() => {
    document.body.style.background = 'balck'
 },3000);
}

 const dmode = document.getElementById('dark');
 dmode.onclick = function cahngecolor(){
 }

 const time = document.getElementById('time');
 function clock(){
     let date = new Date();
     let time = date.toLocaleTimeString();
     ctime.innerText = time
 }
 clock();
