var audio = new Audio('audio_player/media/01 - Styles Of Beyond - Nine Thou (Superstars Remix).mp3');

// Hide Pause
$('#pause').hide();

$('#play').click(function(){
    audio.play();
    $('#play').hide();
    $('#pause').show();
});

$('#pause').click(function(){
    audio.pause();
    $('#pause').hide();
    $('#play').show();
});

$('#stop').click(function(){
    audio.pause();
    audio.currentTime = 0;
});

