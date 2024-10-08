const urlInput = document.getElementById('url');
const convertButton = document.getElementById('convert');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', async () => {
    const url = urlInput.value.trim();
    if (!url) return;

    try {
        const response = await fetch(`https://yt-mp3-api.herokuapp.com/api/v1/convert?url=${url}`);
        const data = await response.json();
        const mp3Url = data.link;

        resultDiv.innerHTML = `
            <a href="${mp3Url}" download="${getVideoTitle(url)}.mp3">Download MP3</a>
        `;
    } catch (error) {
        resultDiv.innerHTML = 'Error: ' + error.message;
    }
});

function getVideoTitle(url) {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/)[1];
    return `YouTube Video - ${videoId}`;
}
