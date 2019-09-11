window.latitude = 0;
window.longitude = 0;
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else{
    alert("Not Supported");
  }
}
function showPosition(position){
  window.latitude = position.coords.latitude;
  window.longitude = position.coords.longitude;
  initMap();
}

function initMap() {
  var map;
  var position = {lat: window.latitude, lng: window.longitude}
  var options ={
    center: position,
    zoom: 4.9
  }

  map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
    position: position,
    map : map,
  });

}
