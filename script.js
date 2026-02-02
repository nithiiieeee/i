const orb = document.getElementById("orb");

window.addEventListener("mousemove", e => {
  const x = (e.clientX / innerWidth - 0.5) * 30;
  const y = (e.clientY / innerHeight - 0.5) * 30;
  orb.style.transform = `translate(${x}px, ${y}px)`;
});

// Cursor / touch trail
const trailCount = 12;
const trails = [];

for (let i = 0; i < trailCount; i++) {
  const t = document.createElement("div");
  t.className = "trail";
  document.body.appendChild(t);
  trails.push({ el: t, x: window.innerWidth / 2, y: window.innerHeight / 2 });
}

let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let lastTouch = null;

function updateTrail() {
  let x = lastTouch ? lastTouch.x : pointer.x;
  let y = lastTouch ? lastTouch.y : pointer.y;

  trails.forEach((t, i) => {
    // interpolate position
    t.x += (x - t.x) * 0.25;
    t.y += (y - t.y) * 0.25;
    t.el.style.transform = `translate(${t.x}px, ${t.y}px)`;
    // fade effect along the trail
    t.el.style.opacity = (trailCount - i) / trailCount;
    x = t.x;
    y = t.y;
  });

  requestAnimationFrame(updateTrail);
}
updateTrail();

// Desktop
window.addEventListener("mousemove", e => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;
});

// Mobile
window.addEventListener("touchstart", e => {
  lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
}, { passive: false });

window.addEventListener("touchmove", e => {
  e.preventDefault(); // prevent scrolling while dragging
  lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
}, { passive: false });

window.addEventListener("touchend", () => {
  lastTouch = null;
});
