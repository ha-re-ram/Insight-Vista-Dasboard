const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  }

  const ctx1 = document.getElementById('lineChart');
  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Users',
        data: [300, 500, 700, 600, 800],
        borderColor: '#6366f1',
        tension: 0.4
      }]
    },
    options: { plugins: { legend: { display: false } } }
  });

  const ctx2 = document.getElementById('doughnutChart');
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Sales', 'Subscriptions', 'Other'],
      datasets: [{
        data: [50, 30, 20],
        backgroundColor: ['#6366f1', '#60a5fa', '#facc15']
      }]
    },
    options: { plugins: { legend: { position: 'bottom' } } }
  });

  const ctx3 = document.getElementById('barChart');
  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Growth',
        data: [20, 30, 50, 40],
        backgroundColor: '#6366f1'
      }]
    },
    options: { plugins: { legend: { display: false } } }
  });

  const ctx4 = document.getElementById('pieChart');
  new Chart(ctx4, {
    type: 'pie',
    data: {
      labels: ['Mobile', 'Desktop', 'Tablet'],
      datasets: [{
        data: [55, 35, 10],
        backgroundColor: ['#34d399', '#3b82f6', '#f87171']
      }]
    },
    options: { plugins: { legend: { position: 'bottom' } } }
  });