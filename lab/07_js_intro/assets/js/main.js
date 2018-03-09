// CONSOLE
console.log("hello \n world");
console.log('');

//STRINGS
console.log('Strings -');
console.log('I wan\'t a smoothie!!');
console.log(':P' + ':0');

console.log('');

//NUMBERS
console.log('Numbers -');
console.log(8);
console.log(8+8);
console.log(8-8);
console.log(8*8);
console.log(8/8);
console.log(8%3);

console.log('');

//STRING & Numbers
console.log('Strings & Numbers -');

console.log('8*8');
console.log('cheese' + 8);
console.log('I am' + (8 * 8) + 'yrs old');
console.log('8 + 8:', 8 * 8);

console.log('');

//BOOLEANS
console.log('Booleans -');
console.log(true, false);
console.log(3 < 4);
console.log(2 < 2);
console.log('2 <= 2', 2 <= 2);
console.log('2 > 1 && 2 < 12;', 2 > 1 && 2 < 12); // 'AND' operator
console.log ('5 > 12 || 6 <= 18:', 5 > 12 || 6 <= 18); // 'OR' operator

console.log('');

//THREE BASIC TYPES
console.log('Basic Types-');
console.log(typeof 'hello', typeof (8 - 7), typeof 2 > 1);

console.log('');

//VARIABLES
console.log('Variables -');

var five = 5;
console.log('five:', five);
var ten = 10;
console.log('five + ten', five + ten);
console.log('five * ten', five * ten);

console.log('');

//ALTERING Variables
console.log('Altering Variables -');

var myStudentDebt = 800;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt:',myStudentDebt);
myStudentDebt -=100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt++; //+1
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt--; // -1
console.log('myStudentDebt:', myStudentDebt);

console.log('');
//ARRAYS
console.log('Arrays -')

var myLuckyNumbers = [3, 7, 'eight', (12 + 2), 21]; //[val,val, etc]
  console.log('myLuckyNumbers:', myLuckyNumbers);
  console.log(myLuckyNumbers[1]);

  console.log('');

//ARRRAYS
console.log('Object -');

var me = {
    name: 'Bryant',
    age: 27,
    nativeNewYorker: false
};
console.log('me:',me);
console.log("me['name']",me['name']);
console.log('me.name:',me.name)

console.log('');

//FUNCTIONS
console.log('Functions -');

var sayHi = function(string){
  console.log('hi!')

};
console.log('sayHi():');
sayHi();

var saySomeMessage = function(message) {
  console.log(message);

}
console.log("saySomeMessage('hello'):");
saySomeMessage('hello');
saySomeMessage('goodbye');

var addNumbers = function(num1, num2) {
  return num1 + num2
}
