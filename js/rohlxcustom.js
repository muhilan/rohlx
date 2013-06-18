/** function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(8.148,77.568455),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

function loadScript() {
 
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);

  
} **/

function animate(){
$('.scroller').click(function(){
var section = $($(this).data("section"));
var top = section.offset().top-82;
$("html, body").animate({ scrollTop: top }, 700);
return false;
});
}
 
/** $(window).load(loadScript); **/
$(window).load(animate);