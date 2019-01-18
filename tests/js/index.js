//oefening 1
/*
d3.select('body').append('h1').text("this is a h1");

d3.select('h1').append('p').text('this is a paragraph');
d3.select('h1').append('p').text('this is a third paragraph');

d3.select('p').style('color','red');

d3.select('h1').append('p').text('this is a second paragraph');
*/

// oefening 2

/*var dataset = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataset)//data moet precies een array zijn
    .enter()//for each loop in the data
    .append('p')
    // .text('d3 is awesome!!')
    .text(function (value,position) {
        return value +" " + position ;
    });*/
//first param is the value , second the position in the array


//==========  oefening3

/*
var dataset = [80,100,56,120,180,30,40,120,160];

var svgWidth = 500, svgHeight = 300, barPadding = 3;
var barWidth = (svgWidth/dataset.length);

var svg = d3.select('svg')
    .attr("width",svgWidth)
    .attr("height",svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y",function (value) {
        console.log(svgHeight-value);
        return svgHeight-value
    })
    .attr("height",function (value) {
        return value
    })
    .attr("width", barWidth-barPadding)
    .attr("transform",function (value,position) {
        var translate = [barWidth*position,0];
        return "translate(" + translate + ")"
    });

//========== oefening 4 add labels

var  text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (value) {
        return value
    })
    .attr("y",function (value) {
        return svgHeight - value - 2
    })
    .attr("x",function (value,position) {
        return barWidth * position + 15;
    })
    .attr("fill","#a64c38");
*/

//==============    oefening 5

// var dataset = [80,100,56,120,180,30,40,120,160];
/*
var dataset = [1,2,3,4,5];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - yScale(d)
    })
    .attr("height", function(d) {
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });
*/

/*================      oefening 6 */
//
// d3.axisTop();
// d3.axisRight();
// d3.axisBottom();
// d3.axisLeft();

/*
var data = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / data.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, svgWidth]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([svgHeight,0]);

var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);

svg.append("g")
    .attr("transform", "translate(50,-20)")
    .call(y_axis);

var xAxisTranslate = svgHeight -20;

svg.append("g")
    .attr("transform","translate(50," + xAxisTranslate + ")")
    .call(x_axis);

var barChart = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - yScale(d)
    })
    .attr("height", function(d) {
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });

*/
//=========================             oefening7



/*

var svgWidth = 600, svgHeight = 500;
var svg = d3.select('svg')
    .attr("width",svgWidth)
    .attr("height", svgHeight)
    .attr("class","svg-container");

var line = svg.append("line")
    .attr("x1",100)
    .attr("x2",500)
    .attr("y1",50)
    .attr("y2",50)
    .attr("stroke","red")
    .attr("stroke-width",2);

let rect = svg.append('rect')
    .attr("x",100)
    .attr("y",100)
    .attr("width",200)
    .attr("height",100)
    .attr("fill","#9895ff");

var circle = svg.append('circle')
    .attr('cx', 200)
    .attr("cy",300)
    .attr("r",50)
    .attr("fill","red");*/

//==============          oefnening 8    piechart

// javascript
/*var data = [
    {"platform": "Android", "percentage": 40.11},
    {"platform": "Windows", "percentage": 19},
    {"platform": "iOS", "percentage": 13.06},
    {"platform": "george", "percentage": 15}
];

var svgWidth = 500, svgHeight = 300, radius =  Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Create group element to hold pie chart
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")") ;

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d) {
    return d.percentage;
});

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .attr("fill", function(value) { return color(value.data.percentage); });

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);
arc.append("text")
    .attr("transform", function(value) {
        return "translate(" + label.centroid(value) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(value) {
        console.log(value);
        return value.data.platform+":"+value.data.percentage+"%";
    });*/


// =============================   Linechart

const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';
// const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-12-01&end=2019-01-01';

//load data when from api when dom content has been loaded

document.addEventListener("DOMContentLoaded",function (event) {
    fetch(api)
        .then(function (result) {
            return result.json();
        })
        .then(function (data) {
            var parsedData =  parseData(data);
            drawChart(parsedData);
        })
        .catch(function (error) {
            console.log(error)
        })
});

//parse the data into key value pairs
function parseData(data){
    var arr = [];
    for (var i in data.bpi){
        arr.push({
            "date": new Date(i),//date
            "value": +data.bpi[i] //convert string to number
        });
    }
    console.log(arr);
    return arr
}


//create the chart
function drawChart(data) {
    var svgWidth = 600,svgHeight = 400;
    var margin = {
        top : 20,
        left:50,
        bottom: 30,
        right:50
    }
    var width = svgWidth - margin.left -margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    var svg = d3.select('svg')
        .attr("width",svgWidth)
        .attr("height",svgHeight);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime()
        .rangeRound([0,width +600]);
    console.log(width);

    var y = d3.scaleLinear()
        .rangeRound([height,0]);

    var line = d3.line()
        .x(function (d) {
            return x(d.date)
        })
        .y(function (d) {
            return y(d.value)
        });
    x.domain(d3.extent(data, function (d) {
        return d.date
    }));
    y.domain(d3.extent(data,function (d) {
        return d.value
    }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("transform","rotate(-90)")
        .attr("y","6")
        .attr("dy","0.71em")
        .attr("text-anchor","end")
        .text("Price($)");

    g.append("path")
        .datum(data)
        .attr("id", "data")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", "1.5")
        .attr("d", line);
}


// https://www.youtube.com/watch?v=C4t6qfHZ6Tw