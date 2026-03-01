function sendMail(event){
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const subjectInput = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(subjectInput);

  const body = encodeURIComponent(
    name + "\n\n" + message
  );

  window.location.href =
    `mailto:8mkw7y7uo@mozmail.com?subject=${subject}&body=${body}`;
}

function togglePalette(){
  const palette = document.getElementById("palette");
  palette.classList.toggle("active");
}

document.querySelectorAll(".color").forEach(color => {
  color.addEventListener("click", () => {
    const selectedColor = color.getAttribute("data-color");

    document.documentElement.style.setProperty("--accent", selectedColor);
    localStorage.setItem("accentColor", selectedColor);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("accentColor");
  if(savedColor){
    document.documentElement.style.setProperty("--accent", savedColor);
  }
});

if(window.innerWidth >= 768){
      document.getElementById('mobile-content').style.display = 'none';
      document.getElementById('desktop-block').style.display = 'block';
    }
