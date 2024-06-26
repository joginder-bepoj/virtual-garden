/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DayGraph = ({data}) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define the SVG dimensions and margins
    const margin = { top: 20, right: 20, bottom: 70, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Create scales for x and y
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Create and append the SVG group element
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create bars
    g.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.date))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value))
      .attr("fill", (d) => '#00CADC');

    // Create x-axis
    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Create y-axis
    g.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(yScale));


    // Cleanup on unmount
    return () => {
      svg.selectAll("*").remove();
    };
  }, [data]);

  return (
    <div className='p-3  d-flex justify-content-center align-items-center'>
      <svg ref={svgRef} viewBox="0 0 600 260" />
    </div>
  );
};

export default DayGraph;
