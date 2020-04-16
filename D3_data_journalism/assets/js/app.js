var svgWidth = 1140;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 60,
    left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper.
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("assets/data/data.csv").then(function (censusData) {

    // Convert Data from string to number
    censusData.forEach(function (data) {
        data.healthcare = +data.healthcare;
        data.poverty = +data.poverty;
        data.income = +data.income;
    });

    // Create scale functions
    var xLinearScale = d3.scaleLinear()
        .domain([8, d3.max(censusData, d => d.poverty) + 2])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(censusData, d => d.healthcare) + 2])
        .range([height, 0]);

    // Create axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Append Axes to the chart
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .call(leftAxis);

    // Create axes labels
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 40)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "axisText")
        .text("Lacks Healthcare (%)");

    chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
        .attr("class", "axisText")
        .text("In Poverty (%)");

    // Create Circles
    var circlesGroup = chartGroup.selectAll("circle")
        .data(censusData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d => yLinearScale(d.healthcare))
        .attr("label", d => d.abbr)
        .attr("r", "15")
        .attr("class", "stateCircle");

    // Include state abbreviations in the circles. 
    chartGroup.selectAll()
        .data(censusData)
        .enter()
        .append("text")
        .attr("x", d => xLinearScale(d.poverty))
        .attr("y", d => yLinearScale(d.healthcare))
        .text(function (d) { return d.abbr; })
        .attr("class", "stateText");

    //Initialize tool tip
    var toolTip = d3.tip()
        .attr("class", "d3-tip")
        .offset([80, -60])
        .html(function (d) {
            return (`<b>${d.state}</b><hr>Poverty: ${d.poverty}%<br>Healthcare: ${d.healthcare}%`);
        });

    // Create tooltip in the chart
    chartGroup.call(toolTip);

    // Create event listeners to display and hide the tooltip
    circlesGroup
        .on("mouseenter", function (data) {
            toolTip.show(data, this);
        })
        .on("mouseleave", function (data) {
            toolTip.hide(data);
        });

}).catch(function (error) {
    console.log(error);
});
