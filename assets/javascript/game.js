//audio related
var audio = document.getElementById("sunnyThemeSong");
audio.volume = 0.01;

var wins = 0;
var losses = 0;

$(".pauseButton").click(function () {
    audio.pause;
})


var myAudio = document.getElementById("sunnyThemeSong");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
//code for game begins
var currentScore = 0;
var dennisNumber = Math.floor(Math.random() * 12 + 1);
var macNumber = Math.floor(Math.random() * 12 + 1);
var charlieNumber = Math.floor(Math.random() * 12 + 1);
var deeNumber = Math.floor(Math.random() * 12 + 1);
var frankNumber = Math.floor(Math.random() * 12 + 1);

function gameInitalize() {
    currentScore = 0;
    dennisNumber = Math.floor(Math.random() * 12 + 1);
    macNumber = Math.floor(Math.random() * 12 + 1);
    charlieNumber = Math.floor(Math.random() * 12 + 1);
    deeNumber = Math.floor(Math.random() * 12 + 1);
    frankNumber = Math.floor(Math.random() * 12 + 1);
    computerGeneratedNumber = Math.floor(Math.random() * 102 + 19);
    $(".numberDisplay").text(computerGeneratedNumber);
    $("#currentPoints").text(currentScore);

}
var computerGeneratedNumber = Math.floor(Math.random() * 102 + 19);
$(".numberDisplay").text(computerGeneratedNumber);

var castNames = [".dennisPic", ".macPic", ".charliePic", ".deePic", ".frankPic"]

$(".dennisPic").click(function () {
    currentScore += dennisNumber
    $("#currentPoints").text(currentScore);
    if (computerGeneratedNumber === currentScore) {
        alert("Nice, you hit the nail on the head");
        wins++;
        $(".winsDisplay").text(wins);
        gameInitalize();

    }
    if (currentScore > computerGeneratedNumber) {
        alert("You went too far, you lose.");
        losses++;
        $(".lossesDisplay").text(losses);
        gameInitalize();
        
    }
});

$(".macPic").click(function () {
    currentScore += macNumber
    $("#currentPoints").text(currentScore);
    if (computerGeneratedNumber === currentScore) {
        alert("Nice, you hit the nail on the head");
        wins++;
        $(".winsDisplay").text(wins)
        gameInitalize()
    }
    if (currentScore > computerGeneratedNumber) {
        alert("You went too far, you lose.");
        losses++;
        $(".lossesDisplay").text(losses);
        gameInitalize();
        
    }
});

$(".charliePic").click(function () {
    currentScore += charlieNumber
    $("#currentPoints").text(currentScore);
    if (computerGeneratedNumber === currentScore) {
        alert("Nice, you hit the nail on the head");
        wins++;
        $(".winsDisplay").text(wins)
        gameInitalize()
    }
    if (currentScore > computerGeneratedNumber) {
        alert("You went too far, you lose.");
        losses++;
        $(".lossesDisplay").text(losses);
        gameInitalize();
        
    }

});

$(".deePic").click(function () {
    currentScore += deeNumber
    $("#currentPoints").text(currentScore);
    if (computerGeneratedNumber === currentScore) {
        alert("Nice, you hit the nail on the head");
        wins++;
        $(".winsDisplay").text(wins)
        gameInitalize()
    }
    if (currentScore > computerGeneratedNumber) {
        alert("You went too far, you lose.");
        losses++;
        $(".lossesDisplay").text(losses);
        gameInitalize();
        
    }

});

$(".frankPic").click(function () {
    currentScore += frankNumber
    $("#currentPoints").text(currentScore);
    if (computerGeneratedNumber === currentScore) {
        alert("Nice, you hit the nail on the head");
        wins++;
        $(".winsDisplay").text(wins)
        gameInitalize()
    }
    if (currentScore > computerGeneratedNumber) {
        alert("You went too far, you lose.");
        losses++;
        $(".lossesDisplay").text(losses);
        gameInitalize();
        
    }

});


$(".winsDisplay").text(wins);
$(".lossesDisplay").text(losses);
$("#currentPoints").text(currentScore);


//very repetative, i know....