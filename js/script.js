// Markers personalisées
let greenIcon = L.icon({
    iconUrl: 'images/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',

    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [1, -34],
});

let blueIcon = L.icon({
    iconUrl: 'images/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [1, -34],
});

let orangeIcon = L.icon({
    iconUrl: 'images/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [1, -34],
});

let greyIcon = L.icon({
    iconUrl: 'images/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',

    iconSize: [25, 41],
    shadowSize: [41, 41],
    iconAnchor: [12, 41],
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [1, -34],
});
// *********************FIN de markers personnalisés

let tableau =[
	{
	type : 'habitat',
	lat: -20.904788036065646, lng: 55.498504064567086, popup : '<img src="images/sodiac.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
	{	
	type : 'habitat',
	lat: - 20.889987, lng: 55.500152, popup : '<img src="images/sodiac1.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
	{
	type : 'habitat',
	lat: -20.873431, lng: 55.452629, popup : '<img src="images/sodiac2.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<br><button>Apercu</button>'},
	{
	type : 'habitat',
	lat: -20.948746, lng: 55.281660, popup : '<img src="images/sodiac3.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
	{
	type : 'immobilierE',
	lat: -20.895015, lng:  55.497857, popup : '<img src="images/sodiac4.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
	{
	type : 'immobilierE',
	lat: -21.326289, lng: 55.608400, popup : '<img src="images/sodiac5.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
	{
	type : 'immobilierE',
	lat: -20.913092, lng: 55.620134, popup : '<img src="images/sodiac6.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta. <button>Apercu</button>'},
	{	
	type : 'immobilierE',
	lat: -20.908671, lng: 55.605084, popup : '<img src="images/sodiac7.jpg" alt=""/></br>Ensembe de bureaux et de commerces dans deux batiments sur une superficie totale de 9 380m2, avec 360 places de parking.<button>Apercu</button>'},
	{
	type : 'immobilierE',
	lat: -21.346450, lng: 55.492311, popup : '<img src="images/sodiac8.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
	{
	type : 'amenagement',
	lat: -20.890523, lng: 55.443799, popup :'<img src="images/sodiac6.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta. <button>Apercu</button>'},
	{
	type : 'amenagement',
	lat: -21.020964, lng: 55.264664, popup : '<img src="images/sodiac4.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
	{
	type : 'amenagement',
	lat: -21.342968, lng: 55.494574, popup : '<img src="images/sodiac2.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<br><button>Apercu</button>'},
	{
	type : 'amenagement',
	lat: -20.888212, lng: 55.469084, popup :'<img src="images/sodiac7.jpg" alt=""/><br><h5>Cour Kerveguen :</h5></br>Ensembe de bureaux et de commerces dans deux batiments sur une superficie totale de 9 380m2, avec 360 places de parking.<button>Apercu</button>'  },
	{
	type : 'ingenierie',
	lat: -21.026939, lng: 55.268634, popup :'<img src="images/sodiac3.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},	
    {
	type : 'ingenierie',
	lat: -20.888738, lng: 55.501599, popup : '<img src="images/sodiac.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>'},
    {
	type : 'ingenierie',
	lat: -20.931442, lng: 55.298157, popup: '<img src="images/sodiac8.jpg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>' },
    {
	type : 'ingenierie',
	lat: -20.907459, lng: 55.503217, popup:'<img src="images/sodiac2.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<br><button>Apercu</button>' },
    {
	type : 'ingenierie',
	lat: -20.926038, lng: 55.454804, popup : '<img src="images/sodiac3.jpeg" alt=""/><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, tenetur. Molestias nemo sint, beatae quasi corporis unde sapiente ad, et vitae saepe fugit. Delectus, culpa et minus cupiditate voluptate soluta.<button>Apercu</button>' },
	 	];	

let map = L.map('map').setView([-21.120, 55.532], 9);

L.tileLayer('https://api.tiles.mapbox.com/v2/dakno.map-xxbpkb1z/{z}/{x}/{y}.png', {minZoom :9 , maxZoom : 18, 
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);	

$(document).ready(function(){
	map.scrollWheelZoom.disable();
	let changeText = document.querySelector('.informateur');

	//Activation du zoom de la carte et desactivation au click
 	map.on('click', function() {
	  	if (map.scrollWheelZoom.enabled()) {
	  	
	  		$('.fa-check-circle').css('color','#d86b50');
	    	map.scrollWheelZoom.disable();
	    	changeText.innerHTML = "Zoom Desactivé";
	    	
	    }else{

	    	$('.fa-check-circle').css('color', '#58ad4f');
	    	map.scrollWheelZoom.enable();
	    	changeText.innerHTML = "Zoom Activé";
	    	
	    }
	}); 
	// $$$$$$$$$$$$FIN de l'activation

	let Categorie = {
		immobilierE : L.layerGroup().addTo(map),
		habitat : L.layerGroup().addTo(map),
		amenagement : L.layerGroup().addTo(map),
		ingenierie : L.layerGroup().addTo(map), 
	};

	for(i=0; i < tableau.length; i++){
		let latitude = tableau[i].lat;
		let longitute = tableau[i].lng;
		let type = tableau[i].type;
		let popup = tableau[i].popup;
		let markerIcon = "";

		function attributionMarker(e){
			if(type == "immobilierE"){
				markerIcon = blueIcon;
			} 
			else if(type == "habitat"){
				markerIcon = greenIcon;
			}
			else if(type == "amenagement"){
				markerIcon = orangeIcon;
			}
			else if(type == "ingenierie"){
				markerIcon = greyIcon;
			}
		}

		attributionMarker();

		marker = L.marker([latitude, longitute],{icon: markerIcon}).bindPopup(popup);	
		Categorie[type].addLayer(marker);

		$('.btn_check').on('click',function(){
			let id = $(this).attr('id');

			if($(this).is(':checked')){
				Categorie[id].addTo(map);
			}else{	
				map.removeLayer(Categorie[id]);
			}
		});
	}//boucle for

});