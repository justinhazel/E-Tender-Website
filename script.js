// Base API URL
const BASE_URL = "https://e-tender-api.vercel.app";

// Function to fetch data from the API
async function fetchData(endpoint) {
  const outputElement = document.getElementById('output');
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    outputElement.innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    outputElement.innerText = `Failed to fetch data: ${error.message}`;
  }
}

// Event listeners for buttons
document.getElementById('fetchAccessToken').addEventListener('click', () => {
  fetchData("oauth/client_credential/accesstoken?grant_type=client_credentials");
});

document.getElementById('fetchContractList').addEventListener('click', () => {
  fetchData("etender/v1/contractlist?startRow=0");
});

document.getElementById('fetchContractDetails').addEventListener('click', () => {
  fetchData("etender/v1/contractdetails?CNUUID=sample_uuid"); // Replace "sample_uuid" with an actual value
});

document.getElementById('fetchPlannedProcurementList').addEventListener('click', () => {
  fetchData("etender/v1/plannedprocurementlist?startRow=0");
});

document.getElementById('fetchPlannedProcurementDetails').addEventListener('click', () => {
  fetchData("etender/v1/plannedprocurementdetails?PlannedProcurementUUID=sample_uuid"); // Replace "sample_uuid" with an actual value
});

document.getElementById('fetchStandingOfferNoticeList').addEventListener('click', () => {
  fetchData("etender/v1/standingoffernoticelist?startRow=0");
});

document.getElementById('fetchStandingOfferNoticeDetails').addEventListener('click', () => {
  fetchData("etender/v1/standingoffernoticedetails?SONUUID=sample_uuid"); // Replace "sample_uuid" with an actual value
});
