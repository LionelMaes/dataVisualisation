let url = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01&currency=EUR';
let svg;

//load data when from api when dom content has been loaded
document.addEventListener("DOMContentLoaded", function (event) {
    callTheApi(url);
});

//data ophalen van de api
function callTheApi(url) {
    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function (data) {
            var parsedData = parseData(data);
            drawChart(parsedData);
        })
        .catch(function (error) {
            console.log(error)
        })
}

//parse the data into key value pairs
function parseData(data) {
    let arr = [];
    for (var i in data.bpi) {
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
    let svgWidth = 600, svgHeight = 400;
    let margin = {
        top: 20,
        left: 50,
        bottom: 30,
        right: 50
    };
    let width = svgWidth - margin.left - margin.right;
    let height = svgHeight - margin.top - margin.bottom;

    svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr("id","chart");

    let g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let x = d3.scaleTime()
        .rangeRound([0, width + 600]);
    console.log(width);

    let y = d3.scaleLinear()
        .rangeRound([height, 0]);

    let line = d3.line()
        .x(function (d) {
            return x(d.date)
        })
        .y(function (d) {
            return y(d.value)
        });
    x.domain(d3.extent(data, function (d) {
        return d.date
    }));
    y.domain(d3.extent(data, function (d) {
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
        .attr("transform", "rotate(-90)")
        .attr("y", "6")
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Price(€)");

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

//make new chart with input of the form
document.getElementById("btnSubmit").addEventListener("click", function (e) {
    e.preventDefault();
    let beginDate = document.getElementById("beginDate").value;
    let endDate = document.getElementById("endDate").value;
    let currency = document.getElementById("currency").value;
    let title;

    if(beginDate === "" || endDate === ""){
        formNotFilled();
    }
    else {
        svg.selectAll("*").remove();
        url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + beginDate.toString() + "&end=" + endDate.toString() + "&currency=" + currency.toString();
        callTheApi(url);
        document.getElementById("beginDate").value = "";
        document.getElementById("endDate").value = "";
        if (currency.toString() === "EUR") {
            title = "Euro";
        } else if (currency.toString() === "USD") {
            title = "Dollar";
        } else if (currency.toString() === "JPY") {
            title = "Yen";
        } else if (currency.toString() === "SHP") {
            title = "Pound";
        }
        document.getElementById("title").innerHTML = "Bitcoin waarde in " + title;
        d3.selectAll("p").remove();
    }
});
//als de form niet ingevuld is een error doorsturen
function formNotFilled() {
    d3.select("#err")
        .append("p")
        .style("color", "red")
        .text("fill the form completly in please");
    document.getElementById("#err").scrollIntoView({block: "end"});
}

//bron: https://www.youtube.com/watch?v=C4t6qfHZ6Tw