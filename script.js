// Elements
const noButton = document.getElementById("noButton");
const yesButton = document.querySelector(
  'button[onclick*="thankyou.html"]'
);
const photo = document.getElementById("mainPhoto");

// Image list
const photos = [
  "please.png",
  "sad.png",
  "cry.png"
];

let index = 0;

// ---------- NO BUTTON CLICK ----------
noButton.addEventListener("click", function () {

  // Increase YES button size
  let currentFontSize = parseInt(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = (currentFontSize + 10) + "px";

  // Change photo with fade effect
  photo.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % photos.length;
    photo.src = photos[index];
    photo.style.opacity = 1;
  }, 200);
});


// ---------- NO BUTTON RUN AWAY ----------
noButton.addEventListener("mouseover", function () {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noButton.style.position = "absolute";
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});


// ---------- HEARTS WHEN YES CLICKED ----------
yesButton.addEventListener("click", function (e) {

  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "fall 2s linear";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});
