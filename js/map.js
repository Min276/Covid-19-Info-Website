// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['mm-tn', 634],
    ['mm-np', 1204],
    ['mm-mo', 3107],
    ['mm-ra', 4229],
    ['mm-ay', 5797],
    ['mm-ch', 330],
    ['mm-mg', 3431],
    ['mm-sh', 1041],
    ['mm-kh', 71],
    ['mm-kn', 1307],
    ['mm-kc', 837],
    ['mm-sa', 2642],
    ['mm-ba', 9046],
    ['mm-md', 16727],
    ['mm-ya', 86646],

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
               text: '<strong>Last Updated on SUN 24.1.2021</strong> <br> Press each state & division to see data'

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