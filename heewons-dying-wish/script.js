
/// MODALS ///


// Function to toggle the overlay with a specific animation
function toggleOverlay(animationClass) {
    const overlay = document.getElementById('overlay');
    // Remove previous animation classes if necessary
    overlay.classList.remove('animation1', 'animation2', 'animation3', 'animation4');
    overlay.classList.add(animationClass); // Add the new animation class
    overlay.classList.add('active'); // Make overlay active
}

// Add click event listeners to all .modal-btn elements
document.querySelectorAll('.modal-btn').forEach(button => {
    button.addEventListener('click', () => {
        const animationClass = button.getAttribute('data-animation');
        toggleOverlay(animationClass);
    });
});

// Confirm button hides the overlay
document.getElementById('confirm').addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active'); // Hide the overlay
    // Optionally, remove specific animation classes if you want to reset the state completely
    overlay.classList.remove('animation1', 'animation2', 'animation3', 'animation4');
});




/// NAVIGATION ///


function movePill(tab) {
    const pill = document.getElementById('pill');
    const tabs = document.querySelectorAll('.tab'); // Get all tabs
    const tabWidth = tab.offsetWidth;
    const tabLeft = tab.offsetLeft;

    // Remove "active" class from all tabs
    tabs.forEach(t => t.classList.remove('active'));

    // Add "active" class to clicked tab
    tab.classList.add('active');

    // Adjust the pill's width and position to match the tab
    pill.style.width = `${tabWidth}px`;
    pill.style.left = `${tabLeft}px`;
}




/// CHART ///



const ctx = document.getElementById('lineChart').getContext('2d');

// Create gradient
let gradient = ctx.createLinearGradient(0, 0, 0, 180); // Adjust the gradient coordinates as needed
gradient.addColorStop(0, 'rgba(99, 85, 255, 0.6)'); // Start color
gradient.addColorStop(1, 'rgba(99, 85, 255, 0)'); // End color

const tickerContainer = document.getElementById('tickerContainer');

/*
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Income',
        data: [250, 300, 320, 350, 500, 800, 1200, 2300, 2800, 3300, 3350, 3456.12],
        fill: true,
        borderColor: '#6355ff',
        tension: 0.2,
        pointHoverRadius: 5,
        backgroundColor: gradient
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false, // Hide grid lines for the y-axis
                }
            },
            x: {
                grid: {
                    display: false, // Hide grid lines for the x-axis
                }
            }
        },
        elements: {
            point: {
                radius: 0 // Hide dots on each data point
            },
            line: {
                borderWidth: 2 // Optional: Adjust line thickness
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legend
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                callbacks: {
                    title: function(tooltipItems, data) {
                        return ''; // Hide title
                    },
                    label: function(context) {
                        const label = context.dataset.label || '';
                        const value = context.parsed.y;
                        return `${label}: $${value.toFixed(2)}`;
                    }
                }
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        onHover: (event, chartElement) => {
            const canvas = document.getElementById('lineChart');
            if (chartElement.length) {
                canvas.style.cursor = 'pointer';
            } else {
                canvas.style.cursor = 'default';
            }
        }
    }
};
*/


updateTicker(3456.12)




const verticalLinePlugin = {
    id: 'verticalLine',
    afterDraw: function(chart) {
        if (chart.tooltip._active && chart.tooltip._active.length) {
            const activePoint = chart.tooltip._active[0];
            const ctx = chart.ctx;
            const x = activePoint.element.x;
            const y = activePoint.element.y;
            const yAxis = chart.scales.y;

            // Draw vertical line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, yAxis.top);
            ctx.lineTo(x, yAxis.bottom);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#777';
            ctx.stroke();

            // Draw dot
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '#007bff';
            ctx.fill();

            ctx.restore();

            // Update ticker with the hovered value
            updateTicker(activePoint.element.$context.raw);
        }
    }
};


// Register the plugin
Chart.register(verticalLinePlugin);




const config = {
    type: 'line',
    plugins: [verticalLinePlugin],
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Income',
            data: [250, 300, 320, 350, 500, 800, 1200, 2300, 2800, 3300, 3350, 3456.12],
            fill: true,
            borderColor: '#6355ff',
            borderWidth: 3, // Make the line thicker
            tension: 0.1,
            pointRadius: 0, // Hide dots by default
            pointHoverRadius: 5, // Show dots on hover
            backgroundColor: gradient,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#808EB6',
                },
                grid: {
                    display: false, // Hide y-axis grid lines
                    drawBorder: true,
                    borderColor: '#0000FF',
                }
            },
            x: {
                ticks: {
                    color: '#808EB6',
                },
                grid: {
                    display: false, // Hide x-axis grid lines
                    drawBorder: true,
                    borderColor: '#0000FF',
                }
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legend
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                callbacks: {
                    title: function(tooltipItems, data) {
                        return ''; // Hide title
                    },
                    label: function(context) {
                        const label = context.dataset.label || '';
                        const value = context.parsed.y;
                        updateTicker(value); // Update the ticker on hover
                        return `${label}: $${value.toFixed(2)}`;
                    }
                }
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        onHover: (event, chartElement) => {
            const canvas = document.getElementById('lineChart');
            if (chartElement.length) {
                canvas.style.cursor = 'pointer';
            } else {
                canvas.style.cursor = 'default';

            }
        },

    }
};



function handleMouseOut() {
    // Assuming data.datasets[0].data contains your data points
    const lastValue = data.datasets[0].data[data.datasets[0].data.length - 1];
    updateTicker(lastValue);
}


const myChart = new Chart(ctx, config);

function updateTicker(value) {
    tickerContainer.innerHTML = `$${value.toFixed(2)}`;
    // Implement ticker-style animation for the value update if desired
}
