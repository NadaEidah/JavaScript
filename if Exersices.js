/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/



 function integers(num1,num2) {
 	if (num1>num2){
 		return num1 
 	}
 	else {
 		return num2 
 	}	
 }
  console.log(integers(5,8))

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

function sign(num1){
	if (num1<0){
		return "-";
	}
	else {
		return "+";
	}
}	
	console.log(sign(-10))
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
 /******* End Your Code ********* */
function x(num1,num2,num3){
	if (num1>num2 && num1> num3){
		return num1 ; return num2; return num3;
	}
	else if (num2>num3 && num2> num1){
		return num2 ; return num3; return num1;
	}
	else if (num3>num2 && num3> num1){
		return num3 ; return num2; return num1;
	}
	}
	console.log(x(2,5,7))
/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

	function largest(num1,num2,num3,num4,num5){
	if (num1>num2 && num1>num3 && num1>num4 && num1>num5){
		return num1;
	}
	else {
		return "yes";
	}
}	
	console.log(largest(10,5,7,6,8))
  
 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, 
 otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  
 /******* End Your Code ********* */
 function greater(num1,num2){
 	if (num1>num2){
 		return"Hello World";
 	}
 	else {
 		return"Goodbye";
 	}
 }
 console.log(greater(5,20))
/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/
  
 /******* End Your Code ********* */






