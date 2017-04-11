
$(document).ready(function() {
    var $host = $('.notes');
    CORE_CONCEPTS.map(function(concept) {
        var $conceptNote = $(".concept").clone();
        $conceptNote.find(".concept-title").text(concept.concept);
        $conceptNote.find(".concept-description").text(concept.definition)
        concept.syntax ? $conceptNote.find(".concept-syntax").text(concept.syntax) : $conceptNote.find(".concept-syntax").remove()
        concept.link ? $conceptNote.find(".concept-link").attr("href", concept.link) : $conceptNote.find(".concept-link").remove()
        concept.quote ? $conceptNote.find(".concept-quote").text(concept.quote) : $conceptNote.find(".concept-quote").remove()
        $host.append("<div>"+$conceptNote.html()+"</div>")
    })
    
});



