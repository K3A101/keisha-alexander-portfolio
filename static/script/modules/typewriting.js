// typewriting.js
let speed = 50;
let i = 0;
let textIndex = 0;

export function typeWriter() {
  // Move DOM queries inside the function or add checks
  const animationContainer = document.querySelector('.animation-container');
  
  // Early return if container doesn't exist
  if (!animationContainer) {
    console.warn('Animation container not found');
    return null;
  }
  
  const paragraphs = animationContainer.querySelectorAll('.typewriter-text');
  const demo = animationContainer.querySelector("#demo");
  
  // Check if required elements exist
  if (!demo || paragraphs.length === 0) {
    console.warn('Required elements not found');
    return null;
  }
  
  let characters = paragraphs[textIndex].textContent;
  let isDeleting = false;
  
  function animate() {
    if (!isDeleting && i < characters.length) {
      demo.innerHTML += characters.charAt(i);
      i++;
      setTimeout(animate, speed);
    } else if (!isDeleting && i === characters.length) {
      isDeleting = true;
      setTimeout(animate, 2000);
    } else if (isDeleting && i > 0) {
      demo.innerHTML = characters.substring(0, i - 1);
      i--;
      setTimeout(animate, speed / 2);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % paragraphs.length;
      characters = paragraphs[textIndex].textContent;
      setTimeout(animate, 500);
    }
  }
  
  animate();
}