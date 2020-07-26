const pics = ["url(\"images/1.jpg\")", "url(\"images/9.jpg\")", "url(\"images/8.jpg\")", "url(\"images/7.jpg\")", "url(\"images/6.jpg\")", "url(\"images/5.jpg\")", "url(\"images/4.jpg\")", "url(\"images/3.jpg\")", "url(\"images/2.jpg\")", ]

const numbers = ["1", "9", "8", "7", "6", "5", "4", "3", "2"]
var arr = [];
var box = [];
var count = 0;
var squares = $(".container div");

generateRandom();

function generateRandom() {
    count = 0;
    $("#counter").text(count);
    while (arr.length < 9) {
        var r = Math.floor(Math.random() * 9);
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundImage = pics[arr[i]];
    }
    arr = [];
}

$(".checkbox").on("click", first);

function first(e) {
    box.push("." + $(this).parent().prop('className'));
}

function swap() {
    temp = $(box[0]).css("background-image");
    $(box[0]).css("background-image", $(box[1]).css("background-image"));
    $(box[1]).css("background-image", temp);
    $(".checkbox").prop('checked', false);
    box = [];
    count+=1;
    checkOrder();
    $("#counter").text(count);
}

function checkOrder() {
    flag = false;
    current = [];
    for (var i = 0; i < squares.length; i++) {
        path = squares[i].style.backgroundImage.split("images/")[1].split(".jpg")[0]
        current.push(path);
    }
    for (var i = 0; i < squares.length; i++) {
        if (current[i] == numbers[i]) {
            flag = true;
            continue;
        } else {
            flag = false;
            break;
        }
    }
    if (flag) alert("Congratulations! You Won in " + count + " Steps. Press New Game to Play Again")
}