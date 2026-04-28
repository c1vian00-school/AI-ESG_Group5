// Wait for the DOM to load before drawing the chart
document.addEventListener('DOMContentLoaded', () => {
  
  const ctx = document.getElementById('energyChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Renewable', 'Non-renewable'],
      datasets: [{
        label: 'Energy Consumption 2025 (GWh)',
        // Hardcoded data from the Terveystalo ESG report
        data: [14.83, 3.025], 
        backgroundColor: [
          '#4ade80', // Green for renewable
          '#f87171'  // Red for non-renewable
        ],
        borderWidth: 0,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false // Hiding legend since the labels speak for themselves
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'GWh'
          }
        }
      }
    }
  });
});
