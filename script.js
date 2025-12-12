var mainNav = document.getElementById("mainNav");
var hamburgerBtn = document.getElementById("hamburgerBtn");

if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener("click", function () {
    mainNav.classList.toggle("is-open");
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (mainNav) mainNav.classList.remove("is-open");
  }
});

var searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    alert("Search clicked (we can build a real search later).");
  });
}

var tabBooking = document.getElementById("tabBooking");
var tabEnquiry = document.getElementById("tabEnquiry");
var panelBooking = document.getElementById("panelBooking");
var panelEnquiry = document.getElementById("panelEnquiry");

function setTab(which) {
  if (!tabBooking || !tabEnquiry || !panelBooking || !panelEnquiry) return;

  if (which === "booking") {
    tabBooking.classList.add("is-active");
    tabEnquiry.classList.remove("is-active");
    panelBooking.classList.add("is-active");
    panelEnquiry.classList.remove("is-active");
  } else {
    tabEnquiry.classList.add("is-active");
    tabBooking.classList.remove("is-active");
    panelEnquiry.classList.add("is-active");
    panelBooking.classList.remove("is-active");
  }
}

if (tabBooking) tabBooking.addEventListener("click", function () { setTab("booking"); });
if (tabEnquiry) tabEnquiry.addEventListener("click", function () { setTab("enquiry"); });

var adultMinus = document.getElementById("adultMinus");
var adultPlus = document.getElementById("adultPlus");
var childMinus = document.getElementById("childMinus");
var childPlus = document.getElementById("childPlus");
var adultCountEl = document.getElementById("adultCount");
var childCountEl = document.getElementById("childCount");
var totalPriceEl = document.getElementById("totalPrice");
var bookBtn = document.getElementById("bookBtn");
var dateInput = document.getElementById("dateInput");

var insHealth = document.getElementById("insHealth");
var insMedical = document.getElementById("insMedical");

var ADULT_PRICE = 490;
var CHILD_PRICE = 200;
var HEALTH_PRICE = 220;
var MEDICAL_PRICE = 45;

function getNumber(el) {
  if (!el) return 0;
  var n = parseInt(el.textContent, 10);
  if (isNaN(n)) return 0;
  return n;
}

function setNumber(el, n) {
  if (!el) return;
  el.textContent = String(n);
}

function calcTotal() {
  var adults = getNumber(adultCountEl);
  var kids = getNumber(childCountEl);
  var extras = 0;

  if (insHealth && insHealth.checked) extras = extras + HEALTH_PRICE;
  if (insMedical && insMedical.checked) extras = extras + MEDICAL_PRICE;

  var total = adults * ADULT_PRICE + kids * CHILD_PRICE + extras;

  if (totalPriceEl) totalPriceEl.textContent = String(total);
  if (bookBtn) bookBtn.textContent = "BOOK NOW FOR $ " + total;
}

function changeCount(el, diff, min) {
  var current = getNumber(el);
  var next = current + diff;
  if (next < min) next = min;
  setNumber(el, next);
  calcTotal();
}

if (adultMinus) adultMinus.addEventListener("click", function () { changeCount(adultCountEl, -1, 1); });
if (adultPlus) adultPlus.addEventListener("click", function () { changeCount(adultCountEl, 1, 1); });
if (childMinus) childMinus.addEventListener("click", function () { changeCount(childCountEl, -1, 0); });
if (childPlus) childPlus.addEventListener("click", function () { changeCount(childCountEl, 1, 0); });

if (insHealth) insHealth.addEventListener("change", calcTotal);
if (insMedical) insMedical.addEventListener("change", calcTotal);

if (bookBtn) {
  bookBtn.addEventListener("click", function () {
    var adults = getNumber(adultCountEl);
    var kids = getNumber(childCountEl);
    var dateVal = dateInput ? dateInput.value : "";
    var total = totalPriceEl ? totalPriceEl.textContent : "";

    alert(
      "Booking Summary:\n" +
        "Date: " + (dateVal || "not picked") + "\n" +
        "Adults: " + adults + "\n" +
        "Children: " + kids + "\n" +
        "Total: $ " + total
    );
  });
}

var sendEnquiryBtn = document.getElementById("sendEnquiryBtn");
if (sendEnquiryBtn) {
  sendEnquiryBtn.addEventListener("click", function () {
    var name = document.getElementById("enquiryName");
    var email = document.getElementById("enquiryEmail");
    var msg = document.getElementById("enquiryMsg");

    var nameVal = name ? name.value : "";
    var emailVal = email ? email.value : "";
    var msgVal = msg ? msg.value : "";

    if (!nameVal || !emailVal || !msgVal) {
      alert("Please fill name, email and message.");
      return;
    }

    alert("Enquiry sent!\nName: " + nameVal + "\nEmail: " + emailVal);
  });
}

calcTotal();

var itRows = document.querySelectorAll(".it-row");

for (var i = 0; i < itRows.length; i++) {
  itRows[i].addEventListener("click", function () {
    var isOpen = this.classList.contains("is-open");

    for (var j = 0; j < itRows.length; j++) {
      itRows[j].classList.remove("is-open");
    }

    if (!isOpen) {
      this.classList.add("is-open");
    }
  });
}

var packageBtns = document.querySelectorAll(".pk-btn");

for (var k = 0; k < packageBtns.length; k++) {
  packageBtns[k].addEventListener("click", function () {
    var name = this.getAttribute("data-name");
    var price = this.getAttribute("data-price");
    alert("Package: " + name + "\nFrom: $ " + price);
  });
}