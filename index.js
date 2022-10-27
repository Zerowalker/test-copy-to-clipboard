const copyText = document.getElementById("input");
const params = new URLSearchParams(window.location.search);

copyText.value = params.get("mail");

document.getElementById("copy").addEventListener("click", () => {
    copyTextToClipboard(copyText.value)
});

async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text)
        console.log('Async: Copying to clipboard was successful!');
    } catch (err) {
        console.error('Async: Could not copy text: ' + err);
        return;
    }
    document.getElementById("msg").textContent = "mailen har kopierats!"
}