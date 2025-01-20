const baseURL = 'https://<your-vercel-app-name>.vercel.app'; // Replace with your Vercel app URL
const outputDiv = document.getElementById('output');

// Utility function to fetch data
const fetchData = async (endpoint, params = '') => {
  outputDiv.innerHTML = 'Loading...';
  try {
    const response = await fetch(`${baseURL}/${endpoint}${params}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    outputDiv.innerHTML = `Failed to fetch data: ${error.message}`;
  }
};

// Event listeners for each button
document.getElementById('fetchAccessToken').addEventListener('click', () => {
  fetchData('oauth/client_credential/accesstoken');
});

document.getElementById('fetchContractList').addEventListener('click', () => {
  fetchData('etender/v1/contractlist', '?startRow=0');
});

document.getElementById('fetchContractDetails').addEventListener('click', () => {
  const cnUUID = prompt('Enter Contract UUID:'); // Prompt user for UUID
  if (cnUUID) {
    fetchData('etender/v1/contractdetails', `?CNUUID=${cnUUID}`);
  }
});

document.getElementById('fetchPlannedProcurementList').addEventListener('click', () => {
  fetchData('etender/v1/plannedprocurementlist', '?startRow=0');
});

document.getElementById('fetchPlannedProcurementDetails').addEventListener('click', () => {
  const uuid = prompt('Enter Planned Procurement UUID:'); // Prompt user for UUID
  if (uuid) {
    fetchData('etender/v1/plannedprocurementdetails', `?PlannedProcurementUUID=${uuid}`);
  }
});

document.getElementById('fetchStandingOfferNoticeList').addEventListener('click', () => {
  fetchData('etender/v1/standingoffernoticelist', '?startRow=0');
});

document.getElementById('fetchStandingOfferNoticeDetails').addEventListener('click', () => {
  const sonUUID = prompt('Enter Standing Offer Notice UUID:'); // Prompt user for UUID
  if (sonUUID) {
    fetchData('etender/v1/standingoffernoticedetails', `?SONUUID=${sonUUID}`);
  }
});
