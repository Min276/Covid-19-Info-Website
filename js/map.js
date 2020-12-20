// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['mm-tn', 501],
    ['mm-np', 426],
    ['mm-mo', 2061],
    ['mm-ra', 4055],
    ['mm-ay', 4146],
    ['mm-ch', 168],
    ['mm-mg', 2347],
    ['mm-sh', 674],
    ['mm-kh', 35],
    ['mm-kn', 963],
    ['mm-kc', 468],
    ['mm-sa', 1513],
    ['mm-ba', 6898],
    ['mm-md', 11425],
    ['mm-ya', 79314],

];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/mm/mm-all'
    },

    title: {
        text: 'COVID-19 Situation in Myanmar'
    },

    subtitle: {
               text: 'Press each state & division to see data'
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