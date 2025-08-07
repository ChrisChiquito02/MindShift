
document.addEventListener('DOMContentLoaded', function () {
  const chart = document.getElementById('statsChart');
  if (chart) {
    new Chart(chart, {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
        datasets: [{
          label: 'Uso del dispositivo (hrs)',
          data: [2.5, 3, 1.8, 2.1, 3.5],
          backgroundColor: '#c2a477'
        }]
      }
    });
  }

  const timeCounter = document.getElementById('timeCounter');
  if (timeCounter) {
    let seconds = 0;
    setInterval(() => {
      seconds++;
      let hrs = Math.floor(seconds / 3600);
      let mins = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;
      timeCounter.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
  }

  const descansoBtn = document.getElementById('breaksTaken');
  if (descansoBtn) {
    let breaks = 0;
    descansoBtn.addEventListener('click', () => {
      breaks++;
      descansoBtn.textContent = `Descansos tomados hoy: ${breaks}`;
    });
  }
});
