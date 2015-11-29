var startPos;
var watchId;

function startTracking(){
    if(navigator.geolocation){
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('stopBtn').style.display = 'inline';

        // Get Postition
        navigator.geolocation.getCurrentPosition(showPosition, showError);

        // Watch Position
        watchId = navigator.geolocation.watchPosition(showPositionUpdate,showError);

    } else {
        alert('Geolocation is not supported by your browser');
    }
}

function showPosition(position){
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
}

function showError(error){

}