fetch('https://validator.nymtech.net/api/v1/status/mixnode/834/report')
  .then(response => response.json())
  .then(data => {
    const resultatsDiv = document.getElementById('report-result');
    let html = "";
    html += `<p>mix_id: ${data.mix_id}</p>`;
    html += `<p>identity: ${data.identity}</p>`;
    html += `<p>last_day: ${data.last_day}</p>`;
    resultatsDiv.innerHTML = html;
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données', error);
  });
fetch('https://validator.nymtech.net/api/v1/status/mixnode/834/status')
  .then(response => response.json())
  .then(data => {
    const resultatsDiv2 = document.getElementById('status-result');
    let html = "";
    html += `<p>status: ${data.status}</p>`;
    resultatsDiv2.innerHTML = html;
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données', error);
  });

