import * as d3 from 'd3';
import { useEffect } from 'react';

var dataset: any = [
    { month: "Comressor", pizzas: 7000 },
    { month: "Flare ", pizzas: 8000 },
    { month: "Other ", pizzas: 2000 },
    { month: "Separator ", pizzas: 6000 },
    { month: "Tank", pizzas: 20000 },
    { month: "Well", pizzas: 5000 },
];
const BarChart = () => {
    useEffect(() => {
        DrawChart()
    }, []);
    const DrawChart = () => {
        // Notice the change of dataset
        // Calculate Margins and canvas dimensions
        var margin = { top: 40, right: 40, bottom: 40, left: 60 },
            width = 450 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;
        // Notice the change of Scale to Band and how the scale now starts at zero
        var x: any = d3.scaleBand()
            .range([0, width])
            .padding(0.1);
        var y: any = d3.scaleLinear()
            .range([height, 0]);
        var svg = d3.select("#barChart").append("svg")
            .style("background-color", '#fff')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        x.domain(dataset.map(function (d: any) { return d.month; }));
        y.domain([0, d3.max(dataset, function (d: any) {
            return d.pizzas;
        }), 50000]);
        // Axes
        svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        svg.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y));
        // Labels
        svg.append("text")
            .attr("text-anchor", "middle")
            .style("font-size", "14px")
            .attr("transform", "translate(" + (margin.left - 108) + "," + (height / 2) + ")rotate(-90)")
            .text("Total Emissions (scfh)");
        svg.append("text")
            .style("font-size", "14px")
            .attr("text-anchor", "middle")
            .attr("transform", "translate(" + (width / 2) + "," + (height - (margin.bottom - 74)) + ")")
            .text("Equipment");
        //  Chart Title
        // svg.append("text")
        //     .attr("x", (width / 2))
        //     .attr("y", 20 - (margin.top / 2))
        //     .attr("text-anchor", "middle")
        //     .style("font-size", "16px")
        // Adding Bars
        svg.selectAll(".bar")
            .data(dataset)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d: any) { return x(d.month); })
            .attr("width", x.bandwidth())
            .attr("y", function (d: any) { return y(d.pizzas); })
            .attr("height", function (d: any) { return height - y(d.pizzas); });
    }
    return (
        <>
            <div id="barChart"></div>
        </>
    )
}
export default BarChart;