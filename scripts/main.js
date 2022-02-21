$('#button_generate').on('click', function(){
    loadFact()
})

$(document).ready(function () {
    loadFact()
});

function loadFact(){
    $.ajax({
        method: "GET",
        url: "https://uselessfacts.jsph.pl/random.json?language=en",
    }).done(function(res){
        checkWordLength(res.text)
        $("#fact").text(res.text)
    })
}

function checkWordLength(string){
    var wordsArray = string.split(" ")
    wordsArray.forEach((item, index)=>{
        if(item.length > 27)
        {
            $(".fact-box").css("word-break", "break-all");
            return;
        }
        $(".fact-box").css('word-break', '');
    })
}