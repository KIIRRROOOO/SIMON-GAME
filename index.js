var colors=["green","red","blue","yellow"];
var seq=[];
var userseq=[];
var started=false;
var level=0;

$(document).keypress(function()
{
    if(!started)
    {
        $("#level-title").text("Level:" + level);
        nextSequence();
        started=true;
    }
})

function nextSequence()
{
    userseq=[];
    level++;
    $("#level-title").text("Level:" + level);
    var random=Math.floor(Math.random()*4);
    var randomcolor=colors[random];
    seq.push(randomcolor);
    
    $("#" + randomcolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomcolor);
}

$(".btn").click(function()
{
    var abc=$(this).attr("id");
    userseq.push(abc);
    playsound(abc);
    ani(abc);
    check(userseq.length-1);
})

function check(currentLevel)
{
    if(seq[currentLevel]===userseq[currentLevel])
    {
        if(userseq.length===seq.length)
        {
            setTimeout(function()
            {
                nextSequence();

            },1000);
        }
    }
        else
        {
            playsound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over,Press Any Key to Start Over");
            setTimeout(function()
            {
                $("body").removeClass("game-over");
            },200);
            startover();
        }
    }

function playsound(name)
{
    var audio=new Audio("sounds/" +name+ ".mp3");
    audio.play();
}

function ani(currentColor)
{
    $("#" + currentColor).addClass("pressed");
    setTimeout(function()
{
    $("#" + currentColor).removeClass("pressed");
},100);
}

function startover()
{
    level=0;
    seq=[];
    userseq=[];
    started=false;
}