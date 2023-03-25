Promise.all([  fetch('https://validator.nymtech.net/api/v1/status/mixnode/834/report'),  fetch('https://validator.nymtech.net/api/v1/status/mixnode/834/reward-estimation'),  fetch('https://validator.nymtech.net/api/v1/status/mixnode/834/avg_uptime'),  fetch('https://validator.nymtech.net/api/v1/status/mixnode/834/status'),  fetch('https://validator.nymtech.net/api/v1/status/mixnode/834/stake-saturation')])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => {
    const resultatsDiv = document.getElementById('resultats');
    let html = "";
    const report = data[0];
    const rewardEstimation = data[1];
    const avgUptime = data[2];
    const status = data[3];
    const stakeSaturation = data[4];
    html += `<div class="resultat"><p>mix_id: ${report.mix_id}</p>`;
    html += `<p>identity: ${report.identity}</p>`;
    html += `<p>last_day: ${report.last_day}</p></div>`;
    html += `<div class="resultat"><p>total_node_reward: ${rewardEstimation.total_node_reward}</p>`;
    html += `<p>operator: ${rewardEstimation.operator}</p>`;
    html += `<p>delegates: ${rewardEstimation.delegates}</p>`;
    html += `<p>operating_cost: ${rewardEstimation.operating_cost}</p></div>`;
    html += `<div class="resultat"><p>avg_uptime: ${avgUptime.avg_uptime}</p></div>`;
    html += `<div class="resultat"><p>status: ${status.status}</p></div>`;
    html += `<div class="resultat"><p>saturation: ${parseFloat(stakeSaturation.saturation).toFixed(2)}%</p></div>`;
    resultatsDiv.innerHTML = html;
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données', error);
  });
