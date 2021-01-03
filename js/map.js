// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['mm-tn', 578],
    ['mm-np', 426],
    ['mm-mo', 2378],
    ['mm-ra', 4128],
    ['mm-ay', 4841],
    ['mm-ch', 228],
    ['mm-mg', 2840],
    ['mm-sh', 812],
    ['mm-kh', 46],
    ['mm-kn', 1113],
    ['mm-kc', 601],
    ['mm-sa', 1948],
    ['mm-ba', 7898],
    ['mm-md', 13937],
    ['mm-ya', 83281],

];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/mm/mm-all'
    },

    title: {
        text: '<article style="font-family:serif">COVID-19 Situation in Myanmar</article>'
    },

    subtitle: {
               text: '<strong>Last Updated on SUN 3.1.2021</strong> <br> Press each state & division to see data'

    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0,
        stops: [
                    [0, '#f4756c'],
                    [0.5,'#ff1100' ],
                    [1, '#9b0e04']
                    
                ]
    },

    series: [{
        data: data,
        name: 'Total Confirmed Cases',
        states: {
            hover: {
                color: '#0080ff'
            }
        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        }
    }]
});