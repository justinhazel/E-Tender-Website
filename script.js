document.getElementById('fetchData').addEventListener('click', async () => {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = 'Loading...';

  try {
    // Replace with your Vercel API URL
    const baseURL = 'https://e-tender-r7edzd598-justins-projects-0c9bc3be.vercel.app/';

    // Fetch contract list
    const response = await fetch(`${baseURL}/contractlist?startRow=0`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Parse JSON data
    const data = await response.json();

    // Display data in the browser
    outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    outputDiv.innerHTML = `Failed to fetch data: ${error.message}`;
  }
});
