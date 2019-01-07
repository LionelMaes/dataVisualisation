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

var dataset = [80,100,56,120,180,30,40,120,160];

var svgWidth = 500, svgHeight = 300, barPadding =3;
var barWidth = (svgWidth/svgHeight);

var svg = d3.select('svg')
    .attr("width",svgWidth)
    .attr("height",svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append('rect')
    .attr("y",function (value) {
        return svgHeight-value
    })
    .attr('height',function (value) {
        return value
    })
    .attr("width", barWidth-barPadding)
    .attr('transform',function (value,position) {
        var translate = [barWidth*position];
        console.log(translate);
        return "translate(" + translate + ")"
    });



