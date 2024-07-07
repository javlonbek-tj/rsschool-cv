/*  ====== Copy text to Clipboard ======= */

const copyIcon = document.getElementById('copy-icon');
const copiedText = document.getElementById('copied-text');
const codeBlock = document.getElementById('code-block').innerText;

async function copyTextToClipboard() {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(codeBlock);
      copyIcon.style.display = 'none';
      copiedText.style.display = 'block';
    }
  } catch (err) {
    console.error(err);
  }
}

copyIcon.addEventListener('click', copyTextToClipboard);

/* ====== Show menu ====== */

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* ====== Remove mune mobile ====== */

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));
