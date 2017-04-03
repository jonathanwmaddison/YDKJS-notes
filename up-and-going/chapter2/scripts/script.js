//CORE_CONCEPTS cover new material that I need to review. Since a lot of the book is review for me I'm cherry picking things that I feel I need more review on.
const CORE_CONCEPTS = [
    {
        concept: "Immediately Invoked Function Expressions(IIFE)",
        definition: "Syntax that allows a function to be invoked immediately. It does not define a function in memory like a typical function definition.",
        syntax: "(function IIFE() {console.log(\"hello\"); })() //Hello!"
    },
    {
        concept: "Closure",
        definition: "Closure is the structure of scope within javascript.",
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#closure"
    },
    {
        concept: "Modules",
        definition: "Modules are tool fro defining private implementation details. In the syntax example, doLogin is returned in the public api so it is still accessible.",
        syntax: [
        function User() {
            var username, password;
            function doLogin(user,pw) {
                username = user;
                password = pw;
                //any other login work needed here!
            }
            var publicAPI;
        }
        ],
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#modules"
    },
    {
        concept: "this Identifier",
        definition: "this can be complicated. It usually points to an object. The object that it points to depends on how a function was called.",
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#this-identifier"
    },
    {
        concept: "Prototypes",
        definition: "Javacript has internal prototype references. If an object deosn't have a property it will then look at the internal prototype of the object.",
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#prototypes"
    },
    {
        concept: "Behavior Delegation",
        definition: "Intentionally design a linked object so that it can delegate to other linked objects for the needed behavior"
    },
    {
        concept: "Bringing new JS features to old browsers",
        definition: "There are two techniques for bring new JS features to old browsers. Polyfilling and Transpiling. Polyfill - you check to see if feature exists in browser. If not then you fill in new feature, else you use the feature. Transpiling converts your newer code into older code equivalents. Babel is a transpiler",
        link: "https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md#old--new"
    }
]

$(document).ready(function() {
    var $host = $('.notes');
    CORE_CONCEPTS.map(function(concept) {
        var $conceptNote = $(".concept").clone();
        $conceptNote.find(".concept-title").text(concept.concept);
        $conceptNote.find(".concept-link").attr("href", concept.link)
        $conceptNote.find(".concept-description").text(concept.definition)
        concept.syntax ? $conceptNote.find(".concept-syntax").text(concept.syntax) : $conceptNote.find(".concept-syntax").remove()
        $host.append($conceptNote.html())
    })
    
});



