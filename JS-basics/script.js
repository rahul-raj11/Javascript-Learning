/***********************
 * Variable and datatypes
 */
/*var firstName = "Rahul";
console.log(firstName);
//var lastName = "Raj";
var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = "Teacher";
console.log(job);*/

/***********************
 * Variable mutation and
 * type coercion
 */
/*var firstName = "Rahul";
var age = 28;
console.log(firstName + " " + age);

var job, isMarried;
job = "Teacher";
isMarried = false;
console.log(
    firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(
    firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);*/

/*********************
 * Basic Operator
 */

/*var now, yearRahul, yearMark;
now = 2020
ageRahul = 28;
ageMark = 34;
// Math operator
yearRahul = now - ageRahul;
yearMark = now - ageMark;

console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operator
var markOlder = ageMark < ageRahul;
console.log(markOlder);

// typeof operator
console.log(typeof markOlder);
console.log(typeof ageRahul);
console.log(typeof 'Mark is older than Rahul');
var x;
console.log(typeof x);*/

/*************************
 * Operator precedence
 */

/*var now = 2020;
var yearJhon = 1989;
var fullAge = 18;

var isFullAge = (now - yearJhon) >= fullAge;
console.log(isFullAge);

var ageJhon = now - yearJhon;
var ageMark = 38;
var average = (ageMark + ageJhon) / 2;
console.log(average);

// Multiple assignment
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);*/

/********************
 * CODING CHALLENGE 1
 */

/*var markMass = 78;
var jhonMass = 75;
var markHeight = 1.98;
var jhonHeight = 1.87;

var markBMI = markMass / (markHeight * markHeight);
var jhonBMI = jhonMass / (jhonHeight * jhonHeight);

console.log('Mark\'s BMI: ' + markBMI + '& ' + 'Jhon\'s BMI: ' + jhonBMI);
if (markBMI > jhonBMI) {
    console.log('Mark\'s BMI is greater than Jhon\'s');
} else {
    console.log('Jhon\'s BMI is greater than Mark\'s');
}
//var isMarkBmiGreater = markBMI > jhonBMI;
console.log('Is Mark\'s BMI higher than Jhon\'s? ' + isMarkBmiGreater);*/

/************************
 * If / else statements
 */

/*var firstName = 'Jhon';
var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + 'will hopefully marry soon:)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + 'will hopefully marry soon:)');
}*/




/************************
 * Boolean logic
 */

/*var firstName = 'Jhon';
var age = 20;
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}*/


/******************************
 * Ternary operator and
 * Switchstatements
 */

/*var firstName = 'Jhon';
var age = 23;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);*/

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch statement
/*var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' design beautyful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}*/

/******************************
 * Truthy and Falsy values
 * and equality operators
 */

//falsy value: undefined, null, 0, '', NaN
//trythy values: Not falsy values

/*var height;
height = 23;
if (height || height === 0) {
    console.log('Variabl is defined');
} else {
    console.log('Variable has not been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coerction!');
}*/


/*********************
 * CODING CHALLENGE 2
 */

/*var teamJhonAverage = (600 + 100 + 100) / 3;
var teamNikeAverage = (100 + 100 + 100) / 3;
var teamMaryAverage = (97 + 134 + 165) / 3;

var jhonNikeScoreDiff = teamJhonAverage - teamNikeAverage;
var nikeJhonScoreDiff = teamNikeAverage - teamJhonAverage;
var jhonMaryScoreDiff = teamJhonAverage - teamMaryAverage;
var nikeMaryScoreDiff = teamNikeAverage - teamMaryAverage;
var maryJhonScoreDiff = teamMaryAverage - teamJhonAverage;
var maryNikeScoreDiff = teamMaryAverage - teamNikeAverage;;
var drawScoreDiff = teamJhonAverage - teamNikeAverage - teamMaryAverage;

if (teamJhonAverage > teamNikeAverage && teamJhonAverage > teamMaryAverage) {
    console.log('Team Jhon\'s won by average score differece of ' + jhonNikeScoreDiff + ' & ' + jhonMaryScoreDiff);
} else if (teamNikeAverage > teamJhonAverage && teamNikeAverage > teamMaryAverage) {
    console.log('Team Nike\'s won by average score differece of ' + nikeJhonScoreDiff + ' & ' + nikeMaryScoreDiff);
} else if ((teamMaryAverage > teamJhonAverage) && (teamMaryAverage > teamNikeAverage)) {
    console.log('Team Mary\'s won by average score differece of ' + maryJhonScoreDiff + ' & ' + maryNikeScoreDiff);
} else {
    console.log('It\'s a draw and the average difference is ' + scoreDiff);
}*/

/*******************
 * Function
 */

/*function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJhon = calculateAge(1991);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJhon, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' already retired.');
    }
}

yearsUntilRetirement(1990, 'Jhon');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');*/

/*************************
 * Function Statement and Expressions
 */

// Function declaration
// function whatDoYouDo(job, firstName) {}

//Function expression
/*var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'Jhon'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));*/


/*****************
 * Arrays
 */

// Initialize new array
/*var names = ['Jhon', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names);
console.log(names.length);*/

// Mutate array data
/*names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);*/

// Different data types
/*var jhon = ['Jhon', 'Smith', 1990, 'designer', false];
jhon.push('blue');
jhon.unshift('Mr.');
console.log(jhon);

jhon.pop();
jhon.shift();
console.log(jhon);
console.log(jhon.indexOf(23));

var isDesigner = jhon.indexOf('designer') === -1 ? 'Jhon is not a designer' : 'Jhon is a designer';
console.log(isDesigner);*/

/****************************
 * CODING CHALLENGE 3
 */

/*function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return bill * percentage;
}
var bills = [124, 48, 268];
var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

console.log(bills);
console.log(tips);

var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[2],
    bills[2] + tips[2],
];
console.log(finalValues);*/

/*************************************
 * Objects and Properties
 */
/*
 // Object literal
var jhon = {
    firstName: 'Jhon',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'Teacher',
    isMarried: false
};

console.log(jhon.firstName);
console.log(jhon['lastName']);
var x = 'birthYear';
console.log(jhon[x]);
jhon.job = 'Designer';
jhon['isMarried'] = true;
console.log(jhon);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1996;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/***************************************
 * Objects and methods
 */
/*
 var jhon ={
     firstName: 'Jhon',
     lastName: 'Smith',
     birthYear: 1992,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'Teacher',
     isMarried: false,
     calcAge: function() {
        //return 2020 - this.birthYear;
        this.age = 2020 -this.birthYear;
     }
 };

 //jhon.age = jhon.calcAge();
 jhon.calcAge();
 console.log(jhon);
 */

/*********************************************
 * CODING CHALLENGE 4
 */
/*
  var jhon = {
      fullName: 'Jhon Smith',
      mass: 89, //kg
      height: 1.96, //meter
      calcBmi: function() {
          this.bmi = this.mass / (this.height * this.height);
          return this.bmi;
      }
  };

  var mark = {
      fullName: 'Mark Smith',
      mass: 78, //kg
      height: 1.99, //meter
      calcBmi: function() {
          this.bmi = this.mass / (this.height * this.height);
          return this.bmi
      }
  };
  jhon.calcBmi();
  mark.calcBmi();
  console.log(jhon);
  console.log(mark);

  if (jhon.calcBmi() > mark.calcBmi()) {
      console.log(jhon.fullName + ' ' + jhon.bmi);
  } else if (jhon.calcBmi() < mark.calcBmi()) {
    console.log(mark.fullName + ' ' + mark.bmi);
  } else {
      console.log(jhon.fullName + ' and ' + mark.fullName + ' has same BMI');
  }
*/

/**************************************
 * Loops and iteration
 */
/*
 for (var i = 1; i <= 20; i += 2) {
     console.log(i);
 }

 // i = 0, 0 < 10 true, log i to console, i++
 // i = 1, 1 < 10 true, log i to console, i++
 //.....
 // i = 9, 9 < 10 true, log i to console, i++
 // i = 10, 10 < 10 false, exit the loop!

// For loop
 var jhon = ['Jhon', 'Smith', 1990, 'designer', false, 'blue'];
 for (var i = 0; i < jhon.length; i++) {
     console.log(jhon[i]);
 }

 // While loop
 var j = 0;
 while (j < jhon.length) {
     console.log(jhon[j]);
     j++;
 }

 // continue and break statements
 var jhon = ['Jhon', 'Smith', 1990, 'designer', false, 'blue'];
 for (var i = 0; i < jhon.length; i++) {
     if (typeof jhon[i] !== 'string') continue;
     console.log(jhon[i]);
 }

 for (var i = 0; i < jhon.length; i++) {
    if (typeof jhon[i] !== 'string') break;
    console.log(jhon[i]);
}

// looping backwords
for ( var i = jhon.length - 1; i >= 0; i--) {
    console.log(jhon[i]);
}
*/

/************************************
 * CODING CHALLENGE 5
 */
/*
 var jhonTiping = {
     bill: [124, 48, 268, 180, 42],
     tip: [],
     amount: [],
     calcTip: function() {
         for (var i = 0; i < this.bill.length; i++) {
            var percentage;
            if (this.bill[i] < 50 ) {
                percentage = 0.2;
            } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            this.tip[i] = this.bill[i] * percentage;
            this.amount[i] = this.bill[i] + this.tip[i];
         }
         
     }
 };

 var markTiping = {
    bill: [77, 375, 110, 45],
    //tip: [],
    //amount: [],
    calcTip: function() {
        this.tip = [];
        this.amount = [];
        for (var i = 0; i < this.bill.length; i++) {
            
           var percentage;
           if (this.bill[i] < 100 ) {
               percentage = 0.2;
           } else if (this.bill[i] >= 100 && this.bill[i] <= 200) {
               percentage = 0.1;
           } else {
               percentage = 0.25;
           }
           this.tip[i] = this.bill[i] * percentage;
           this.amount[i] = this.bill[i] + this.tip[i];
        }
        
    }
};

function calcTipAverage(array) {
    var sum = 0;
    for ( var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

jhonTiping.calcTip();
console.log(jhonTiping);

markTiping.calcTip();
console.log(markTiping);

jhonTiping.average = calcTipAverage(jhonTiping.tip);
markTiping.average = calcTipAverage(markTiping.tip);
//console.log(jhonTiping.average, markTiping.average);
if (jhonTiping.average > markTiping.average) {
    console.log('Jhon\'s average is greater than Mark\'s and average is ' + jhonTiping.average);
} else {
    console.log('Mark\'s average is greater than Jhon\'s and average is ' + markTiping.average);
}
*/


