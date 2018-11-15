const nodes = [
    {name:'桂林'}, 
    {name:'广州'}, 
    {name:'厦门'}, 
    {name:'杭州'}, 
    {name:'上海'}, 
    {name:'青岛'},
    {name:'天津'} 
];
const edges = [
    {source: 0, target: 1},
    {source: 0, target: 2},
    {source: 0, target: 3},
    {source: 1, target: 4},
    {source: 1, target: 5},
    {source: 1, target: 6}
];

const svg = d3.select("svg#render");
svg.attr("x", 300)
    .attr("y", 300)
    .attr("width", 1000)
    .attr("height", 1000);
const force = d3.forceSimulation().force()
    .nodes(nodes)
    .edges(edges)
    .size([300, 300])
    .linkDistance(100)
    .charge([-100]);
force.start();
