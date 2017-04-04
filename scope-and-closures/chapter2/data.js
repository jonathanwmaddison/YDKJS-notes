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
        concept: "Lexical Scope",
        definition: "The model that most programming languages, including Javascript, use to define javascript. Some other languages use Dynamic Scope which is a different model. Lexing examines a string of source code characters and assigns semantic meaning to the tokens.",
        syntax: null,
        link: null,
    },
    {
        concept: "with",
        definition: "with is a dangerous tool that shouldn't be used because it can leak global variables. It is used to add properties to objects without having to name the object over and over again. However, if you use with to define a property that doesn't exist on the object, this will create a globabl variable!",
        syntax: null,
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md#withi",
    },
    {
        concept: "eval()",
        definition: "eval can be used to cheat lexical scope by dynamically generatting functions/variable declarations. It deos not hav good performace so it is not recommended.",
        syntax: null,
        link: null,
    }
]
