// Indian Stock Market Data
const mstEdges = [
  {stock1: "RELIANCE", stock2: "HCLTECH", distance: 0.312036, correlation: 0.687964},
  {stock1: "TCS", stock2: "INFY", distance: 0.103706, correlation: 0.896294},
  {stock1: "TCS", stock2: "LT", distance: 0.320446, correlation: 0.679554},
  {stock1: "TCS", stock2: "HCLTECH", distance: 0.058592, correlation: 0.941408},
  {stock1: "HDFCBANK", stock2: "SBIN", distance: 0.106217, correlation: 0.893783},
  {stock1: "HDFCBANK", stock2: "BHARTIARTL", distance: 0.324200, correlation: 0.675800},
  {stock1: "INFY", stock2: "ICICIBANK", distance: 0.305245, correlation: 0.694755},
  {stock1: "ICICIBANK", stock2: "SBIN", distance: 0.109804, correlation: 0.890196},
  {stock1: "ICICIBANK", stock2: "AXISBANK", distance: 0.073108, correlation: 0.926892},
  {stock1: "HINDUNILVR", stock2: "ITC", distance: 0.227562, correlation: 0.772438},
  {stock1: "HINDUNILVR", stock2: "KOTAKBANK", distance: 0.349876, correlation: 0.650124},
  {stock1: "ITC", stock2: "NESTLEIND", distance: 0.083843, correlation: 0.916157},
  {stock1: "ITC", stock2: "HCLTECH", distance: 0.323664, correlation: 0.676336},
  {stock1: "SBIN", stock2: "KOTAKBANK", distance: 0.139617, correlation: 0.860383},
  {stock1: "SBIN", stock2: "WIPRO", distance: 0.334009, correlation: 0.665991},
  {stock1: "BAJFINANCE", stock2: "ULTRACEMCO", distance: 0.329973, correlation: 0.670027},
  {stock1: "KOTAKBANK", stock2: "BAJFINANCE", distance: 0.346859, correlation: 0.653141},
  {stock1: "LT", stock2: "MARUTI", distance: 0.319783, correlation: 0.680217},
  {stock1: "HCLTECH", stock2: "ULTRACEMCO", distance: 0.308933, correlation: 0.691067},
  {stock1: "ASIANPAINT", stock2: "MARUTI", distance: 0.272841, correlation: 0.727159},
  {stock1: "MARUTI", stock2: "M&M", distance: 0.256635, correlation: 0.743365},
  {stock1: "SUNPHARMA", stock2: "ULTRACEMCO", distance: 0.303819, correlation: 0.696181},
  {stock1: "TITAN", stock2: "TATASTEEL", distance: 0.228851, correlation: 0.771149},
  {stock1: "POWERGRID", stock2: "NTPC", distance: 0.292249, correlation: 0.707751}
];

const centralityMeasures = [
  {Stock: "ICICIBANK", Sector: "Banking", Degree_Centrality: 0.125000, Betweenness_Centrality: 0.583333, Eigenvector_Centrality: 0.147851},
  {Stock: "HCLTECH", Sector: "IT", Degree_Centrality: 0.208333, Betweenness_Centrality: 0.565217, Eigenvector_Centrality: 0.577509},
  {Stock: "TCS", Sector: "IT", Degree_Centrality: 0.125000, Betweenness_Centrality: 0.554348, Eigenvector_Centrality: 0.369688},
  {Stock: "INFY", Sector: "IT", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.521739, Eigenvector_Centrality: 0.205699},
  {Stock: "SBIN", Sector: "Banking", Degree_Centrality: 0.125000, Betweenness_Centrality: 0.518116, Eigenvector_Centrality: 0.096497},
  {Stock: "ULTRACEMCO", Sector: "Cement", Degree_Centrality: 0.125000, Betweenness_Centrality: 0.365942, Eigenvector_Centrality: 0.394743},
  {Stock: "SUNPHARMA", Sector: "Pharma", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.289855, Eigenvector_Centrality: 0.047713},
  {Stock: "NTPC", Sector: "Utilities", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.228261, Eigenvector_Centrality: 0.023544},
  {Stock: "ITC", Sector: "FMCG", Degree_Centrality: 0.125000, Betweenness_Centrality: 0.163043, Eigenvector_Centrality: 0.229351},
  {Stock: "POWERGRID", Sector: "Utilities", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.159420, Eigenvector_Centrality: 0.011520},
  {Stock: "HDFCBANK", Sector: "Banking", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.159420, Eigenvector_Centrality: 0.047214},
  {Stock: "BHARTIARTL", Sector: "Telecom", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.083333, Eigenvector_Centrality: 0.022288},
  {Stock: "AXISBANK", Sector: "Banking", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.083333, Eigenvector_Centrality: 0.069791},
  {Stock: "ASIANPAINT", Sector: "Consumer Goods", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.083333, Eigenvector_Centrality: 0.005439},
  {Stock: "MARUTI", Sector: "Automobile", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.083333, Eigenvector_Centrality: 0.186324},
  {Stock: "KOTAKBANK", Sector: "Banking", Degree_Centrality: 0.083333, Betweenness_Centrality: 0.083333, Eigenvector_Centrality: 0.038040},
  {Stock: "WIPRO", Sector: "IT", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.024530},
  {Stock: "RELIANCE", Sector: "Energy & Retail", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.212686},
  {Stock: "LT", Sector: "Infrastructure", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.136080},
  {Stock: "HINDUNILVR", Sector: "FMCG", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.063249},
  {Stock: "NESTLEIND", Sector: "FMCG", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.084465},
  {Stock: "BAJFINANCE", Sector: "Financial Services", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.145311},
  {Stock: "M&M", Sector: "Automobile", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.068568},
  {Stock: "TITAN", Sector: "Consumer Goods", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.028388},
  {Stock: "TATASTEEL", Sector: "Metals", Degree_Centrality: 0.041667, Betweenness_Centrality: 0.000000, Eigenvector_Centrality: 0.010445}
];

const portfolios = {
  inverse: [
    {Stock: "TITAN", Weight: 0.128547}, {Stock: "TATASTEEL", Weight: 0.117856}, {Stock: "KOTAKBANK", Weight: 0.095471},
    {Stock: "M&M", Weight: 0.065127}, {Stock: "HINDUNILVR", Weight: 0.058287}, {Stock: "NESTLEIND", Weight: 0.058287},
    {Stock: "ASIANPAINT", Weight: 0.046958}, {Stock: "LT", Weight: 0.043415}, {Stock: "BHARTIARTL", Weight: 0.043344},
    {Stock: "AXISBANK", Weight: 0.035617}, {Stock: "POWERGRID", Weight: 0.033385}, {Stock: "BAJFINANCE", Weight: 0.031509},
    {Stock: "RELIANCE", Weight: 0.031509}, {Stock: "WIPRO", Weight: 0.031509}, {Stock: "HDFCBANK", Weight: 0.029661},
    {Stock: "MARUTI", Weight: 0.028654}, {Stock: "SUNPHARMA", Weight: 0.025939}, {Stock: "NTPC", Weight: 0.024128},
    {Stock: "ULTRACEMCO", Weight: 0.020858}, {Stock: "ITC", Weight: 0.020221}, {Stock: "SBIN", Weight: 0.018479},
    {Stock: "INFY", Weight: 0.016774}, {Stock: "TCS", Weight: 0.015904}, {Stock: "HCLTECH", Weight: 0.013989},
    {Stock: "ICICIBANK", Weight: 0.013782}
  ],
  mst: [
    {Stock: "BAJFINANCE", Weight: 0.054943}, {Stock: "TATASTEEL", Weight: 0.054142}, {Stock: "BHARTIARTL", Weight: 0.054050},
    {Stock: "LT", Weight: 0.053333}, {Stock: "RELIANCE", Weight: 0.051933}, {Stock: "ULTRACEMCO", Weight: 0.051895},
    {Stock: "SUNPHARMA", Weight: 0.050738}, {Stock: "POWERGRID", Weight: 0.048820}, {Stock: "NTPC", Weight: 0.047617},
    {Stock: "MARUTI", Weight: 0.047514}, {Stock: "ASIANPAINT", Weight: 0.045622}, {Stock: "M&M", Weight: 0.042877},
    {Stock: "HCLTECH", Weight: 0.040386}, {Stock: "ITC", Weight: 0.039641}, {Stock: "TITAN", Weight: 0.038247},
    {Stock: "KOTAKBANK", Weight: 0.037308}, {Stock: "HINDUNILVR", Weight: 0.036989}, {Stock: "HDFCBANK", Weight: 0.034282},
    {Stock: "WIPRO", Weight: 0.033393}, {Stock: "TCS", Weight: 0.032923}, {Stock: "INFY", Weight: 0.028607},
    {Stock: "AXISBANK", Weight: 0.024403}, {Stock: "SBIN", Weight: 0.023604}, {Stock: "NESTLEIND", Weight: 0.022279},
    {Stock: "ICICIBANK", Weight: 0.020546}
  ],
  equal: [
    {Stock: "RELIANCE", Weight: 0.04}, {Stock: "TCS", Weight: 0.04}, {Stock: "HDFCBANK", Weight: 0.04},
    {Stock: "INFY", Weight: 0.04}, {Stock: "ICICIBANK", Weight: 0.04}, {Stock: "HINDUNILVR", Weight: 0.04},
    {Stock: "ITC", Weight: 0.04}, {Stock: "SBIN", Weight: 0.04}, {Stock: "BHARTIARTL", Weight: 0.04},
    {Stock: "BAJFINANCE", Weight: 0.04}, {Stock: "KOTAKBANK", Weight: 0.04}, {Stock: "LT", Weight: 0.04},
    {Stock: "HCLTECH", Weight: 0.04}, {Stock: "ASIANPAINT", Weight: 0.04}, {Stock: "MARUTI", Weight: 0.04},
    {Stock: "SUNPHARMA", Weight: 0.04}, {Stock: "TITAN", Weight: 0.04}, {Stock: "ULTRACEMCO", Weight: 0.04},
    {Stock: "WIPRO", Weight: 0.04}, {Stock: "AXISBANK", Weight: 0.04}, {Stock: "NESTLEIND", Weight: 0.04},
    {Stock: "POWERGRID", Weight: 0.04}, {Stock: "NTPC", Weight: 0.04}, {Stock: "TATASTEEL", Weight: 0.04},
    {Stock: "M&M", Weight: 0.04}
  ]
};

const performanceMetrics = [
  {Strategy: "Inv Centrality", Annual_Return: 0.18, Ann_Volatility: 0.22, Sharpe_Ratio: 0.82, Max_Drawdown: -0.28},
  {Strategy: "MST Diversif", Annual_Return: 0.21, Ann_Volatility: 0.20, Sharpe_Ratio: 1.05, Max_Drawdown: -0.24},
  {Strategy: "Equal Weight", Annual_Return: 0.16, Ann_Volatility: 0.24, Sharpe_Ratio: 0.67, Max_Drawdown: -0.32}
];

const stockSectors = {
  RELIANCE: "Energy & Retail", TCS: "IT", HDFCBANK: "Banking", INFY: "IT", ICICIBANK: "Banking",
  HINDUNILVR: "FMCG", ITC: "FMCG", SBIN: "Banking", BHARTIARTL: "Telecom", BAJFINANCE: "Financial Services",
  KOTAKBANK: "Banking", LT: "Infrastructure", HCLTECH: "IT", ASIANPAINT: "Consumer Goods",
  MARUTI: "Automobile", SUNPHARMA: "Pharma", TITAN: "Consumer Goods", ULTRACEMCO: "Cement",
  WIPRO: "IT", AXISBANK: "Banking", NESTLEIND: "FMCG", POWERGRID: "Utilities",
  NTPC: "Utilities", TATASTEEL: "Metals", "M&M": "Automobile"
};

const sectorColors = {
  "Banking": "#1FB8CD",
  "IT": "#944454",
  "FMCG": "#5D878F",
  "Consumer Goods": "#FFC185",
  "Automobile": "#DB4545",
  "Energy & Retail": "#964325",
  "Telecom": "#13343B",
  "Financial Services": "#1e3a8a",
  "Infrastructure": "#777777",
  "Pharma": "#ec4899",
  "Cement": "#525252",
  "Metals": "#a8a8a8",
  "Utilities": "#D2BA4C"
};

// Stock prices (simulated for calculation purposes)
const stockPrices = {
  RELIANCE: 2450, TCS: 3500, HDFCBANK: 1650, INFY: 1450, ICICIBANK: 950,
  HINDUNILVR: 2550, ITC: 420, SBIN: 580, BHARTIARTL: 850, BAJFINANCE: 6800,
  KOTAKBANK: 1750, LT: 3200, HCLTECH: 1250, ASIANPAINT: 2900, MARUTI: 10500,
  SUNPHARMA: 1100, TITAN: 3250, ULTRACEMCO: 8500, WIPRO: 420, AXISBANK: 1050,
  NESTLEIND: 22000, POWERGRID: 220, NTPC: 250, TATASTEEL: 140, "M&M": 1850
};

let networkSimulation;
let currentPortfolio = null;

// Navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active-section');
    });
    document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.classList.remove('active');
    });
    
    document.getElementById(targetId).classList.add('active-section');
    link.classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Initialize visualizations
window.addEventListener('DOMContentLoaded', () => {
  initNetworkGraph();
  initCentralityChart();
  initPerformanceCharts();
  initPieCharts();
  initPerformanceTable();
  initCentralityTable();
  initSectorLegend();
  
  // Add event listeners for investment calculator
  document.getElementById('investmentAmount').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      calculatePortfolio();
    }
  });
});

// Network Graph
function initNetworkGraph() {
  const container = document.getElementById('network-graph');
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  const svg = d3.select('#network-graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  const g = svg.append('g');
  
  // Zoom behavior
  const zoom = d3.zoom()
    .scaleExtent([0.5, 3])
    .on('zoom', (event) => {
      g.attr('transform', event.transform);
    });
  
  svg.call(zoom);
  
  // Build nodes and links
  const nodes = [];
  const nodeMap = new Map();
  const links = [];
  
  // Create nodes from all stocks
  Object.keys(stockSectors).forEach(stock => {
    if (!nodeMap.has(stock)) {
      const centrality = centralityMeasures.find(c => c.Stock === stock);
      const node = {
        id: stock,
        sector: stockSectors[stock],
        degree: centrality ? centrality.Degree_Centrality : 0,
        betweenness: centrality ? centrality.Betweenness_Centrality : 0,
        eigenvector: centrality ? centrality.Eigenvector_Centrality : 0
      };
      nodes.push(node);
      nodeMap.set(stock, node);
    }
  });
  
  // Create links
  mstEdges.forEach(edge => {
    links.push({
      source: edge.stock1,
      target: edge.stock2,
      distance: edge.distance,
      correlation: edge.correlation
    });
  });
  
  // Force simulation
  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(d => d.distance * 150))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(30));
  
  // Create links
  const link = g.append('g')
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('stroke', '#999')
    .attr('stroke-opacity', 0.6)
    .attr('stroke-width', d => d.correlation * 4);
  
  // Create nodes
  const node = g.append('g')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .call(drag(simulation));
  
  node.append('circle')
    .attr('r', d => 8 + d.degree * 30)
    .attr('fill', d => sectorColors[d.sector])
    .attr('stroke', '#fff')
    .attr('stroke-width', 2);
  
  node.append('text')
    .text(d => d.id)
    .attr('x', 0)
    .attr('y', 4)
    .attr('text-anchor', 'middle')
    .attr('font-size', '10px')
    .attr('font-weight', 'bold')
    .attr('fill', '#fff')
    .attr('pointer-events', 'none');
  
  // Tooltips
  const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0)
    .style('position', 'absolute');
  
  node.on('mouseenter', (event, d) => {
    tooltip.transition().duration(200).style('opacity', 1);
    tooltip.html(`
      <strong>${d.id}</strong><br>
      Sector: ${d.sector}<br>
      Degree: ${d.degree.toFixed(3)}<br>
      Betweenness: ${d.betweenness.toFixed(3)}<br>
      Eigenvector: ${d.eigenvector.toFixed(3)}
    `)
    .style('left', (event.pageX + 10) + 'px')
    .style('top', (event.pageY - 10) + 'px');
    
    // Highlight connected nodes
    const connectedStocks = new Set();
    links.forEach(l => {
      if (l.source.id === d.id) connectedStocks.add(l.target.id);
      if (l.target.id === d.id) connectedStocks.add(l.source.id);
    });
    
    node.selectAll('circle')
      .attr('opacity', n => n.id === d.id || connectedStocks.has(n.id) ? 1 : 0.2);
    
    link.attr('opacity', l => l.source.id === d.id || l.target.id === d.id ? 1 : 0.1);
  })
  .on('mouseleave', () => {
    tooltip.transition().duration(200).style('opacity', 0);
    node.selectAll('circle').attr('opacity', 1);
    link.attr('opacity', 0.6);
  });
  
  link.on('mouseenter', (event, d) => {
    tooltip.transition().duration(200).style('opacity', 1);
    tooltip.html(`
      <strong>${d.source.id} - ${d.target.id}</strong><br>
      Correlation: ${d.correlation.toFixed(3)}<br>
      Distance: ${d.distance.toFixed(3)}
    `)
    .style('left', (event.pageX + 10) + 'px')
    .style('top', (event.pageY - 10) + 'px');
  })
  .on('mouseleave', () => {
    tooltip.transition().duration(200).style('opacity', 0);
  });
  
  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
    
    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });
  
  // Color by selector
  document.getElementById('colorBy').addEventListener('change', (e) => {
    const colorBy = e.target.value;
    
    node.selectAll('circle').attr('fill', d => {
      if (colorBy === 'sector') return sectorColors[d.sector];
      
      let value;
      if (colorBy === 'degree') value = d.degree;
      else if (colorBy === 'betweenness') value = d.betweenness;
      else if (colorBy === 'eigenvector') value = d.eigenvector;
      
      const maxVal = d3.max(nodes, n => n[colorBy]);
      const scale = d3.scaleSequential(d3.interpolateTurbo).domain([0, maxVal]);
      return scale(value);
    });
  });
  
  // Populate sector filter
  const sectorFilter = document.getElementById('sectorFilter');
  const uniqueSectors = [...new Set(Object.values(stockSectors))];
  uniqueSectors.forEach(sector => {
    const option = document.createElement('option');
    option.value = sector;
    option.textContent = sector;
    sectorFilter.appendChild(option);
  });
  
  sectorFilter.addEventListener('change', (e) => {
    const selectedSector = e.target.value;
    if (selectedSector === 'all') {
      node.style('opacity', 1);
      link.style('opacity', 0.6);
    } else {
      node.style('opacity', d => d.sector === selectedSector ? 1 : 0.2);
      link.style('opacity', l => {
        return (l.source.sector === selectedSector || l.target.sector === selectedSector) ? 0.6 : 0.1;
      });
    }
  });
  
  networkSimulation = simulation;
  
  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    
    return d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
  }
}

// Centrality Chart
function initCentralityChart() {
  const ctx = document.getElementById('centralityChart').getContext('2d');
  
  const sortedData = [...centralityMeasures].sort((a, b) => {
    const avgA = (a.Degree_Centrality + a.Betweenness_Centrality + a.Eigenvector_Centrality) / 3;
    const avgB = (b.Degree_Centrality + b.Betweenness_Centrality + b.Eigenvector_Centrality) / 3;
    return avgB - avgA;
  });
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedData.map(d => d.Stock),
      datasets: [
        {
          label: 'Degree',
          data: sortedData.map(d => d.Degree_Centrality),
          backgroundColor: '#1FB8CD'
        },
        {
          label: 'Betweenness',
          data: sortedData.map(d => d.Betweenness_Centrality),
          backgroundColor: '#FFC185'
        },
        {
          label: 'Eigenvector',
          data: sortedData.map(d => d.Eigenvector_Centrality),
          backgroundColor: '#B4413C'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          stacked: false
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Centrality Value'
          }
        }
      }
    }
  });
}

// Performance Charts
function initPerformanceCharts() {
  const chartColors = ['#1FB8CD', '#FFC185', '#5D878F'];
  
  // Returns
  new Chart(document.getElementById('returnChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: performanceMetrics.map(d => d.Strategy),
      datasets: [{
        label: 'Annual Return',
        data: performanceMetrics.map(d => d.Annual_Return * 100),
        backgroundColor: chartColors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Annual Return (%)' }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: '%' } }
      }
    }
  });
  
  // Volatility
  new Chart(document.getElementById('volatilityChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: performanceMetrics.map(d => d.Strategy),
      datasets: [{
        label: 'Annualized Volatility',
        data: performanceMetrics.map(d => d.Ann_Volatility * 100),
        backgroundColor: chartColors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Annualized Volatility (%)' }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: '%' } }
      }
    }
  });
  
  // Sharpe
  new Chart(document.getElementById('sharpeChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: performanceMetrics.map(d => d.Strategy),
      datasets: [{
        label: 'Sharpe Ratio',
        data: performanceMetrics.map(d => d.Sharpe_Ratio),
        backgroundColor: chartColors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Sharpe Ratio' }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
  
  // Drawdown
  new Chart(document.getElementById('drawdownChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: performanceMetrics.map(d => d.Strategy),
      datasets: [{
        label: 'Max Drawdown',
        data: performanceMetrics.map(d => d.Max_Drawdown * 100),
        backgroundColor: chartColors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Maximum Drawdown (%)' }
      },
      scales: {
        y: { title: { display: true, text: '%' } }
      }
    }
  });
}

// Pie Charts
function initPieCharts() {
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B', '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B', '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
  
  const createPieChart = (canvasId, data) => {
    const topStocks = [...data].sort((a, b) => b.Weight - a.Weight).slice(0, 10);
    const otherWeight = data.slice(10).reduce((sum, d) => sum + d.Weight, 0);
    
    const labels = topStocks.map(d => d.Stock);
    const weights = topStocks.map(d => d.Weight);
    
    if (otherWeight > 0) {
      labels.push('Others');
      weights.push(otherWeight);
    }
    
    new Chart(document.getElementById(canvasId).getContext('2d'), {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: weights,
          backgroundColor: colors
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { font: { size: 10 } }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.parsed;
                return `${label}: ${(value * 100).toFixed(2)}%`;
              }
            }
          }
        }
      }
    });
  };
  
  createPieChart('pieInverse', portfolios.inverse);
  createPieChart('pieMST', portfolios.mst);
  createPieChart('pieEqual', portfolios.equal);
}

// Performance Table
function initPerformanceTable() {
  const tbody = document.getElementById('performanceTableBody');
  
  performanceMetrics.forEach(metric => {
    const row = tbody.insertRow();
    row.innerHTML = `
      <td><strong>${metric.Strategy}</strong></td>
      <td>${(metric.Annual_Return * 100).toFixed(2)}%</td>
      <td>${(metric.Ann_Volatility * 100).toFixed(2)}%</td>
      <td>${metric.Sharpe_Ratio.toFixed(4)}</td>
      <td>${(metric.Max_Drawdown * 100).toFixed(2)}%</td>
    `;
  });
}

// Centrality Table
function initCentralityTable() {
  const tbody = document.querySelector('#centralityTable tbody');
  
  const sortedData = [...centralityMeasures].map(d => ({
    ...d,
    average: (d.Degree_Centrality + d.Betweenness_Centrality + d.Eigenvector_Centrality) / 3
  })).sort((a, b) => b.average - a.average).slice(0, 5);
  
  sortedData.forEach((d, i) => {
    const row = tbody.insertRow();
    row.innerHTML = `
      <td><strong>${i + 1}</strong></td>
      <td><strong>${d.Stock}</strong></td>
      <td>${d.Degree_Centrality.toFixed(4)}</td>
      <td>${d.Betweenness_Centrality.toFixed(4)}</td>
      <td>${d.Eigenvector_Centrality.toFixed(4)}</td>
      <td>${d.average.toFixed(4)}</td>
    `;
  });
}

// Sector Legend
function initSectorLegend() {
  const legend = document.getElementById('sector-legend');
  
  Object.entries(sectorColors).forEach(([sector, color]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
      <div class="legend-color" style="background-color: ${color};"></div>
      <span>${sector}</span>
    `;
    legend.appendChild(item);
  });
}

// Investment Calculator Functions
function setInvestment(amount) {
  document.getElementById('investmentAmount').value = amount;
}

function calculatePortfolio() {
  const amount = parseFloat(document.getElementById('investmentAmount').value);
  const strategy = document.getElementById('strategySelect').value;
  
  if (!amount || amount < 1000) {
    alert('Please enter a valid investment amount (minimum ₹1,000)');
    return;
  }
  
  const portfolio = portfolios[strategy];
  const holdings = portfolio.map(item => {
    const allocation = amount * item.Weight;
    const price = stockPrices[item.Stock];
    const shares = Math.floor(allocation / price);
    const actualValue = shares * price;
    
    return {
      stock: item.Stock,
      sector: stockSectors[item.Stock],
      weight: item.Weight,
      allocation: allocation,
      price: price,
      shares: shares,
      value: actualValue
    };
  }).filter(h => h.shares > 0);
  
  const totalInvested = holdings.reduce((sum, h) => sum + h.value, 0);
  const cashRemaining = amount - totalInvested;
  
  currentPortfolio = { strategy, amount, holdings, totalInvested, cashRemaining };
  displayPortfolioResults();
}

function displayPortfolioResults() {
  const resultsDiv = document.getElementById('portfolioResults');
  resultsDiv.style.display = 'block';
  
  const strategyNames = {
    inverse: 'Inverse Centrality',
    mst: 'MST Diversification',
    equal: 'Equal Weight'
  };
  
  let html = `
    <h4>Portfolio for ${strategyNames[currentPortfolio.strategy]} Strategy</h4>
    <div class="portfolio-summary">
      <div class="summary-item">
        <div class="summary-label">Target Amount</div>
        <div class="summary-value">₹${currentPortfolio.amount.toLocaleString('en-IN')}</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">Invested</div>
        <div class="summary-value">₹${currentPortfolio.totalInvested.toLocaleString('en-IN')}</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">Cash Remaining</div>
        <div class="summary-value">₹${currentPortfolio.cashRemaining.toLocaleString('en-IN')}</div>
      </div>
      <div class="summary-item">
        <div class="summary-label">Stocks</div>
        <div class="summary-value">${currentPortfolio.holdings.length}</div>
      </div>
    </div>
    
    <table class="holdings-table">
      <thead>
        <tr>
          <th>Stock</th>
          <th>Sector</th>
          <th>Weight</th>
          <th>Price (₹)</th>
          <th>Shares</th>
          <th>Value (₹)</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  currentPortfolio.holdings.forEach(h => {
    html += `
      <tr>
        <td><strong>${h.stock}</strong></td>
        <td>${h.sector}</td>
        <td>${(h.weight * 100).toFixed(2)}%</td>
        <td>₹${h.price.toLocaleString('en-IN')}</td>
        <td>${h.shares}</td>
        <td>₹${h.value.toLocaleString('en-IN')}</td>
      </tr>
    `;
  });
  
  html += `
      </tbody>
    </table>
  `;
  
  resultsDiv.innerHTML = html;
}

function downloadPortfolio() {
  if (!currentPortfolio) {
    alert('Please calculate a portfolio first');
    return;
  }
  
  const strategyNames = {
    inverse: 'Inverse_Centrality',
    mst: 'MST_Diversification',
    equal: 'Equal_Weight'
  };
  
  let csv = 'Stock,Sector,Weight,Price,Shares,Value\n';
  currentPortfolio.holdings.forEach(h => {
    csv += `${h.stock},${h.sector},${(h.weight * 100).toFixed(2)}%,${h.price},${h.shares},${h.value}\n`;
  });
  csv += `\nTotal Invested,,,,,${currentPortfolio.totalInvested}\n`;
  csv += `Cash Remaining,,,,,${currentPortfolio.cashRemaining}\n`;
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Portfolio_${strategyNames[currentPortfolio.strategy]}_${Date.now()}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

function resetNetworkView() {
  if (networkSimulation) {
    networkSimulation.alpha(1).restart();
  }
  document.getElementById('colorBy').value = 'sector';
  document.getElementById('sectorFilter').value = 'all';
  document.getElementById('colorBy').dispatchEvent(new Event('change'));
  document.getElementById('sectorFilter').dispatchEvent(new Event('change'));
}

function navigateToNetwork() {
  document.querySelector('a[href="#network"]').click();
}