// //one

var username;
username = "Abdul Rasheed"

alert(username);

var message;
message = "Hello World"

alert(message);


var name = "rasheed";
var rollno = '34012';
var Course = "Web & Mobile Developer";

alert(name);
alert(rollno);
alert(Course);


alert("Name" + " " + name +  " " + "Rollno" + " " + rollno)

alert("PIZZA \n PIZZ \n PIZ \n PI \n P")


// var job = "Developer";
// var location = "USA";
// var married = "Married";
// var kids = 3;

// alert("You will be a " + job + " in " + location + " and " + married + " with " + kids + " kids.");


var email ;
email = "rasheed@gmail.com";

alert("My Email Address Is" + " " + email)



var book ;
book ='"Asmarter way to learn JavaScript."'


alert("I am Trying to learn from Book" + " " + book)


var name = "Abdul Raasheed";
var age = 30;
var academy = "SMIT";
var course = "Web Development";
 
document.write("My name is " + " " + name + " " + "I am " + " " + age + " " + "year old" + " " + "I am studying in " + " " + academy + " " + "My course is " + " " + course + " ");


// Two


var age = 30;
alert(`I am ${age} Year Old`);

var visit = 30;
alert(`Your Have Vist This Site ${visit} Times`);


var birthYear = 1991;

document.write(`My Birth Year is ${birthYear} <br>`);


var name = "Jhon";
var product = "5 T-shirt";
var store = "XYZ Clothing store"

document.write(`${name} Orderd ${product} on ${store}`);



// //Three





// //Four

var num = 13;
var num1 = 9;
var add = num + num1;


alert(`Sum of ${num} and ${num1} is ${add} `)


alert(` Result Of Subtraction ${num1} from ${num} is ${num - num1}`)

alert(` Result Of Multiplication, ${num1} from ${num} is ${num * num1}`)

alert(` Result Of Division, ${num1} from ${num} is ${num / num1}`)






document.write(`Sum of ${num} and ${num1} is ${add} <br>`)


document.write(` Result Of Subtraction ${num1} from ${num} is ${num - num1} <br>`)

document.write(` Result Of Multiplication, ${num1} from ${num} is ${num * num1} <br>`)

document.write(` Result Of Division, ${num1} from ${num} is ${num / num1} <br>`)

var num5 ;
var num6 ;

document.write(` Value Aftre Variable decleration is Undefine <br>`)

document.write(`Initial value: ${num5 = 3}. <br>`)

document.write(`Value after increment is:${++num5 }. <br>`)

document.write(`Value after addition is:${num6 = num5 + 7}. <br>`)

document.write(`Value after decrement is:${--num6   }. <br>`)

document.write(`The remainder is :${num6 - 9   }. <br>`)


var cost = 5;

document.write(`Total Cost To Buy ${cost} Ticket to a Movie is ${cost * 600} PKR `)


var tables = 4;
var addes = 1
document.write(`<h1>Multiplication Table Of 4</h2> <br> <h3> ${tables} x ${addes} = ${tables} <br>
    ${tables} x ${++addes} = ${tables * addes } <br>
    ${tables} x ${++addes} = ${tables * addes } <br>
    ${tables} x ${++addes} = ${tables * addes } <br>
    ${tables} x ${++addes} = ${tables * addes } <br>
    ${tables} x ${++addes} = ${tables * addes } <br>
    ${tables} x ${++addes} = ${tables * addes } <br>
    ${tables} x ${++addes} = ${tables * addes } <br>
    ${tables} x ${++addes} = ${tables * addes } <br>
    ${tables} x ${++addes} = ${tables * addes } <br> </h3>
    
    
    `)



var item1 = 560;
var item2 = 200;
var shiping = 150;

document.write(`Price of Item 1 is${item1} <br> Quantity of item 1 is 2 <br> 
    Price of Item 2 is ${item2} <br>
    Quantity of item 2 is 5 <br>
    Shipping Charges is ${shiping} <br>
    Total Cost of Your Order is ${item1 * 2 + item2 * 5 + shiping} <br>`)

var totalmark = 1200;
var optain = 900;


document.write(`Total MARKES ${totalmark} <br>
    Markets Obtained ${optain}<br>
    Percentage ${optain / totalmark   * 100}% <br>`)

var doller = 104;
var riyal = 28;
var currency

document.write(`Total Currency in PKR ${doller * 10 + riyal * 25 }`)

var mul = 5;
var mal = mul * 10;
var mal2 = mal / 2
var mal3 = mal2 / 1

 alert(`${mal3  }`)


var birthday = 10;

var byuaer = 1990;


document.write(`Age Clculator <br> “They are either ${birthday} or ${byuaer}
years old”.`)



var a = 10

document.write(`The value is ++a is ${ ++a} <br> Now value is ${a} <br>
    The value is ++a is ${ ++a} <br> Now value is ${a} <br>
    The value is --a is ${ --a} <br> Now value is ${a} <br>
    The value is a-- is ${ a--} <br> Now value is ${a} <br>
    
    
    `)




// Percentage 


    var pro1 = prompt("Enter product 1");
var pro1price = +prompt('Enter Price prodcut 1');

var pro2 = prompt("Enter product 2");
var pro2price = +prompt('Enter Price prodcut 2');

var pro3 = prompt("Enter product 3");
var pro3price = +prompt('Enter Price prodcut 3');


var pro4 = prompt("Enter product 4");
var pro4price = +prompt('Enter Price prodcut 4');

var pro5 = prompt("Enter product 5");
var pro5price = +prompt('Enter Price prodcut 5');

var total = pro1price + pro2price + pro3price + pro4price + pro5price;

var per;



if(total >= 300){
    per = (10 * total) / 100;
}

else if (total > 400){
    per = (20 * total) / 100;
}

else if (total > 600){
    per = (50 * total) / 100;
}








document.write(
`
<table border="" width="90%">
<tr>
<th >Product 1</th> 
<th >Price</th>
<th >Product 2</th> 
<th >Price</th>
<th >Product 3</th>
<th >Price</th>
<th >Product 4</th>
<th >Price</th>
<th >Product 5</th>
<th >Price</th>
<th >total</th>
<th >Percentage</th>
<th >pay</th>
</tr>
<tr>
<td> ${pro1}</td>
<td> ${pro1price}</td>
<td> ${pro2}</td>
<td> ${pro2price}</td>
<td> ${pro3}</td>
<td> ${pro3price}</td>
<td> ${pro4}</td>
<td> ${pro4price}</td>
<td> ${pro5}</td>
<td> ${pro5price}</td>
<td> ${total}</td>
<td>${per}</td>
<td>${total -  per}</td>


</tr>
</table>


`



)





