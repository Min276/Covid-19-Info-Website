// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['mm-tn', 494],
    ['mm-np', 426],
    ['mm-mo', 2032],
    ['mm-ra', 4029],
    ['mm-ay', 4070],
    ['mm-ch', 115],
    ['mm-mg', 2278],
    ['mm-sh', 656],
    ['mm-kh', 32],
    ['mm-kn', 911],
    ['mm-kc', 448],
    ['mm-sa', 1458],
    ['mm-ba', 6744],
    ['mm-md', 10791],
    ['mm-ya', 78400],

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