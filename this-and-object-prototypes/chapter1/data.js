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
        concept: "Scope",
        definition: "A well-defined set of rules for storing variables in some location and finding those variables at a later time",
        syntax: null,
        link: null
    },
    {
        concept: "Compiler Theory",
        definition: "Compiled language goes through three step process of Tokenizing/Lexing (break into meaningful chunks), Parsing - nesting the tokens into a grammatical structure (Abstract Syntax Tree), and Code Generation (turning into machine code)",
        syntax: null,
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-theory"
    },
    {
        concept: "Three key actors that process a program",
        definition: "Engine: responsible for start to finish compilation and execution. Compiler: parsing and code-generation. Scope: Collects and maintains a look-up list of all delcared identifiers (variables)",
        syntax: null,
        link: null,
    },
    {
        concept: "LHS and RHS lookups",
        definition: "Left hand side look up: looks up when a variable appears on the left hand size of an assignment operation. RHS is a look up doen when a variable appears on right hand side. RHS looks up the value of a variable.",
        syntax: ["console.log(a) RHS look up of value of a",
			"a=2 LHS look up of a first (finds what context variable a is from"],
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#compiler-speak",
		quote: "It\'s better to conceptually think about it as: \"who\'s the target of the assignment (LHS)\" and \"who\'s the source of the assignment (RHS)\"."
    },
    {
        concept: "Nested Scope",
        definition: "There is more than one scope. Every scope is nested within a global scope. JS engine will look for scope and follow all the way to globabl scope when doing looks ups if it can't find a variable locally",
        syntax: null,
        link: null,
    },
    {
        concept: "ReferenceError",
        definition: "In Strict Mode you'll have an issue if you make a value assignment to a variable that hasn't been declared. This is called a ReferenceError",
        syntax: null,
        link: null,
    },
    {
        concept: "TypeError",
        definition: "If you try to do something with a value that is impossible you'll recieve a type error (like running something as a function that was not declared as a function",
        syntax: null,
        link: null,
    }
]
const QUIZ = [
	{
		question: " Identify the LHS look ups(should be 3) and RHS look ups (there should be 4)",
		answer: "LHS:  1. a=2, 2. b=.. 3. c=.., RHS: 1. foo, 2. look up of value of a, 3. lookup of value of b, 4. look up of value of a again!",
		link: "https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md#quiz"
	}
]
