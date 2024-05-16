const words = [
  "taking polls",
  "educating voters",
  "making decisions",
  "selecting leaders",
  "conducting surveys",
  "running contests",
];

const changingText = document.getElementById("changing-text");
const cursor = document.getElementById("cursor");
let currentIndex = 0;
let charIndex = 0;
let typingSpeed = 100; // Adjust typing speed (in milliseconds)

function typeText() {
  if (charIndex < words[currentIndex].length) {
    changingText.textContent += words[currentIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, typingSpeed * 10); // Wait before erasing
  }
}

function eraseText() {
  if (charIndex >= 0) {
    const text = words[currentIndex].substring(0, charIndex);
    changingText.textContent = text;
    charIndex--;
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    currentIndex = (currentIndex + 1) % words.length;
    setTimeout(typeText, typingSpeed); // Start typing the next word
  }
}

// Start typing
typeText();
