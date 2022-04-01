import * as d3 from 'd3';
import { useEffect } from 'react';

const colors = ['#1f78b4', '#66b2e6', '#2ba02d ', '#70d670', '#17bed0', '#ff800f', '#ffb26e'];

const donutData: any = [
    { name: "20%", value: 19, label:'abc' },
    { name: "9%", value: 20, label:'abc' },
    { name: "18%", value: 19, label:'abc' },
    { name: "22%", value: 24, label:'abc' },
    { name: "2%", value: 22, label:'abc' },
    { name: "3%", value: 29, label:'abc' },
    { name: "10%", value: 22, label:'abc' },

];



const DonutChartComp = () => {

    useEffect(() => {
        drawChart()
    }, []);

    const drawChart = () => {
        d3.select("#chart").html("");
        const width: any = 530;
        const height: any = 398;
        const margin: any = 15;
        let radius: any = Math.min(width, height) / 2 - margin;
        // legend Position
        let legendPosition: any = d3.arc().innerRadius(radius / 1.75).outerRadius(radius);
        
        let durations = {
            entryAnimation: 2000
        };

        let pie: any = d3.pie()
            .value((d: any) => d.value)
            .sort(null);

        let data_ready: any = pie(donutData);

        let angleInterpolation = d3.interpolate(pie.startAngle()(), pie.endAngle()());
        
        // Arc generator
        var arc =d3.arc()
            .innerRadius(radius / 1.75)  // This is the size of the donut hole
            .outerRadius(radius)  

        // Another arc that won't be drawn. Just for labels positioning
        var outerArc = d3.arc()
            .innerRadius(radius * 0.9)
            .outerRadius(radius * 0.9)

        // Create SVG
        const svg: any = d3.select("#chart")
            .append('svg')
            .attr("width", '530px')
            .attr("height", '398px')
            .attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
            

        // Donut partition  
        svg
            .selectAll('path')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', (d: any) => colors[d.index])
            .attr("stroke", "#fff")
            .style("stroke-width", "2")
            .style("opacity", "1");    
        
        // svg annimation
        svg
            .transition()
            .duration(durations.entryAnimation)
            .attrTween("d", (d:any) => {
                let originalEnd = d.endAngle;
                return (t:any) => {
                    let currentAngle = angleInterpolation(t);
                    if (currentAngle < d.startAngle) {
                    return "";
                    }

                    d.endAngle = Math.min(currentAngle, originalEnd);
                    return legendPosition(d);
                };
            });     

        // Add the polylines between chart and labels:
        svg
            .selectAll('allPolylines')
            .data(data_ready)
            .enter()
            .append('polyline')
              .attr("stroke", "black")
              .style("fill", "none")
              .attr("stroke-width", 1)
              .attr('points', function(d:any) {
                var posA = arc.centroid(d) // line insertion in the slice
                var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
                var posC = outerArc.centroid(d); // Label position = almost the same as posB
                var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
                posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
                return [posA, posB, posC]
              });    

        // Add labels:
        svg
            .selectAll('allLabels')
            .data(data_ready)
            .enter()
            .append('text')
            .text( function(d:any) { console.log(d.data.label) ; return d.data.label } )
            .attr('transform', function(d:any) {
                var pos = outerArc.centroid(d);
                var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
                return 'translate(' + pos + ')';
            })
            .style('text-anchor', function(d:any) {
                var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                return (midangle < Math.PI ? 'start' : 'end')
            });      

        


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
        // svg
            //     .selectAll('.legend-g')
            //     .append('text')
            //     .text((d: any) => { return d.data.value })
            //     .style("fill", '#444')
            //     .style("font-size", 12)
            //     .style("text-anchor", "middle")
            //     .attr("y", 16);

        
             
    }

    return (
        <>
            <div id="chart"></div>
        </>
    )
}

export default DonutChartComp;