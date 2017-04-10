//CORE_CONCEPTS cover new material that I need to review. Since a lot of the book is review for me I'm cherry picking things that I feel I need more review on.
/*
Go to Line 4: data structure (6 lines to copy)
    {
        concept: ,
        definition: ,
        syntax: null,
        link: null,
    }
*/

const CORE_CONCEPTS = [
    {
        concept: "Principle of Least Privilege",
        definition: "This principle is for deisng to expose only what is minimally necessary and hide everything elese",
        syntax: null,
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md#hiding-in-plain-scope",
    },
    {
        concept: "Module Management",
        definition: "Creating an object allows you to create a namespace to avoid collisions. This is how libraries work and dependency managers also work. They ensure that when importing a library no global variables are being created. The varaibles and functions available are private to those libraries when they are impored",
        syntax: null,
        link: null
    },
    {
        concept: "Difference b/w Declaration and Expression",
        definition: 'The easiest way to distinguish declaration vs. expression is the position of the word "function" in the statement (not just a line, but a distinct statement). If "function" is the very first thing in the statement, then its a function declaration. Otherwise, its a function expression.',
        syntax: null,
        link: null,
    },
    {
        concept: "Tip: Always Name your function expressions",
        definition: "It's reccomended because it makes your code more readable, debuggable, etc",
        syntax: "setTimeout( function timeoutHandler(){ }, 1000) instead of: setTimeout(function(){}, 1000)",
        link: null,
    },
    {
        concept: "let",
        definition: "let is a tool that ensures that variable declarations strictly enforce the scope they are in.",
        syntax: "if(true) { let a = 1} -> this will ensure that a does NOT exist outside of the the if block. if (true) { var a = 1} will create the var a outside of the if statement.",
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md#let",
    },
    {
        concept: "garbage collection and use of let",
        definition: "let allows you to create and process a large amount of data and then ensure that the data isn't preserved after it has been processed",
        syntax: " function processBigData(data) {}  { let bigData = {...bigdatahere!...} processBigData(bigData) } ",
        link: null,
    }
    
]
