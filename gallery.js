const mediaItems = [
  { type: "image", file: "labs/degree-show-catalogue.jpg" },
  { type: "video", file: "labs/blender-animation.mp4" },
  { type: "image", file: "labs/book-far.jpg" },
  { type: "image", file: "labs/book-closeup.jpg" },
  { type: "image", file: "labs/overlap.jpg" }, // example video
  { type: "image", file: "labs/shrine.jpg" }
];

const galleryInner = document.getElementById('galleryInner');

mediaItems.forEach(item => {
  const div = document.createElement('div');
  div.className = 'gallery-item';

  if (item.type === "image") {
    div.innerHTML = `
      <img src="${item.file}">
     
    `;
  } else if (item.type === "video") {
    div.innerHTML = `
      <video 
        src="${item.file}" 
        muted 
        loop 
        playsinline 
        autoplay
        preload="metadata"
        style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; display: block;">
      </video>
     
    `;
  }

  galleryInner.appendChild(div);
});

// Drag scroll (fixed to suppress click after drag)
const container = document.getElementById('gallery');
let isDown = false;
let startX;
let scrollLeft;
let isDragging = false; // <--- add this flag

container.addEventListener('mousedown', (e) => {
  isDown = true;
  isDragging = false;    // reset flag at drag start
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});
container.addEventListener('mouseleave', () => { isDown = false; });
container.addEventListener('mouseup', () => { isDown = false; });
container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1;

  if (Math.abs(walk) > 5) {  // if moved enough, count as dragging
    isDragging = true;
  }

  container.scrollLeft = scrollLeft - walk;
});

// Lightbox functionality (skip click if dragging)
galleryInner.addEventListener('click', (e) => {
  if (isDragging) {
    isDragging = false;  // reset flag and ignore click after drag
    return;
  }

  const target = e.target;
  if (!(target.tagName === 'IMG' || target.tagName === 'VIDEO')) return;

  const overlay = document.createElement('div');
  overlay.id = 'lightboxOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.cursor = 'pointer';
  overlay.style.zIndex = 1000;

  if (target.tagName === 'IMG') {
    const largeImg = document.createElement('img');
    largeImg.src = target.src;
    largeImg.alt = target.alt || '';
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '90%';
    largeImg.style.borderRadius = '8px';
    largeImg.style.cursor = 'auto';
    overlay.appendChild(largeImg);
  } else if (target.tagName === 'VIDEO') {
    const largeVideo = document.createElement('video');
    largeVideo.src = target.src;
    largeVideo.autoplay = true;
    largeVideo.loop = true;
    largeVideo.muted = true;
    largeVideo.controls = true;
    largeVideo.style.maxWidth = '90%';
    largeVideo.style.maxHeight = '90%';
    largeVideo.style.borderRadius = '8px';
    largeVideo.style.cursor = 'auto';
    overlay.appendChild(largeVideo);
  }

  document.body.appendChild(overlay);

  // Animate fade in (optional)
  requestAnimationFrame(() => {
    overlay.classList.add('visible');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    overlay.addEventListener('transitionend', () => {
      overlay.remove();
    }, { once: true });
  });
});
