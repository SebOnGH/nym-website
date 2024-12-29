const statusUrl = 'https://validator.nymtech.net/api/v2/status/mixnode/834/status';
const NstatusUrl = 'http://176.223.138.228:8000/api/v1/health';
const inclusionProbabilityUrl = 'https://validator.nymtech.net/api/v2/status/mixnode/834/inclusion-probability';
const rewardEstimationUrl = 'https://validator.nymtech.net/api/v2/status/mixnode/834/reward-estimation';
const reportUrl = 'https://validator.nymtech.net/api/v2/status/mixnode/834/report';
const avgUptimeUrl = 'https://validator.nymtech.net/api/v2/status/mixnode/834/avg_uptime';


const statusBox = document.getElementById('status-value');
const NstatusBox = document.getElementById('status-value');
const inclusionProbabilityBox = document.getElementById('inclusion-probability-value');
const rewardEstimationBox = document.getElementById('reward-estimation-value');
const reportBox = document.getElementById('report-value');
const avgUptimeBox = document.getElementById('avg-uptime-value');

//fetch(statusUrl)
//    .then(response => response.json())
//    .then(data => {
//        statusBox.innerHTML = `
//      <p>Status : ${data.status? data.status : 'N/A'}</p>
//    `;
//    })
//    .catch(error => {
//        console.error('Error fetching status:', error);
//    });

//fetch('http://176.223.138.228:8000/api/v1/health', {
//	method: 'GET',
//	headers: {
//		'Content-Type': 'application/json',
//		'Access-Control-Allow-Origin': '*',
//	}
//})
//	.then(response => response.json())
//	.then(response => console.log(response))
//	.catch(err => console.error(err));
		

//fetch(NstatusUrl,{
//	mode: 'no-cors'
//	})
//    .then(response => response.json())
//    .then(data => {
//        statusBox.innerHTML = `
//      <p>Status : ${data.status? data.status : 'N/A'}</p>
//    `;
//    })
//    .catch(error => {
//        console.error('Error fetching status:', error);
//    });
//
//fetch(inclusionProbabilityUrl)
//    .then(response => response.json())
//    .then(data => {
//        inclusionProbabilityBox.innerHTML = `
//      <p>In active: ${data.in_active}</p>
//      <p>In reserve: ${data.in_reserve}</p>
//    `;
//    })
//    .catch(error => {
//        console.error('Error fetching inclusion probability:', error);
//    });
//
//fetch(rewardEstimationUrl)
//    .then(response => response.json())
//    .then(data => {
//        rewardEstimationBox.innerHTML = `
//      <p>Total Node Reward : ${data.total_node_reward  ? data.total_node_reward : 'N/A'}</p>
//      <p>Operator : ${data.operator ? data.operator : 'N/A'}</p>
//      <p>Delegates : ${data.delegates ? data.delegates : 'N/A'}</p>
//      <p>Operating Cost : ${data.operating_cost ? data.operating_cost : 'N/A'}</p>
//    `;
//    })
//    .catch(error => {
//        console.error('Error fetching inclusion probability:', error);
//    });
//
//fetch(reportUrl)
//    .then(response => response.json())
//    .then(data => {
//        reportBox.innerHTML = `
//      <p>MixID : ${data.mix_id  ? data.mix_id : 'N/A'}</p>
//      <p>Identity : ${data.identity ? data.identity : 'N/A'}</p>
//      <p>Routing score (24h) : ${data.last_day ? data.last_day : 'N/A'}%</p>
//    `;
//    })
//    .catch(error => {
//        console.error('Error fetching inclusion probability:', error);
//    });
//
//fetch(avgUptimeUrl)
//    .then(response => response.json())
//    .then(data => {
//        avgUptimeBox.innerHTML = `
//      <p>Average uptime : ${data.avg_uptime ? data.avg_uptime : 'N/A'}%</p>
//    `;
//    })
//    .catch(error => {
//        console.error('Error fetching status:', error);
//    });
