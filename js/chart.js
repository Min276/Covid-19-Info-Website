
  var xAxisCatEnco = JSON.parse(`["Dec 1","Dec 2","Dec 3","Dec 4","Dec 5","Dec 6","Dec 7","Dec 8","Dec 9","Dec 10","Dec 11","Dec 12","Dec 13","Dec 14","Dec 15","Dec 16","Dec 17","Dec 18","Dec 19","Dec 20","Dec 21","Dec 22","Dec 23","Dec 24","Dec 25","Dec 26","Dec 27","Dec 28","Dec 29","Dec 30","Dec 31","Jan 1","Jan 2","Jan 3"]`);
        
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
    data: [18959,19680,22719,21390,23300,18541,19379,23348,20826,22241,20929,24099,18564,19115,23874,23109,23188,24501,22590,20526,21018,23485,23072,21515,19543,20143,16607,19108,18098,17010,24007,15735,15972,17662],
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
    data: [1476,1411,1418,1502,1527,1108,1276,1308,1427,1321,1376,1352,1127,1170,1155,1233,1182,1116,989,947,848,964,923,919,758,734,606,648,619,587,890,412,574,729]
  }, {
    name: 'Recovered Cases',
    data: [1187,1258,1147,1225,1409,1254,1604,1486,989,1098,1525,1068,1389,1336,1287,1035,1084,1379,1202,1269,1298,1134,1506,602,1013,1223,1060,1128,928,842,948,708,883,888],
    color: "#66a832"

  }, {
    name: 'Death Toll',
    data: [31,26,30,31,22,29,22,19,23,27,19,25,23,24,27,27,31,21,26,19,22,19,23,25,20,27,22,17,19,27,18,15,14,17],
    color: "red"
  }]
});

