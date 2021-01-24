
  var xAxisCatEnco = JSON.parse(`["Jan 1","Jan 2","Jan 3","Jan 4","Jan 5","Jan 6","Jan 7","Jan 8","Jan 9","Jan 10","Jan 11","Jan 12","Jan 13","Jan 14","Jan 24"]`);
        
  Highcharts.chart('daily_analytics_chart', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'COVID-19 Tests per Day'
  },
  subtitle: {
               text: 'Press each dot to view in details'
    },
  xAxis: {
    categories: xAxisCatEnco
  },
  credits: {
    enabled: false
  },
   yAxis: {
                title: {
                    text: 'Amount of Lab Tests'
                }
            },
  series: [{
    name: 'Tests per day',
    data: [24007,15735,15972,17662,16990,19770,17279,18953,20164,19806,17343,18257,21739,17827,18706],
    color: "black"
  }]
});
  Highcharts.chart('daily_analytics_chart1', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'COVID-19 Cases per Day'
  },
  subtitle: {
               text: 'Press each labeled dot to remove'
    },
  xAxis: {
    categories:  xAxisCatEnco
  },
  credits: {
    enabled: false
  },
   yAxis: {
                title: {
                    text: 'Amount of Cases'
                }
            },
  series: [{
    name: 'Confirmed Cases',
    data: [412,574,729,590,647,596,594,711,566,555,582,551,523,605,476]
  }, {
    name: 'Recovered Cases',
    data: [708,883,888,652,605,596,647,828,674,499,560,452,560,479,434],
    color: "#66a832"

  }, {
    name: 'Death Toll',
    data: [15,14,17,16,22,19,14,13,14,20,12,20,24,10,17],
    color: "red"
  }]
});

