
  var xAxisCatEnco = JSON.parse(`["Dec 1","Dec 2","Dec 3","Dec 4","Dec 5","Dec 6","Dec 7","Dec 8","Dec 9","Dec 10","Dec 11","Dec 12","Dec 13","Dec 14","Dec 15"]`);
        
  Highcharts.chart('daily_analytics_chart', {
  chart: {
    type: 'area'
  },
  title: {
    text: 'COVID-19 Tests per Day'
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
    data: [18959,19680,22719,21390,23300,18541,19379,23348,20826,22241,20929,24099,18564,19115,23874],
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
    data: [1476,1411,1418,1502,1527,1108,1276,1308,1427,1321,1376,1352,1127,1170,1155]
  }, {
    name: 'Recovered Cases',
    data: [1187,1258,1147,1225,1409,1254,1604,1486,989,1098,1525,1068,1389,1336,1287],
    color: "#66a832"

  }, {
    name: 'Death Toll',
    data: [31,26,30,31,22,29,22,19,23,27,19,25,23,24,27],
    color: "red"
  }]
});

