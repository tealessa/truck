google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                
                let mapOptions = {
                    zoom: 11,
                    center: new google.maps.LatLng(59.927197,30.3738301,17),
                    styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
                };
                let mapElement = document.querySelector('.js-map');
                let map = new google.maps.Map(mapElement, mapOptions);
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(59.92794,30.3727712,19.5),
                    map: map,
                    title: 'Snazzy!'
                });
            }