const nodes = [
    {id:'桂林'}, 
    {id:'广州'}, 
    {id:'厦门'}, 
    {id:'杭州'}, 
    {id:'上海'}, 
    {id:'青岛'},
    {id:'天津'} 
];
const edges = [
    {source: 0, target: 1},
    {source: 0, target: 2},
    {source: 0, target: 3},
    {source: 1, target: 4},
    {source: 1, target: 5},
    {source: 1, target: 6}
];
const svg = d3.select("svg#render")
    .append("g");
const colorScale = d3.scaleOrdinal()
    .domain(d3.range(nodes.length))
    .range(d3.schemeCategory10)

const ticked = () => {
    links.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
    linksText.attr("x", d => (d.source.x + d.target.x) / 2)
        .attr("y", d => (d.source.x + d.target.y) / 2);
    gs.attr("transform", d => `translate(${d.x}, ${d.y})`);
}

const started = d => {
    if (!d3.event.active){
        forceSimulation.alphaTarget(0.8).restart();
    }
    d.fx = d.x;
    d.fy = d.y;
}

const dragged = d => {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

const ended = d => {
    if (!d3.event.active) {
        forceSimulation.alphaTarget(0);
    }
    d.fx = null;
    d.fy = null;
}

// svg.attr("width", 960)
//     .attr("height", 600);
const forceSimulation = d3.forceSimulation()
    .force("link",d3.forceLink())
    .force("charge",d3.forceManyBody())
    .force("center",d3.forceCenter());
forceSimulation.nodes(nodes)
    .on("tick", ticked);
forceSimulation.force("link")
    .links(edges)
    .distance(d => 100);
forceSimulation.force("center")
    .x(500)
    .y(500);
console.log({nodes, edges});

const links = svg.append("g")
    .selectAll("line")
    .data(edges)
    .enter()
    .append("line")
    .attr("stroke-width", 1);

const linksText = svg.append('g')
    .selectAll("text")
    .data(edges)
    .enter()
    .append("text")
    .text(d => ``);

const gs = svg.selectAll(".circleText")
    .data(nodes)
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(${d.x}, ${d.y})`)
    .call(
        d3.drag()
            .on("start", started)
            .on("drag", dragged)
            .on("end", ended)
    );

gs.append("circle")
    .attr("r", 10)
    .attr("fill", (d, i) => colorScale(i));

gs.append("text")
    .attr("x", -10)
    .attr("y", -20)
    .attr("dy", 10)
    .text(d => d.name);


