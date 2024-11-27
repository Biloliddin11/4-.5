// 1-Masala
{
    let oldArr = [1, -2, 3, -4, 5, -6, 7];
    let newArr = oldArr.filter(item => item > 0);
    console.log(newArr);
}

// 2-Masala
{
    function foo(str) {
        return str
            .split(" ")
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ")
    }
    console.log(foo("hello world"));
    console.log(foo("lorem ipsum dolor"));
}

// 3-Masala
{
    function evenOrOdd(number) {
        return Number(number.toString().split("").reverse().join(""))
    }
    console.log(evenOrOdd(12345678));
}


// 4-Masala
{
    let newArr = [true, false, true, false, true, false, true];
    let falseArr = newArr.filter(value => value === false);
    console.log(falseArr);
}

// 5-Masala
{
    let arr = [1, -2, 3, -4, 5, -6, 7];
    let sumArr = arr.filter(value => value > 0).reduce((sum, value) => sum + value, 0);
    console.log(sumArr);
}




// CodeWars

// 1-Masala
// This code does not execute properly. Try to figure out why.
{
    function multiply(a, b) {
        a * b
    }
}

// 2-Masala
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
{
    function evenOrOdd(number) {
        if (number % 2 === 0) {
            return "Even"
        } else {
            return "Odd"
        }
    }
}

// 3-Masala
// We need a function that can transform a number (integer) into a string.
{
    function numberToString(num) {
        return num.toString()
    }
}

// 4-Masala
// Complete the solution so that it reverses the string passed into it.
{
    function solution(str) {
        return str.split('').reverse().join('')
    }
    console.log(solution("Hello"));
}

// 5-Masala
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
{
    function makeNegative(num) {
        return num > 0 ? -num : num;
    }

    console.log(makeNegative(1));
    console.log(makeNegative(-5));
    console.log(makeNegative(0));
    console.log(makeNegative(0.12));
}

// 6-Masala
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
{
    function opposite(number) {
        return -number;
    }

    console.log(opposite(5));
    console.log(opposite(-3.14));
    console.log(opposite(0));
    console.log(opposite(2.718));
}

// 7-Masala
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
{
    function boolToWord(bool) {
        return bool ? "Yes" : "No";
    }
    console.log(boolToWord(true));
    console.log(boolToWord(false));
}

// 8-Masala
// You get an array of numbers, return the sum of all of the positives ones.
{
    function positiveSum(arr) {
        return arr.filter(value => value > 0).reduce((sum, value) => sum + value, 0);
    }

    console.log(positiveSum([1, -4, 7, 12]));
    console.log(positiveSum([-1, -2, -3]));
    console.log(positiveSum([2, 3, 5, -10]));
}

// 9-Masala
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
{
    function repeatStr(n, s) {
        return s.repeat(n);
    }
    
    console.log(repeatStr(6, "I"));
    console.log(repeatStr(5, "Hello"));
}

// 10-Masala
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
{
    function removeChar(str) {
        return str.slice(1, -1);
    }
    
    console.log(removeChar("hello"));
    console.log(removeChar("world"));
    console.log(removeChar("JavaScript"));
}