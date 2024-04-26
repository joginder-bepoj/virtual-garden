/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = ({ heading, data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 70, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create the color scale.
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

    // Create the pie layout and arc generator.
    const pie = d3.pie()
      .sort(null)
      .value(d => d.value);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(Math.min(width, height) / 2 - 1);

    const labelRadius = arc.outerRadius()() * 1.3;

    // A separate arc generator for labels.
    const arcLabel = d3.arc()
      .innerRadius(labelRadius)
      .outerRadius(labelRadius);

    const arcs = pie(data)

    // Create the SVG container.
    const svg = d3.select(svgRef.current)
      .attr("width", width - 210)
      .attr("height", height)

      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; ");

    // Add a sector path for each value.
    svg.append("g")
      .attr("stroke", "white")
      .selectAll()
      .data(arcs)
      .join("path")
      .attr('fill', (d, i) => d.data.color)
      // .attr("fill", d => color(d.data.color))
      .attr("d", arc)
      .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString("en-US")}`);

    // Add a heading
    svg.append("text")
      .attr("x", 0)
      .attr("y", -height / 2 - 70) // Adjust the y-position
      .attr("text-anchor", "middle")
      .attr("font-size", "3em")
      .text(heading);


    // for percent
    svg.append("g")
      .selectAll()
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .attr("dy", "0.25em")
      .attr("dx", "-1em")
      .attr("font-size", "24px")
      .attr("style", "fill:#03a5fc ")
      .attr("text-anchor", "middle")
      .text(d => `${d.data.value}`);

    // Add labels for each data point inside the pie chart
    svg.append("g")
      .selectAll()
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .attr("dy", "1.25em")
      .attr("dx", "-1em")
      .attr("font-size", "18px")
      .attr("text-anchor", "middle")
      .text(d => d.data.name);

  }, [data, heading]);

  return (
    <div className='p-3 d-flex justify-content-center align-items-center'>
      <svg ref={svgRef} viewBox="0 0 600 250"></svg>
    </div>
  );
};

export default PieChart;
