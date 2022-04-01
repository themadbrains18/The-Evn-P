import * as d3 from 'd3';
import { useEffect } from 'react';

const colors = ['#1f78b4', '#66b2e6', '#2ba02d ', '#70d670', '#17bed0', '#ff800f', '#ffb26e','#17bed0', '#ff800f', '#ffb26e'];

const donutData: any = [
    { name: "20%", value: 20, label: 'Persistent Compressor' },
    { name: "9%", value: 9, label: 'Intermittent Compressor' },
    { name: "18%", value: 18, label: 'Persistent Tank' },
    { name: "22%", value: 20, label: 'Intermittent Tank' },
    { name: "2%", value: 2, label: 'Persistent Separator' },
    { name: "3%", value: 3, label: 'Intermittent Separator' },
    { name: "4%", value: 4, label: 'Persistent Other' },
    { name: "6%", value: 6, label: 'Intermittent Other' },
    { name: "10%", value: 10, label: 'Persistent Flare' },
    { name: "7%", value: 7, label: 'Intermittent Flare' },

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
            entryAnimation: 1000
        };

        let pie: any = d3.pie()
            .value((d: any) => d.value)
            .sort(null);

        let data_ready: any = pie(donutData);

        let angleInterpolation = d3.interpolate(pie.startAngle()(), pie.endAngle()());

        // Arc generator
        var arc:any = d3.arc()
            .innerRadius(radius / 1.75)  // This is the size of the donut hole
            .outerRadius(radius);
            
        // Create SVG
        const svg: any = d3.select("#chart")
            .append('svg')
            .attr("class", "tooltip-donut")
            .attr("width", '530px')
            .attr("height", '398px')
            .attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('preserveAspectRatio', 'xMinYMin')
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            

        // svg annimation
        svg
            .selectAll('path')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', (d: any) => colors[d.index])
            .attr("stroke", "#fff")
            .style("stroke-width", "2")
            .style("opacity", "1")
            .transition()
            .duration(durations.entryAnimation)
            .attrTween("d", (d: any) => {
                let originalEnd = d.endAngle;
                return (t: any) => {
                    let currentAngle = angleInterpolation(t);
                    if (currentAngle < d.startAngle) {
                        return "";
                    }
                    d.endAngle = Math.min(currentAngle, originalEnd);
                    return legendPosition(d);
                };
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
            .style("font-size", 10)
            .transition()
            .duration(durations.entryAnimation);

        var tooltip = d3.select("#chart")
            .append('div')
            .attr('class', 'tooltip')
            .style('position','absolute')
            .style('visibility','hidden')
            .style('background-color', 'white');
        
        svg
        .on('mouseover', function(d:any) {
			tooltip.text(d.path[0].__data__.data.label).style('color','black');
			tooltip.style('display', 'block');
			tooltip.style('opacity',2);
            tooltip.style('visibility','visible');
            tooltip.style('top',d.screenX - d.offsetX+'px');
            tooltip.style('left',d.screenY - d.offsetY+'px');
		})
        .on('mouseout',function(d:any){
            tooltip.text('').style('color','black');
			tooltip.style('display', 'block');
			tooltip.style('opacity',2);
            tooltip.style('visibility','hidden');
        });

        
    }

    return (
        <>
            <div id="chart"></div>
        </>
    )
}

export default DonutChartComp;