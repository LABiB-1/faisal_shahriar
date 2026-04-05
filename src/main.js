import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const introCard = document.getElementById('introCard');
  
  // Trigger entrance animation
  setTimeout(() => {
    introCard.classList.add('visible');
  }, 300);

  // Subtle Mouse Parallax Effect
  document.addEventListener('mousemove', (e) => {
    if (!introCard) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate rotation based on mouse position
    const rotateX = (clientY / innerHeight - 0.5) * 10;
    const rotateY = (clientX / innerWidth - 0.5) * -10;

    introCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0)`;
  });

  // Reset transform on mouse leave
  document.addEventListener('mouseleave', () => {
    introCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  });

  // Adding random movement to background blobs
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach((blob, index) => {
    const delay = index * 2;
    blob.style.animationDelay = `${delay}s`;
  });
});
