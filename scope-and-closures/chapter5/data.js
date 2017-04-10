//CORE_CONCEPTS cover new material that I need to review. Since a lot of the book is review for me I'm cherry picking things that I feel I need more review on.
/*
Go to Line 4: data structure (7 lines to copy)
    {
        concept: ,
        definition: ,
        syntax: null,
        link: null,
        quote: null
    },
*/

const CORE_CONCEPTS = [
    {
        concept: "Closure",
        definition: "",
        syntax: "for (var i=1; i<=5; i++) {  (function(j){ setTimeout( function timer(){ console.log( j ); }, j*1000 ); })( i );}",
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md#nitty-gritty",
        quote: "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope." 
    },
    {
        concept: "Requirements for Module Pattern",
        definition: "1. There must be an outer enclosing function that when invoked establishes the module, 2. the Encolosing function must return one inner function, which has closure over the private scope over the original outer function so it can retrieve, edit, return data",
        syntax: null,
        link: null,
        quote: null
    },
]
