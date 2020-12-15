// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['mm-tn', 402],
    ['mm-np', 426],
    ['mm-mo', 1539],
    ['mm-ra', 3744],
    ['mm-ay', 3092],
    ['mm-ch', 115],
    ['mm-mg', 1592],
    ['mm-sh', 450],
    ['mm-kh', 21],
    ['mm-kn', 702],
    ['mm-kc', 235],
    ['mm-sa', 893],
    ['mm-ba', 5507],
    ['mm-md', 6505],
    ['mm-ya', 68377],

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