document.getElementById('button').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        document.getElementById('text').innerText = `"${data.slip.advice}"`;
        document.getElementById('number').innerText = `ADVICE #${data.slip.id}`;
    })
    .catch(error => {
        document.getElementById('text').innerText = 'Sorry, something went wrong!';
        console.error('Error fetching advice:', error);
    });
});