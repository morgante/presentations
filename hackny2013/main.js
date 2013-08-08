$(function() {
    // just hide the fallback
    $('.fallback-message').hide();
    
	$('#presentation').jmpress();
	
	var map;

    // svg path for target icon
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    // svg path for plane icon
    var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

    AmCharts.ready(function() {
        map = new AmCharts.AmMap();
        map.pathToImages = "http://www.ammap.com/lib/images/";
        
        var dataProvider = {
            mapVar: AmCharts.maps.worldLow
        };

        map.areasSettings = {
            unlistedAreasColor: "#FFCC00"
        };

        map.imagesSettings = {
            color: "#CC0000",
            rollOverColor: "#CC0000",
            selectedColor: "#000000"
        };

        map.linesSettings = {
            color: "#CC0000",
            alpha: 0.4
        };

        // NYC
        var nyc = {            
            id: "nyc",
            color: "#000000",
            svgPath: targetSVG,
            title: "New York",
            latitude: 40.43,
            longitude: -74,
            scale: 1.5,
            zoomLevel: 2.74,
            zoomLongitude: -20.1341,
            zoomLatitude: 49.1712,
        };
        
        // ad
        var ad = {
            svgPath: targetSVG,
            title: "Abu Dhabi",
            latitude: 24.47,
            longitude: 54.38
        }
        
        nyc.lines = [
            {
                latitudes: [nyc.latitude, ad.latitude],
                longitudes: [nyc.longitude, ad.longitude]
            }
        ]
        
        // cities
        var cities = [
            nyc,
            ad
        ];
            

        dataProvider.linkToObject = nyc;
        dataProvider.images = cities;
        map.dataProvider = dataProvider;

        map.write("mapdiv");

    });
});