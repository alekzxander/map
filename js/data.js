


let sudOuest = L.latLng(-22.2484,57.1619);
let nordEst = L.latLng(-20.2751,54.1681);
let bounds = L.latLngBounds(sudOuest, nordEst);

// Les caractéristiques initiales de la map
let map = new L.Map('map',
{
center: [-21.1011, 55.532],
maxBounds: bounds,
minZoom: 9,
maxZoom: 16,
zoom: 9
});

//L'affichage de la map : source bibliothèque
L.tileLayer('https://api.tiles.mapbox.com/v2/dakno.map-xxbpkb1z/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
$(document).ready(function(){


  map.on('click', function() {
  if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();
    }
    else {
    map.scrollWheelZoom.enable();
    }
  });

$('#case1').click(function(){
  if(document.querySelector('#case1').checked === true){
   marker1 = L.marker([-20.897, 55.542]).bindPopup('<img src="images/sodiac.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>',{className : 'jack'}).addTo(map);
   marker2 = L.marker([-20.897, 55.492]).bindPopup('<img src="images/sodiac1.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>',{className : 'jack'}).addTo(map);

 }else{
  map.removeLayer(marker1);
  map.removeLayer(marker2);

}

});
//
$('#case2').click(function(){
  if((document).querySelector('#case2').checked === true){
    marker3 = L.marker([-21.027367, 55.268663]).bindPopup('<img src="images/sodiac2.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<br><button>Apercu</button>',{className : 'jack'}).addTo(map);
   marker4 = L.marker([-20.905148, 55.500322]).bindPopup('<img src="images/sodiac3.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>',{className : 'jack'}).addTo(map);
 }else{
  map.removeLayer(marker3);
  map.removeLayer(marker4);
} 

})

$('#case3').click(function(){
  if((document).querySelector('#case3').checked === true){

    marker5 = L.marker([-20.931442, 55.298157]).bindPopup('<img src="images/sodiac4.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>',{className : 'jack'}).addTo(map);
    marker6 = L.marker([-20.949090, 55.294954]).bindPopup('<img src="images/sodiac5.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>',{className : 'jack'}).addTo(map);
    marker7 = L.marker([-20.949090, 55.31954]).bindPopup('<img src="images/sodiac6.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta. <button>Apercu</button>',{className : 'jack'}).addTo(map); 

  }else{
   map.removeLayer(marker5);
   map.removeLayer(marker6); 
   map.removeLayer(marker7);
 }

})
$('#case4').click(function(){
  if((document).querySelector('#case4').checked === true){

   marker10 = L.marker([-20.887, 55.492]).bindPopup('<img src="images/sodiac7.jpg" alt=""/><br><h5>Cour Kerveguen :</h5></br>Ensembe de bureaux et de commerces dans deux batiments sur une superficie totale de 9 380m2, avec 360 places de parking.<button>Apercu</button>',{className : 'jack'}).addTo(map);
   marker8 = L.marker([-20.877, 55.452]).bindPopup('<img src="images/sodiac8.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>',{className : 'jack'}).addTo(map); 
 }else{
  map.removeLayer(marker10);
  map.removeLayer(marker8); 
}

})

});

