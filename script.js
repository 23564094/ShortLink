function shortenUrl() {
    var longUrl = document.getElementById('long-url').value;

    // Perform URL shortening logic here (e.g., using a serverless function or external API)
    // For demonstration purposes, let's use a placeholder shortened URL
    var shortenedUrl = 'https://dload.pages.dev/abcd123';

    // Display the shortened link to the user
    var shortenedLinkElement = document.getElementById('shortened-link');
    shortenedLinkElement.innerText = 'Shortened URL: ' + shortenedUrl;
}
