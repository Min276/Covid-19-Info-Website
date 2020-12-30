if (self === top) {
  var antiClickjack = document.getElementById("antiClickjack");
  antiClickjack.parentNode.removeChild(antiClickjack);
} else {
  top.location = self.location;
};

var myVar = setInterval (myTimer, 5000);
  function myTimer(){
  document.getElementById('banner').innerHTML = 'COVID-19 Situation in Myanmar';
};

$(window).scroll(function() {
if ($(document).scrollTop() > 50) {
$('nav').addClass('shrink');
} else {
$('nav').removeClass('shrink');
}
});

