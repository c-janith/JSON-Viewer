document.getElementById('fetchButton').addEventListener('click', async () => {
    const url = document.getElementById('jsonUrl').value || 'https://ghostvpnhub.duckdns.org:2096/json/ue15k6mm3dven3ib';
    const output = document.getElementById('jsonOutput');

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        output.textContent = JSON.stringify(json, null, 2);
    } catch (error) {
        output.textContent = `Error fetching JSON: ${error.message}`;
    }
});
