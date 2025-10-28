// Application data
const stockData = {
    stocks: ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "JPM", "BAC", "WFC", "C", "GS", "JNJ", "PFE", "UNH", "ABBV", "MRK", "XOM", "CVX", "BP", "SHEL", "COP", "WMT", "HD", "MCD", "NKE", "SBUX"],
    sectors: {
        Technology: ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"],
        Financial: ["JPM", "BAC", "WFC", "C", "GS"],
        Healthcare: ["JNJ", "PFE", "UNH", "ABBV", "MRK"],
        Energy: ["XOM", "CVX", "BP", "SHEL", "COP"],
        Consumer: ["WMT", "HD", "MCD", "NKE", "SBUX"]
    }
};

const mstResults = {
    strongest_connections: [
        { stock1: "GOOGL", stock2: "AMZN", correlation: 0.927, distance: 0.382 },
        { stock1: "MCD", stock2: "NKE", correlation: 0.918, distance: 0.404 },
        { stock1: "WFC", stock2: "C", correlation: 0.912, distance: 0.419 },
        { stock1: "HD", stock2: "NKE", correlation: 0.906, distance: 0.435 },
        { stock1: "BP", stock2: "COP", correlation: 0.902, distance: 0.443 }
    ]
};

const portfolioResults = {
    inverse_centrality: {
        annual_return: 0.3871,
        annual_volatility: 0.2499,
        sharpe_ratio: 1.5488,
        max_drawdown: -0.1966,
        top_holdings: [
            { stock: "AAPL", weight: 0.0606 },
            { stock: "AMZN", weight: 0.0606 },
            { stock: "TSLA", weight: 0.0606 },
            { stock: "BAC", weight: 0.0606 },
            { stock: "JNJ", weight: 0.0606 }
        ]
    },
    mst_diversification: {
        annual_return: 0.3904,
        annual_volatility: 0.2499,
        sharpe_ratio: 1.5621,
        max_drawdown: -0.196,
        top_holdings: [
            { stock: "SHEL", weight: 0.0746 },
            { stock: "TSLA", weight: 0.066 },
            { stock: "MRK", weight: 0.0616 },
            { stock: "JNJ", weight: 0.0603 },
            { stock: "AAPL", weight: 0.0598 }
        ]
    },
    equal_weight: {
        annual_return: 0.4063,
        annual_volatility: 0.2599,
        sharpe_ratio: 1.5631,
        max_drawdown: -0.1983,
        top_holdings: [
            { stock: "AAPL", weight: 0.04 },
            { stock: "MSFT", weight: 0.04 },
            { stock: "GOOGL", weight: 0.04 },
            { stock: "AMZN", weight: 0.04 },
            { stock: "TSLA", weight: 0.04 }
        ]
    }
};

// DOM elements
let currentSection = 'title';
let navLinks = [];
let sections = [];
let tabButtons = [];
let tabPanels = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateStockUniverse();
    populateStrongestConnections();
    initializePortfolioTabs();
    populatePortfolioHoldings();
    addInteractiveEffects();
});

// Navigation functionality
function initializeNavigation() {
    navLinks = document.querySelectorAll('.nav-link');
    sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.dataset.section;
            navigateToSection(targetSection);
        });
    });
    
    // Handle hash changes for direct URLs
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            navigateToSection(hash);
        }
    });
    
    // Initialize with current hash or default section
    const initialHash = window.location.hash.slice(1);
    if (initialHash && document.getElementById(initialHash)) {
        navigateToSection(initialHash);
    }
}

function navigateToSection(sectionId) {
    // Update current section
    currentSection = sectionId;
    
    // Update URL hash
    window.history.replaceState(null, null, `#${sectionId}`);
    
    // Update active states
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Activate target section and nav link
    const targetSection = document.getElementById(sectionId);
    const targetNavLink = document.querySelector(`[data-section="${sectionId}"]`);
    
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    if (targetNavLink) {
        targetNavLink.classList.add('active');
    }
    
    // Scroll to top of section
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Populate stock universe grid
function populateStockUniverse() {
    const stockGrid = document.getElementById('stock-universe');
    if (!stockGrid) return;
    
    const sectorClassMap = {
        'Technology': 'tech',
        'Financial': 'financial',
        'Healthcare': 'healthcare',
        'Energy': 'energy',
        'Consumer': 'consumer'
    };
    
    stockGrid.innerHTML = '';
    
    Object.entries(stockData.sectors).forEach(([sector, stocks]) => {
        const sectorClass = sectorClassMap[sector];
        
        stocks.forEach(stock => {
            const stockElement = document.createElement('div');
            stockElement.className = `stock-item ${sectorClass}`;
            stockElement.textContent = stock;
            stockElement.title = `${stock} - ${sector} Sector`;
            stockGrid.appendChild(stockElement);
        });
    });
}

// Populate strongest connections table
function populateStrongestConnections() {
    const tbody = document.getElementById('strongest-connections');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    mstResults.strongest_connections.forEach(connection => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${connection.stock1} - ${connection.stock2}</strong></td>
            <td>${connection.correlation.toFixed(3)}</td>
            <td>${connection.distance.toFixed(3)}</td>
        `;
        tbody.appendChild(row);
    });
}

// Initialize portfolio tabs functionality
function initializePortfolioTabs() {
    tabButtons = document.querySelectorAll('.tab-btn');
    tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const portfolioType = button.dataset.portfolio;
            switchPortfolioTab(portfolioType);
        });
    });
}

function switchPortfolioTab(portfolioType) {
    // Remove active class from all buttons and panels
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Add active class to clicked button and corresponding panel
    const activeButton = document.querySelector(`[data-portfolio="${portfolioType}"]`);
    const activePanel = document.getElementById(`${portfolioType}-tab`);
    
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    if (activePanel) {
        activePanel.classList.add('active');
    }
}

// Populate portfolio holdings
function populatePortfolioHoldings() {
    populateHoldings('inverse', portfolioResults.inverse_centrality.top_holdings);
    populateHoldings('mst', portfolioResults.mst_diversification.top_holdings);
    populateHoldings('equal', portfolioResults.equal_weight.top_holdings);
}

function populateHoldings(portfolioType, holdings) {
    const container = document.getElementById(`${portfolioType}-holdings`);
    if (!container) return;
    
    container.innerHTML = '';
    
    holdings.forEach(holding => {
        const holdingElement = document.createElement('div');
        holdingElement.className = 'holding-item';
        holdingElement.innerHTML = `
            <span class="holding-stock">${holding.stock}</span>
            <span class="holding-weight">${(holding.weight * 100).toFixed(2)}%</span>
        `;
        container.appendChild(holdingElement);
    });
}

// Add interactive effects
function addInteractiveEffects() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.overview-card, .theory-card, .data-card, .process-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow-sm)';
        });
    });
    
    // Add click effects to stock items
    const stockItems = document.querySelectorAll('.stock-item');
    
    stockItems.forEach(item => {
        item.addEventListener('click', () => {
            // Create a temporary highlight effect
            const originalBackground = item.style.backgroundColor;
            item.style.backgroundColor = 'var(--color-primary)';
            item.style.color = 'var(--color-btn-primary-text)';
            item.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                item.style.backgroundColor = originalBackground;
                item.style.color = '';
                item.style.transform = 'scale(1)';
            }, 200);
        });
        
        item.style.cursor = 'pointer';
        item.style.transition = 'all 0.2s ease';
    });
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '0';
            img.style.transform = 'translateY(20px)';
            img.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'translateY(0)';
            }, 100);
        });
    });
    
    // Add progressive disclosure for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Observe all major content sections
    document.querySelectorAll('.theory-card, .data-card, .process-card, .network-container, .centrality-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Utility functions
function formatPercentage(value) {
    return (value * 100).toFixed(2) + '%';
}

function formatDecimal(value, decimals = 2) {
    return value.toFixed(decimals);
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                navigateToSection('title');
                break;
            case '2':
                e.preventDefault();
                navigateToSection('theory');
                break;
            case '3':
                e.preventDefault();
                navigateToSection('methodology');
                break;
            case '4':
                e.preventDefault();
                navigateToSection('visualization');
                break;
            case '5':
                e.preventDefault();
                navigateToSection('results');
                break;
            case '6':
                e.preventDefault();
                navigateToSection('implementation');
                break;
            case '7':
                e.preventDefault();
                navigateToSection('analysis');
                break;
            case '8':
                e.preventDefault();
                navigateToSection('conclusion');
                break;
        }
    }
    
    // Arrow key navigation between sections
    if (e.key === 'ArrowRight' && e.altKey) {
        e.preventDefault();
        navigateToNextSection();
    } else if (e.key === 'ArrowLeft' && e.altKey) {
        e.preventDefault();
        navigateToPreviousSection();
    }
});

// Section navigation helpers
function navigateToNextSection() {
    const sectionOrder = ['title', 'theory', 'methodology', 'visualization', 'results', 'implementation', 'analysis', 'conclusion'];
    const currentIndex = sectionOrder.indexOf(currentSection);
    
    if (currentIndex < sectionOrder.length - 1) {
        navigateToSection(sectionOrder[currentIndex + 1]);
    }
}

function navigateToPreviousSection() {
    const sectionOrder = ['title', 'theory', 'methodology', 'visualization', 'results', 'implementation', 'analysis', 'conclusion'];
    const currentIndex = sectionOrder.indexOf(currentSection);
    
    if (currentIndex > 0) {
        navigateToSection(sectionOrder[currentIndex - 1]);
    }
}

// Add print support
window.addEventListener('beforeprint', () => {
    // Show all sections when printing
    sections.forEach(section => {
        section.style.display = 'block';
        section.style.pageBreakBefore = 'always';
    });
});

window.addEventListener('afterprint', () => {
    // Restore normal display after printing
    sections.forEach(section => {
        if (section.id !== currentSection) {
            section.style.display = 'none';
        }
    });
});

// Add search functionality (basic)
function searchContent(query) {
    const searchableElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td');
    let matches = [];
    
    searchableElements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
            matches.push({
                element: element,
                section: element.closest('.section').id
            });
        }
    });
    
    return matches;
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Analytics tracking (placeholder for academic presentation)
function trackSectionView(sectionId) {
    // In a real application, this would send analytics data
    console.log(`Section viewed: ${sectionId}`);
}

// Add section view tracking
const originalNavigateToSection = navigateToSection;
navigateToSection = function(sectionId) {
    originalNavigateToSection(sectionId);
    trackSectionView(sectionId);
};

// Export functions for potential future use
window.MSTPortfolioApp = {
    navigateToSection,
    switchPortfolioTab,
    searchContent,
    formatPercentage,
    formatDecimal
};