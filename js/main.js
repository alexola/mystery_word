
// get the random word of the array

var rndWords = ["PONCHE","COOPERACHA", "TEQUILA","XOLOITZCUINTLE","NOPAL","VOCHO", "TORTA","MOLE","CATRINA","TLACUACHE"];

// test image display if it equals the rndWords value
// function image(thisImg) {
//     var img = doc0ument.createElement("img");
//     img.src = "img/"+thisImg+".jpg";
//     document.getElementById('imageDiv').appendChild(img);
// }
// if (a == 'tick') {
//     image('tick.gif');
// } else {
//     image('cross.gif');
// }



$("#randomWord").on('click', function() {
var random = rndWords[Math.floor(Math.random() * rndWords.length)];
var cut = random.split("");
//Gets random words to image display
var image = "./img/" + random + ".jpg";
$(".container").after($('<img id="foto">').attr("src", image));
$('<img id="foto">').empty("src", image);
// aqui poner el empty letters
//
console.log(cut);
  $('#hidden-word').empty('letters');
for (var i = 0; i < cut.length; i++)
  $('#hidden-word').append("<p id='letters'>"+ cut[i]+"</p>");
  $("p").hide();
});

$("#show").click(function(){
        alert("No manches!");
        $("p#letters").show();


});
//Get to work the keypress to compare values with the random word (fix it)
// works getting words missing to compare with the random word and if the word repeats some words to use only once no more
$(document).keypress(function(event){
var keyPressed= event.key;
var keyPressedCap = keyPressed.toUpperCase();
// var found = $.inArray(keyPressedCap, rndWords) > -1;
// console.log(found);
// return false;

if (keyPressedCap === $('#letters')){
   show.$("p#letters").show();
  console.log("works");
}
console.log(keyPressedCap);

// var look = rndWords(keypress);
// console.log(look);
});

  // console.log(keyPressedCap);
  // var found = $.inArray(keyPressedCap, wordSplitted) > -1;
  // console.log(found);


// will show the number of keys pressed (working)
i = 0;
$(document).ready(function(){
    $(document).keypress(function(){
        $("span").text(i += 1);
    });
});
//
