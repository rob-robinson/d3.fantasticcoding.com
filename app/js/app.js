var w = 300;
var h = 100;
var padding = 2;
var dataset = [4,6,8,9,10];
var svg = d3.select("body").append("svg")
    .attr("width",w)
    .attr("height",h);

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
        x:function(d,i){
            return i * (w / dataset.length);
        },
        y : function(d){
            return h - (d);
        },
        width : w/dataset.length - padding,
        height : function(d){
            return d;
        }
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){return d;})
    .attr({
        "text-anchor":"middle",
        x: function(d,i){return i*(w/dataset.length)+(w/dataset.length - padding) /2;},
        y: function(d) {return h - (d*4)+14; },
        "font-family":"sans-serif",
        "font-size":12,
        "fill":"#000000"
    });
