/// NAVBAR ///


for (let i = 0; i < Class('navbtn').length; i++){

    let btn = Class('navbtn')[i]

    btn.onclick = () => {

        for (let j = 0; j < Class('navbtn').length; j++) {
            if (i != j) {
                Class('navbtn')[j].classList.remove('active')
            }
        }

        btn.classList.add('active')
    }
}


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





/// TABS ///


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


setTimeout(() => {
    movePill(Class('tab')[1])
    setTimeout(() => {
        movePill(Class('tab')[2])
        setTimeout(() => {
            movePill(Class('tab')[1])
            setTimeout(() => {
                movePill(Class('tab')[0])
            }, 500);
        }, 500);
    }, 500);
}, 1000);


for (let i = 0; i < Class('btn').length; i++){

    let btn = Class('btn')[i]

    setTimeout(() => {
        btn.classList.add('up')
        setTimeout(() => {
            btn.classList.remove('up')
        }, 200);
    }, 500 + 150*i);
}


/// CHART ///


const ctx = document.getElementById('lineChart').getContext('2d');

// Create gradient
let gradient = ctx.createLinearGradient(0, 50, 0, 280); // Adjust the gradient coordinates as needed
gradient.addColorStop(0, 'rgba(99, 85, 255, 0.6)'); // Start color
gradient.addColorStop(1, 'rgba(99, 85, 255, 0)'); // End color

const tickerContainer = document.getElementById('tickerContainer');




const verticalLinePlugin = {
    id: 'verticalLine',
    afterDraw: function(chart) {
        if (chart.tooltip._active && chart.tooltip._active.length) {
            const activePoint = chart.tooltip._active[0];
            const ctx = chart.ctx;
            const x = activePoint.element.x;
            const y = activePoint.element.y;
            const xAxis = chart.scales.x
            const yAxis = chart.scales.y;

            // Draw vertical line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, yAxis.top);
            ctx.lineTo(x, yAxis.bottom);
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = 'rgba(99, 85, 255, 1)';
            ctx.stroke();


            ctx.fillStyle = 'rgba(255,255,255, 0.8)';
            ctx.fillRect(x,10,xAxis.right,yAxis.bottom)


            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(xAxis.right, y);
            ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            //ctx.stroke()

            // Use the global `radius` for the fluctuating dot
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fillStyle = '#6355ff';
            ctx.globalAlpha = 0.15;
            ctx.fill();
            ctx.globalAlpha = 1;

            // Draw static dot
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, 2 * Math.PI);
            ctx.fillStyle = '#6355ff';
            ctx.fill();

            ctx.restore();

            updateTicker(activePoint.element.$context.raw);
        }
    }
};




const endDotPlugin = {
    id: 'endDotPlugin',
    afterDatasetsDraw: function(chart, easing) {
        if (!chart.config.options.animation) {
            return;
        }

        const ctx = chart.ctx;
        const dataset = chart.data.datasets[0]; // Assuming the dot is for the first dataset
        const meta = chart.getDatasetMeta(0);
        const points = meta.data;
        const chartArea = chart.chartArea;

        // Calculate the current frame based on the easing value
        const currentFrame = easing * points.length;

        // Find the point that matches the current frame
        let pointIndex = Math.floor(currentFrame);
        pointIndex = Math.min(pointIndex, points.length - 1); // Ensure it doesn't exceed the array

        const point = points[pointIndex];

        if (point && point.hidden !== true) {
            // Draw the dot
            ctx.fillStyle = dataset.borderColor;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
};




// Register the plugin
Chart.register(verticalLinePlugin);
Chart.register(endDotPlugin);


setTimeout(() => {
    animateTicker(3456.12, 900)
}, 500);




function generateChartData() {
    const numberOfPoints = 50;
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-12-01');
    const timeSpan = endDate.getTime() - startDate.getTime();
    const timeStep = timeSpan / (numberOfPoints - 1);

    let labels = [];
    let data = [];
    let currentValue = 250; // Starting value
    const finalValue = 3456.12;
    let lastIncrement = 0;

    for (let i = 0; i < numberOfPoints; i++) {
        // Generate date labels
        const date = new Date(startDate.getTime() + (timeStep * i));
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        labels.push(formattedDate);

        // Generate data points with variability
        if (i > 0) {
            // Introduce variability while ensuring overall growth
            let increment = (finalValue - currentValue) / (numberOfPoints - i) * (0.8 + Math.random() * 0.4);
            // Prevent the increment from being smaller than the last to ensure growth
            increment = Math.max(increment, lastIncrement * (0.95 + Math.random() * 0.1));
            currentValue += increment;
            lastIncrement = increment;
        }
        data.push(parseFloat(currentValue.toFixed(2)));
    }

    // Ensure the last data point matches the final value exactly
    data[data.length - 1] = finalValue;

    return {
        labels: labels,
        datasets: [{
            label: 'Income',
            data: data,
            fill: true,
            borderColor: '#6355ff',
            borderWidth: 3,
            tension: 0.1,
            pointRadius: 0,
            pointHoverRadius: 5,
            backgroundColor: 'rgba(99, 85, 255, 0.2)', // Placeholder for gradient
        }]
    };
}

const chartData = generateChartData();
console.log(chartData);





const config = {
    type: 'line',
    plugins: [verticalLinePlugin, endDotPlugin],

    data: {
        labels: ["Jan 01", "Jan 08", "Jan 15", "Jan 22", "Jan 29", "Feb 05", "Feb 12", "Feb 19", "Feb 26", "Mar 05", "Mar 12", "Mar 19", "Mar 26", "Apr 02", "Apr 09", "Apr 16", "Apr 23", "Apr 30", "May 07", "May 14", "May 21", "May 28", "Jun 04", "Jun 11", "Jun 18", "Jun 25", "Jul 02", "Jul 09", "Jul 16", "Jul 23", "Jul 30", "Aug 06", "Aug 13", "Aug 20", "Aug 27", "Sep 03", "Sep 10", "Sep 17", "Sep 24", "Oct 01", "Oct 08", "Oct 15", "Oct 22", "Oct 29", "Nov 05", "Nov 12", "Nov 19", "Nov 26", "Dec 03", "Dec 10"
    ],
        datasets: [{
            label: 'Income',
            data: [250.00, 255.12, 261.23, 268.34, 276.45, 285.56, 295.67, 306.78, 318.89, 331.00, 345.11, 360.22, 376.33, 393.44, 411.55, 430.66, 450.77, 471.88, 493.99, 516.10, 540.21, 565.32, 591.43, 618.54, 646.65, 675.76, 705.87, 736.98, 768.09, 801.20, 835.31, 870.42, 906.53, 943.64, 981.75, 1020.86, 1060.97, 1500.08, 1550.19, 1605.30, 1665.41, 1730.52, 1800.63, 1875.74, 1955.85, 2040.96, 2431.07, 2525.18, 2700.29, 3456.12
            ],
            fill: true,
            borderColor: '#6355ff',
            borderWidth: 3, // Make the line thicker
            tension: 0.1,
            pointRadius: 0, // Hide dots by default
            pointHoverRadius: 5, // Show dots on hover
            backgroundColor: gradient,
        }]
    },

    //data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0,
            easing: 'ease'
        },
        animations: {
            x: {
                type: 'number',
                easing: 'linear',
                duration: 300,
                from: NaN, // This causes the line to draw from the axis
                delay(ctx) {
                    if (ctx.type !== 'data' || ctx.xStarted) {
                        return 0;
                    }
                    ctx.xStarted = true;
                    return ctx.index * 20;
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#808EB6',
                    maxTicksLimit: 6,
                },

                grid: {
                    display: false,
                    drawBorder: false,
                    lineWidth: 4
                }
            },
            x: {

                ticks: {
                    color: '#808EB6',
                    maxTicksLimit: 12,
                },
                grid: {
                    display: false,
                    drawBorder: false,

                }
            }
        },
        plugins: {
            legend: {
                display: false // Hide the legend
            },
            endDotPlugin: {
                radius: 5, // Customize the dot radius
                color: '#ff0000', // Customize the dot color
            },

            tooltip: {
                enabled: false,
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
        },
    }
};



window.addEventListener('resize', function() {
    // Code to adjust container sizes or chart dimensions
    // You might need to manually trigger chart resize if you're changing container sizes via JS
    myChart.resize();
});




let canv = document.getElementById('lineChart');

function handleMouseOut() {

    updateTicker(3456.12);
}

canv.addEventListener('mouseleave', handleMouseOut)



const myChart = new Chart(ctx, config);
window.myChart = myChart





let radius = 20;
let up = true;

const radiusUpdateInterval = setInterval(() => {
    radius += up ? 0.8 : -0.8;
    if (radius > 25) {
        up = false;
    } else if (radius < 20) {
        up = true;
    }

    // Optionally, force the chart to redraw if currently hovering over a point
    if (window.myChart && window.myChart.tooltip._active && window.myChart.tooltip._active.length) {
        window.myChart.update('none'); // 'none' prevents animation reset
    }
}, 50);


function updateTicker(value) {
    tickerContainer.innerHTML = `$${value.toFixed(2)}`;
}


function animateTicker(endValue, duration) {
    const tickerContainer = document.getElementById('tickerContainer');
    if (!tickerContainer) return;

    // Parse the current value from the ticker's text content
    let currentValue = parseFloat(tickerContainer.textContent.replace(/[^0-9.-]+/g, ""));

    const stepTime = 20; // Time in ms between each step
    const steps = duration / stepTime; // Total number of steps
    const valueIncrement = (endValue - currentValue) / steps; // Value to increment on each step

    const tickerAnimation = setInterval(() => {
        currentValue += valueIncrement;
        // When the incrementing or decrementing passes the end value, ensure it stops at the end value.
        if ((valueIncrement > 0 && currentValue >= endValue) || (valueIncrement < 0 && currentValue <= endValue)) {
            currentValue = endValue; // Ensure the final value is exactly the end value
            clearInterval(tickerAnimation); // Stop the animation
        }
        tickerContainer.textContent = `$${currentValue.toFixed(2)}`;
    }, stepTime);

    return tickerAnimation; // Return the interval ID if needed for further control
}













document.querySelectorAll('.toast-btn').forEach(button => {
    button.addEventListener('click', function() {
        const position = this.dataset.position;
        const message = "This is a toast message!";
        const imageUrl = '../assets/id=CheckCircle.svg'; // Update with your image path
        showToast(position, message, imageUrl);
    });
});

const showToast = (position, message, imageUrl) => {
    const containerId = `toast-container-${position}`;
    const container = document.getElementById(containerId);
    const toast = document.createElement('div');
    toast.className = `toast toast-slide-in-${position}`;

    // Constructing the toast inner HTML with an image, bold text, unbold text, and a dismiss button
    toast.innerHTML = `
        <div class="toast-content">
            <img src="${imageUrl}" alt="Toast Image" class="toast-image">
            <div class="toast-text">
                <strong> Copied! </strong> ${message}
            </div>
        </div>
        <button class="toast-dismiss-btn">OK</button>
    `;

    // Add the new toast and animate its appearance
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = 1;
        toast.style.transform = 'translateX(0) translateY(0)'; // Reset transform for animation
    }, 100);

    // Event listener for the dismiss button
    toast.querySelector('.toast-dismiss-btn').addEventListener('click', () => {
        toast.style.opacity = 0;
        toast.addEventListener('transitionend', () => toast.remove());
    });

    // Automatically remove the toast after a delay (optional)
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.opacity = 0;
            toast.addEventListener('transitionend', () => toast.remove());
        }
    }, 5000); // Adjust time as needed

    // Maintain a maximum of 7 toasts per container
    const maxToasts = 7;
    if (container.children.length > maxToasts) {
        const oldToast = container.children[0];
        oldToast.style.opacity = 0;
        oldToast.addEventListener('transitionend', () => oldToast.remove());
    }
};

