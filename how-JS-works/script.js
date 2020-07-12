// Hoisting

// functions
/*calculateAge(1965);
function calculateAge(year) {
    console.log(2020 - year);
}
// calculateAge(1991);


retirement(1991);
var retirement = function(year) {
    console.log(65 - (2020 - year));
}
// retirement(1991);*/


// variables
/*console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 56;
    console.log(age);
}
foo();
console.log(age);


// Scoping

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        //console.log(a + b + c);
        third();
    }
}

function third(){
    var d = 'Jhon';
    //console.log(c);
    console.log(a + d);
}*/


// 'this' keyword
//console.log(this);

/*calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}*/

var jhon = {
    name: 'Jhon',
    yearOfBirth: 1991,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
    
}

jhon.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = jhon.calculateAge;


mike.calculateAge();