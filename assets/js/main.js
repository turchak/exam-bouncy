function initMap() {
  let kiev = {
    lat: 50.401699,
    lng: 30.252512
  };
  let image = 'https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png'
  let map = new google.maps.Map(document.querySelector('.contacts__map'), {
    zoom: 10,
    center: kiev,
    disableDefaultUI: true
  });

  let marker = new google.maps.Marker({
    position: kiev,
    map: map,
    icon: image,
  });

  let infowindow = new google.maps.InfoWindow({
    content: 'Beetroot Academy',
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    let uluru = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(uluru);
  })
};

$(function() {
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  });
});

function masonry() {
  var grid = document.querySelector('.portfolio__list');
  var msnry;

  imagesLoaded( grid, function() {
    // init Isotope after all images have loaded
    msnry = new Masonry( grid, {
      itemSelector: '.portfolio__item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  });
}
masonry();
