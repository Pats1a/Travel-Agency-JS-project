var mainNav = document.getElementById("mainNav");
var hamburgerBtn = document.getElementById("hamburgerBtn");

if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener("click", function () {
    mainNav.classList.toggle("is-open");
  });
}

var dropParents = document.querySelectorAll(".has-drop");

function closeAllDrops() {
  for (var i = 0; i < dropParents.length; i++) {
    dropParents[i].classList.remove("is-open");
  }
}

for (var j = 0; j < dropParents.length; j++) {
  (function () {
    var item = dropParents[j];
    var btn = item.querySelector("button");
    if (!btn) return;

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpenNow = item.classList.contains("is-open");
      closeAllDrops();
      if (!isOpenNow) item.classList.add("is-open");
    });
  })();
}

document.addEventListener("click", function () {
  closeAllDrops();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeAllDrops();
    if (mainNav) mainNav.classList.remove("is-open");
  }
});

var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");

var slides = [
  [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?auto=format&fit=crop&w=1600&q=60",
  ],
  [
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=60",
  ],
  [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?auto=format&fit=crop&w=1600&q=60",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=60",
  ],
];

var slideIndex = 0;

function showSlides() {
  if (!pic1 || !pic2 || !pic3) return;

  pic1.style.backgroundImage = 'url("' + slides[slideIndex][0] + '")';
  pic2.style.backgroundImage = 'url("' + slides[slideIndex][1] + '")';
  pic3.style.backgroundImage = 'url("' + slides[slideIndex][2] + '")';
}

function nextSlides() {
  slideIndex = slideIndex + 1;
  if (slideIndex > slides.length - 1) slideIndex = 0;
  showSlides();
}

function prevSlides() {
  slideIndex = slideIndex - 1;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlides();
}

if (nextBtn) nextBtn.addEventListener("click", nextSlides);
if (prevBtn) prevBtn.addEventListener("click", prevSlides);

showSlides();

var searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    alert("Search clicked (we can build a real search later).");
  });
}