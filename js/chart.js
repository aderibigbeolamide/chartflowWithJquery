new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
        labels: ['', 'Q3 21', 'Q4 21', 'Q1 22', 'Q2 22', 'Q3 22', 'Q4 22', 'Q1 23', 'Q2 23', 'Q3 23', 'Q4 23'],
        datasets: [
            {
                data: [, 0, 100, 200, 300, 210, 220, 300, 400, 1600], // Adjusted data values with dollar sign
                // borderColor: "#3cba9f",
                borderBox: "rgba(0, 0, 0, 0)",
                borderTension: 0,
                fill: false
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Chart JS Line Chart Example'
        },
        scales: {
            y: {
                max: 3000, // Set the maximum value to 3000
                ticks: {
                    stepSize: 1000, // Set the step size for ticks
                    callback: function (value, index, values) {
                        if (value === 0) {
                            return '$0';
                        } else {
                            return '$' + value / 1000 + 'k';
                        }
                    }
                }
            }
        }
    }
});