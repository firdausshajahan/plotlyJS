$(document).ready(function(){

    $.getJSON("output.json", function( data ) {
        //load json data and assign variable to x and y axis and set chart type
        var chartData = [{
            x: data[0],
            y: data[1],
            type: 'line'
        }];

        //create chart
        Plotly.newPlot('chart1', chartData);
    });  
      
});
