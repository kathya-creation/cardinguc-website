document.getElementById('fetch-username').addEventListener('click', function() {
    var bgmiId = document.getElementById('bgmi-id').value;
    if (bgmiId === "") {
        alert("Please enter your BGMI ID");
        return;
    }

    console.log('Fetching username for BGMI ID:', bgmiId); // Debugging log

    fetch(`https://bgmi-username-fetcher.p.rapidapi.com/?id=${bgmiId}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26a0fd911cmsha34f81402c0c112p11f908jsnf048ff5d13da',  // Make sure to replace with your key
            'X-RapidAPI-Host': 'bgmi-username-fetcher.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('API response:', data); // Debugging log
        if (data.error) {
            alert("Error fetching username");
        } else {
            document.getElementById('username-output').textContent = `Username: ${data.username}`;
        }
    })
    .catch(err => {
        console.error('Error:', err);
        alert('Failed to fetch username');
    });
});
