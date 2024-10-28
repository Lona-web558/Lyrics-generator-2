document.getElementById('generate').addEventListener('click', function() {
    const artist = document.getElementById('artist').value;
    const title = document.getElementById('title').value;
    const lyrics = document.getElementById('lyrics').value;

    const outputDiv = document.getElementById('output');

    if (artist && title && lyrics) {
        outputDiv.innerHTML = `<h3>${title} by ${artist}</h3><pre>${lyrics}</pre>`;
    } else {
        outputDiv.innerHTML = "Please fill in all fields.";
    }
});