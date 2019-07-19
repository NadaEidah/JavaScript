console.log('Here is : ', 'Reduce & Filter') \

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array
Ex: avgAge(persons) => 41.2

*/
function avgAge(array){

var avg=array.reduce((x,y)=>(x+y.age),0);
var average =avg/array.length;
 return average
 }
 var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
avgAge(persons)

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name
Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(array){
	var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
]; 
	  var long= array.reduce(function(x,y){
      if(x.length<(y.name.first+y.name.last).length){
        return y.name.first+' '+y.name.last;}
        return x;
  },'');

  return long;
}
longestName(persons);

// var long= array.reduce(function(x,y){
//       if(x.length<(y.name.first+y.name.last).length){
//         return y.name.first+' '+y.name.last;}
//         return x;
//   },'');

//   return long;
// }
/*
3
Create a function called maxNumber
that accept an array
and return max number
Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(array){
	
	var maxNumb = array.reduce((acc,currnt)=> {
		if (acc>currnt){
			return acc ;
		}
		return currnt
	} )
	return maxNumb;
}
var arraynum=[1,2,4,9]
maxNumber(arraynum)
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string
Ex: repeatChar("hello world",w) => 1
*/

function repeatChar(string,char){
	var count=0;
	var str1= string.split("");
	var newChar = str1.reduce((acc,currnt)=>{
		if (currnt==char){
		count=count+1;
		}
	},0 );
	return count;
}
console.log(repeatChar("whello world","w"))
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them
Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(num1,num2){
	var arr=[2,5]
	var newNumb = arr.reduce((acc,currnt)=>{
		if (currnt<=num2){
			currnt+1
		}
		for (var i =0;i<arr.length; i++)
	},-1) ;return arr.push()
}

usAndNumberBeetweenUs(2,5)



//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only
Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(array){
	newarr=array.filter(a=>a%2==0);
	
	return newarr;
}
evenOnly([1,8,6,4]);
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4
Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(array){
	newarr=array.filter(a=>a%4==0)			
	 							
	return newarr;
}
multiFour([1,8,6,4]);

/*
8
**this question not that easy mybe you will need to 
use two function inside each other
Create a function called containChar
that accept an array of string
and return an array of these string that contain this char
Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar (array,char){
	newarr=array.filter(a=> a.indexOf(char)==char)
		return newarr;
	
}
containChar(["hello","world"],"w")



/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(array){
	newArr=array.filter(a=>a.length %2==1)
		return newArr;
}
evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"])

// && a.length-1 %2==0 
// if (a.length %2==1 ){
// 			return a;
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number
Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(array,num){
	
	newArr=array.filter(a=>a.age>num)
		return newArr;
	
}
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
olderThan(persons,56)
// a.persons.age>num

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(array,num){
		newArr=array.filter(a=>a.length<num)
				return newArr;
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
shorterThan(strings,5)

