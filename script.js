const API_BASE_URL = "https://e-tender-api.vercel.app";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    document.getElementById("responseData").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById("responseData").textContent = `Failed to fetch data: ${error.message}`;
  }
}
