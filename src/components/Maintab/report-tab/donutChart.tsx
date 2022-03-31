import * as d3 from 'd3';
import { useEffect } from 'react';

const colors = ['#1f78b4', '#66b2e6', '#2ba02d ', '#70d670', '#17bed0', '#ff800f', '#ffb26e'];

const donutData: any = [
    { name: "20%", value: 19 },
    { name: "9%", value: 20 },
    { name: "18%", value: 19 },
    { name: "22%", value: 24 },
    { name: "2%", value: 22 },
    { name: "3%", value: 29 },
    { name: "10%", value: 22 },

];;

const DonutChartComp = () => {

    useEffect(() => {
        drawChart()
    }, []);

    const drawChart = () => {
        const width: any = 530;
        const height: any = 398;
        const margin: any = 15;
        let radius: any = Math.min(width, height) / 2 - margin;
        // legend Position
        let legendPosition: any = d3.arc().innerRadius(radius / 1.75).outerRadius(radius);

        // Create SVG
        const svg: any = d3.select("#chart")
            .append('svg')
            .attr("width", '530px')
            .attr("height", '398px')
            .attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('preserveAspectRatio','xMinYMin')
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        let pie: any = d3.pie()
            .value((d: any) => d.value)
        let data_ready: any = pie(donutData);

        // Donut partition  
        svg
            .selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(radius / 1.75)  // This is the size of the donut hole
                .outerRadius(radius)
            )
            .attr('fill', (d: any) => colors[d.index])
            .attr("stroke", "#fff")
            .style("stroke-width", "2")
            .style("opacity", "1")


        // Legend group and legend name 
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('g')
            .attr("transform", (d: any) => `translate(${legendPosition.centroid(d)})`)
            .attr("class", 'legend-g')
            .style("user-select", "none")
            .append('text')
            .text((d: any) => d.data.name)
            .style("text-anchor", "middle")
            .style("font-weight", 700)
            .style("fill", '#222')
            .style("font-size", 14);

        //Label for value
        svg
            .selectAll('.legend-g')
            .append('text')
            .text((d: any) => { return d.data.value })
            .style("fill", '#444')
            .style("font-size", 12)
            .style("text-anchor", "middle")
            .attr("y", 16);
    }

    return (
        <>
            <div id="chart"></div>
        </>
    )
}

export default DonutChartComp;