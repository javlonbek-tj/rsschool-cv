/*  Copy text to Clipboard*/
const copyIcon = document.getElementById("copy-icon");
const copiedText = document.getElementById("copied-text");
const codeBlock = document.getElementById("code-block").innerText;

async function copyTextToClipboard() {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(codeBlock);
      copyIcon.style.display = "none";
      copiedText.style.display = "block";
    }
  } catch (err) {
    console.error(err);
  }
}

copyIcon.addEventListener("click", copyTextToClipboard);
