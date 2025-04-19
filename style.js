document.getElementById('fetch-username').addEventListener('click', function() {
    var bgmiId = document.getElementById('bgmi-id').value;
    if (bgmiId === "") {
        alert("Please enter your BGMI ID");
        return;
    }
    
    // Use RapidAPI or your own BGMI ID-to-Username API
    fetch(`https://api.example.com/getUsername?bgmiId=${bgmiId}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26a0fd911cmsha34f81402c0c112p11f908jsnf048ff5d13da',
            'X-RapidAPI-Host': 'bgmi-username-fetcher.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
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

document.getElementById('buy-now').addEventListener('click', function() {
    var bgmiId = document.getElementById('bgmi-id').value;
    var ucPack = document.getElementById('uc-pack').value;
    if (bgmiId === "") {
        alert("Please enter your BGMI ID");
    } else {
        var price = 0;
        switch(ucPack) {
            case '60':
                price = 59;
                break;
            case '300':
                price = 299;
                break;
            case '600':
                price = 589;
                break;
            case '1800':
                price = 1749;
                break;
            case '3850':
                price = 3599;
                break;
        }
        alert("Your selected UC pack: " + ucPack + " UC for ₹" + price);
        document.getElementById('payment-info').style.display = 'block';
    }
});

document.getElementById('submit-payment').addEventListener('click', function() {
    var screenshot = document.getElementById('screenshot').files.length;
    if (screenshot === 0) {
        alert("Please upload the payment screenshot.");
    } else {
        alert("Order confirmed! UC will be delivered shortly.");
        document.getElementById('payment-info').style.display = 'none';
    }
});
