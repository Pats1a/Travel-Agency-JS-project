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

var offerBtns = document.querySelectorAll(".offer-btn");

for (var m = 0; m < offerBtns.length; m++) {
  offerBtns[m].addEventListener("click", function () {
    var offer = this.getAttribute("data-offer");
    alert("Offer clicked: " + offer);
  });
}

var chooseBtn = document.getElementById("chooseBtn");
if (chooseBtn) {
  chooseBtn.addEventListener("click", function () {
    alert("Button clicked.");
  });
}

var chooseItems = document.querySelectorAll(".choose-item");
for (var n2 = 0; n2 < chooseItems.length; n2++) {
  chooseItems[n2].addEventListener("click", function () {
    var name = this.getAttribute("data-name");
    var price = this.getAttribute("data-price");
    alert("Tour: " + name + "\nPrice: $ " + price);
  });
}

var contactForm = document.getElementById("contactForm");
var contactMsg = document.getElementById("contactMsg");

if (contactForm && contactMsg) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var nameEl = document.getElementById("cName");
    var emailEl = document.getElementById("cEmail");
    var msgEl = document.getElementById("cMsg");

    var nameVal = nameEl ? nameEl.value.trim() : "";
    var emailVal = emailEl ? emailEl.value.trim() : "";
    var msgVal = msgEl ? msgEl.value.trim() : "";

    contactMsg.classList.add("is-show");

    if (!nameVal || !emailVal || !msgVal) {
      contactMsg.classList.add("is-error");
      contactMsg.textContent = "Please fill all fields.";
      return;
    }

    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(emailVal)) {
      contactMsg.classList.add("is-error");
      contactMsg.textContent = "Please enter a valid email.";
      return;
    }

    contactMsg.classList.remove("is-error");
    contactMsg.textContent = "Message sent! We will reply soon.";
    contactForm.reset();

    setTimeout(function () {
      contactMsg.classList.remove("is-show");
    }, 2500);
  });
}

var shopSort = document.getElementById("shopSort");
var productsGrid = document.getElementById("productsGrid");
var cartWrap = document.getElementById("cartWrap");
var cartBtn = document.getElementById("cartBtn");
var cartPanel = document.getElementById("cartPanel");
var cartCount = document.getElementById("cartCount");
var cartItems = document.getElementById("cartItems");
var cartTotal = document.getElementById("cartTotal");
var cartClearBtn = document.getElementById("cartClearBtn");
var cartCheckoutBtn = document.getElementById("cartCheckoutBtn");
var toastEl = document.getElementById("toastMsg");
var toastTimer = null;
var optModal = document.getElementById("optModal");
var optTitle = document.getElementById("optTitle");
var optAddBtn = document.getElementById("optAddBtn");
var optCloseBtn = document.getElementById("optCloseBtn");
var optVariantBtns = optModal ? optModal.querySelectorAll(".opt-variant") : [];
var optSelectedPrice = 0;
var optSelectedName = "";
var optSelectedImg = "";
var shopSortKey = "shopSortVal";

function saveShopSort(val) {
  try {
    sessionStorage.setItem(shopSortKey, val);
  } catch (e) {}
}

function loadShopSort() {
  try {
    return sessionStorage.getItem(shopSortKey) || "";
  } catch (e) {
    return "";
  }
}

function renderShopProducts(items) {
  if (!productsGrid) return;
  if (!items || !items.length) return;

  var html = items
    .map(function (p) {
      var badgeHtml = p.badge ? '<span class="product-badge">' + p.badge + "</span>" : "";
      var actionText = p.action === "select" ? "Select options" : "Add to cart";
      var variants = Array.isArray(p.variants) ? p.variants.join(",") : "";
      var variantsAttr = variants ? ' data-variants="' + variants + '"' : "";

      return (
        '<div class="product-card" data-name="' +
        p.name +
        '" data-price="' +
        p.price +
        '"' +
        variantsAttr +
        ">" +
        '<div class="product-img">' +
        badgeHtml +
        '<img src="' +
        p.img +
        '" alt="' +
        p.name +
        '" />' +
        "</div>" +
        '<div class="product-title">' +
        p.name +
        "</div>" +
        '<div class="product-price">' +
        (p.display || "$ " + p.price.toFixed(2)) +
        "</div>" +
        '<button class="product-btn" type="button" data-action="' +
        (p.action || "add") +
        '">' +
        actionText +
        "</button>" +
        "</div>"
      );
    })
    .join("");

  productsGrid.innerHTML = html;
}

function loadShopProducts() {
  if (!productsGrid) return;
  if (!window.fetch) return;

  fetch("./data/shopProducts.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (!Array.isArray(data)) return;

      var cleaned = data.filter(function (p) {
        return p && p.name && p.img;
      });

      renderShopProducts(cleaned);
      sortProducts(shopSort ? shopSort.value : "default");
    })
    .catch(function () {});
}

function sortProducts(type) {
  if (!productsGrid) return;

  var cards = productsGrid.querySelectorAll(".product-card");
  var arr = [];

  for (var i3 = 0; i3 < cards.length; i3++) {
    arr.push(cards[i3]);
  }

  if (type === "priceLow") {
    arr.sort(function (a, b) {
      return parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price"));
    });
  } else if (type === "priceHigh") {
    arr.sort(function (a, b) {
      return parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price"));
    });
  } else if (type === "name") {
    arr.sort(function (a, b) {
      return a.getAttribute("data-name").localeCompare(b.getAttribute("data-name"));
    });
  }

  for (var j3 = 0; j3 < arr.length; j3++) {
    productsGrid.appendChild(arr[j3]);
  }
}

if (shopSort) {
  var savedSort = loadShopSort();
  if (savedSort) shopSort.value = savedSort;

  shopSort.addEventListener("change", function () {
    sortProducts(shopSort.value);
    saveShopSort(shopSort.value);
  });
}

function showToast(text) {
  if (!productsGrid) return;
  if (!toastEl) return;
  if (window.jQuery) {
    $("#toastMsg").text(text).addClass("is-show");
  } else {
    toastEl.textContent = text;
    toastEl.classList.add("is-show");
  }

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    if (window.jQuery) $("#toastMsg").removeClass("is-show");
    else toastEl.classList.remove("is-show");
  }, 1800);
}

function setOptionButtons(prices) {
  if (!optVariantBtns || !optVariantBtns.length) return;
  if (!Array.isArray(prices)) prices = [50, 80];

  Array.prototype.slice.call(optVariantBtns).forEach(function (btn, idx) {
    var val = prices[idx];
    if (typeof val === "number" && !isNaN(val)) {
      btn.style.display = "inline-block";
      btn.setAttribute("data-price", String(val));
      btn.textContent = "$ " + val.toFixed(2);
    } else {
      btn.style.display = "none";
    }
  });
}

function openOptionsModal(name, img) {
  if (!productsGrid) return;
  if (!optModal) return;

  optSelectedName = name || "";
  optSelectedImg = img || "./images/carousel1.jpg";
  optSelectedPrice = 0;

  if (optTitle) optTitle.textContent = optSelectedName;

  var variants = [50, 80];
  if (productsGrid) {
    var cards = productsGrid.querySelectorAll(".product-card");
    var foundCard = null;
    for (var c = 0; c < cards.length; c++) {
      if (cards[c].getAttribute("data-name") === optSelectedName) foundCard = cards[c];
    }

    if (foundCard) {
      var raw = foundCard.getAttribute("data-variants") || "";
      var parts = raw.split(",");
      var nums = parts
        .map(function (x) {
          return x.trim();
        })
        .filter(function (x) {
          return /^\d+(\.\d+)?$/.test(x);
        })
        .map(function (x) {
          return parseFloat(x);
        });

      if (nums.length) variants = nums;
    }
  }

  setOptionButtons(variants);

  var i = 0;
  do {
    optSelectedPrice = variants[i];
    i++;
  } while ((!optSelectedPrice || isNaN(optSelectedPrice)) && i < variants.length);

  if (optVariantBtns && optVariantBtns.length) {
    for (var v3 = 0; v3 < optVariantBtns.length; v3++) {
      if (v3 === 0) optVariantBtns[v3].classList.add("is-active");
      else optVariantBtns[v3].classList.remove("is-active");
    }
  }

  optModal.classList.add("is-open");
}

function closeOptionsModal() {
  if (!optModal) return;
  optModal.classList.remove("is-open");
}

if (optVariantBtns && optVariantBtns.length) {
  for (var v = 0; v < optVariantBtns.length; v++) {
    optVariantBtns[v].addEventListener("click", function (e) {
      e.stopPropagation();
      optSelectedPrice = parseFloat(this.getAttribute("data-price")) || 0;

      for (var x1 = 0; x1 < optVariantBtns.length; x1++) {
        optVariantBtns[x1].classList.remove("is-active");
      }
      this.classList.add("is-active");
    });
  }
}

if (optAddBtn) {
  optAddBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!optSelectedName || !optSelectedPrice) return;
    addToCart(optSelectedName, optSelectedPrice, optSelectedImg);
    closeOptionsModal();
  });
}

if (optCloseBtn) {
  optCloseBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeOptionsModal();
  });
}

if (optModal) {
  optModal.addEventListener("click", function (e) {
    if (e.target === optModal) closeOptionsModal();
  });
}

var cartKey = "shopCart";

function getCart() {
  try {
    var raw = localStorage.getItem(cartKey);
    if (!raw) return [];
    var arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr;
  } catch (e) {
    return [];
  }
}

function saveCart(arr) {
  try {
    localStorage.setItem(cartKey, JSON.stringify(arr));
  } catch (e) {}
}

var cart = getCart();

function getCartCount() {
  var count = 0;
  var iC = 0;
  while (iC < cart.length) {
    count += cart[iC].qty || 0;
    iC++;
  }
  return count;
}

function openCart() {
  if (!cartPanel) return;
  cartPanel.classList.add("is-open");
}

function closeCart() {
  if (!cartPanel) return;
  cartPanel.classList.remove("is-open");
}

function toggleCart(e) {
  if (e) e.stopPropagation();
  if (!cartPanel) return;
  var isOpen = cartPanel.classList.contains("is-open");
  if (isOpen) closeCart();
  else openCart();
}

function updateCartBadge() {
  if (!cartCount) return;
  cartCount.textContent = String(getCartCount());
}

function renderCart() {
  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";
  var total = cart.reduce(function (sum, it) {
    var price = parseFloat(it.price) || 0;
    var qty = parseInt(it.qty, 10) || 1;
    return sum + price * qty;
  }, 0);

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
    cartTotal.textContent = "$ 0.00";
    return;
  }

  for (var iR = 0; iR < cart.length; iR++) {
    var it = cart[iR];
    var price = parseFloat(it.price) || 0;
    var qty = parseInt(it.qty, 10) || 1;

    var row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML =
      '<img src="' + it.img + '" alt=""/>' +
      '<div>' +
        '<div class="cart-item-name">' + it.name + "</div>" +
        '<div class="cart-item-sub">$ ' + price.toFixed(2) + " x " + qty + "</div>" +
      "</div>" +
      '<button class="cart-remove" type="button" data-i="' + iR + '" aria-label="Remove">' +
        '<i class="fa-solid fa-xmark"></i>' +
      "</button>";

    cartItems.appendChild(row);
  }

  cartTotal.textContent = "$ " + total.toFixed(2);

  var rmBtns = cartItems.querySelectorAll(".cart-remove");
  for (var rB = 0; rB < rmBtns.length; rB++) {
    rmBtns[rB].addEventListener("click", function (e) {
      e.stopPropagation();
      var idx = parseInt(this.getAttribute("data-i"), 10);
      if (isNaN(idx)) return;
      cart.splice(idx, 1);
      saveCart(cart);
      updateCartBadge();
      renderCart();
    });
  }
}

function addToCart(name, price, img) {
  if (!name) return;

  var found = -1;
  for (var f = 0; f < cart.length; f++) {
    if (cart[f].name === name && parseFloat(cart[f].price) === parseFloat(price)) found = f;
  }

  if (found >= 0) {
    cart[found].qty = (cart[found].qty || 1) + 1;
  } else {
    cart.push({
      name: name,
      price: price,
      img: img || "./images/carousel1.jpg",
      qty: 1,
    });
  }

  saveCart(cart);
  updateCartBadge();
  renderCart();
  openCart();
  showToast("Added to cart");
}

if (cartBtn) {
  cartBtn.addEventListener("click", toggleCart);
}

if (cartClearBtn) {
  cartClearBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    cart = [];
    saveCart(cart);
    updateCartBadge();
    renderCart();
  });
}

if (cartCheckoutBtn) {
  cartCheckoutBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (cart.length === 0) {
      alert("Cart is empty.");
      return;
    }
    alert("You really thought i would build a checkout system?");
  });
}

document.addEventListener("click", function (e) {
  if (!cartPanel || !cartWrap) return;
  if (!cartPanel.classList.contains("is-open")) return;
  if (cartWrap.contains(e.target)) return;
  closeCart();
});

document.addEventListener("keydown", function (e) {
  if (!cartPanel) return;
  if (e.key === "Escape") closeCart();
});

document.addEventListener("keydown", function (e) {
  if (!optModal) return;
  if (!optModal.classList.contains("is-open")) return;
  if (e.key === "Escape") closeOptionsModal();
});

updateCartBadge();
renderCart();

loadShopProducts();

function onProductsGridClick(e) {
  if (!productsGrid) return;
  var t = e.target;
  if (!t) return;

  var btn = null;
  if (t.classList && t.classList.contains("product-btn")) btn = t;
  else if (t.closest) btn = t.closest(".product-btn");
  if (!btn) return;

  var card = btn.closest ? btn.closest(".product-card") : null;
  var title = card ? card.getAttribute("data-name") : "item";
  var price = card ? parseFloat(card.getAttribute("data-price")) : 0;
  var imgEl = card ? card.querySelector("img") : null;
  var img = imgEl ? imgEl.getAttribute("src") : "./images/carousel1.jpg";
  var action = btn.getAttribute("data-action");

  if (action === "select") {
    openOptionsModal(title, img);
  } else {
    addToCart(title, price, img);
  }
}

if (productsGrid) {
  productsGrid.addEventListener("click", onProductsGridClick);
}

var filterPrice = document.getElementById("filterPrice");
var filterName = document.getElementById("filterName");
var menuPrice = document.getElementById("menuPrice");
var menuName = document.getElementById("menuName");

function closeMenus() {
  if (menuPrice) menuPrice.style.display = "none";
  if (menuName) menuName.style.display = "none";
}

if (filterPrice) {
  filterPrice.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!menuPrice) return;
    var isOpen = menuPrice.style.display === "block";
    closeMenus();
    menuPrice.style.display = isOpen ? "none" : "block";
  });
}

if (filterName) {
  filterName.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!menuName) return;
    var isOpen = menuName.style.display === "block";
    closeMenus();
    menuName.style.display = isOpen ? "none" : "block";
  });
}

document.addEventListener("click", function () {
  closeMenus();
});

var viewGrid = document.getElementById("viewGrid");
var viewList = document.getElementById("viewList");

function setView(which) {
  if (!viewGrid || !viewList) return;
  viewGrid.classList.remove("is-active");
  viewList.classList.remove("is-active");
  if (which === "grid") viewGrid.classList.add("is-active");
  if (which === "list") viewList.classList.add("is-active");
}

if (viewGrid) viewGrid.addEventListener("click", function () { setView("grid"); });
if (viewList) viewList.addEventListener("click", function () { setView("list"); });

var pkgCards = document.getElementById("pkgCards");
var pkgPagination = document.getElementById("pkgPagination");

var pkgDest = document.getElementById("pkgDest");
var pkgDate = document.getElementById("pkgDate");
var pkgMax = document.getElementById("pkgMax");
var pkgMaxVal = document.getElementById("pkgMaxVal");
var pkgPromo = document.getElementById("pkgPromo");

var pkgSort = "default";
var pkgView = "grid";
var pkgPage = 1;
var pkgPerPage = 4;

var packagesData = [
  {
    id: 1,
    name: "Chiang Mai",
    country: "Thailand",
    destination: "thailand",
    img: "./images/carousel1.jpg",
    durationDays: 7,
    difficulty: "easy",
    minAge: 0,
    typologies: ["culture", "heritage", "family"],
    promo: false,
    price: 490,
    oldPrice: null,
    desc: "Visit the temples and the Chiang Mai Night Bazaar, a huge barge market located on Chiang Klang Road.",
  },
  {
    id: 2,
    name: "Chao Phraya",
    country: "Thailand",
    destination: "thailand",
    img: "./images/carousel2.jpg",
    durationDays: 5,
    difficulty: "easy",
    minAge: 0,
    typologies: ["culture", "road", "family"],
    promo: true,
    price: 98,
    oldPrice: 134,
    desc: "Boat tour in the capital of Thailand, Bangkok, to see the beautiful palaces and monuments from the water.",
  },
  {
    id: 3,
    name: "Bangkok",
    country: "Thailand",
    destination: "thailand",
    img: "./images/carousel3.jpg",
    durationDays: 10,
    difficulty: "medium",
    minAge: 16,
    typologies: ["culture", "culinary", "adventure"],
    promo: true,
    price: 1000,
    oldPrice: 1023,
    desc: "Marvelous culinary and cultural trip to the Thai capital with its wonderful monuments and Buddha statues.",
  },
  {
    id: 4,
    name: "Nara",
    country: "Japan",
    destination: "japan",
    img: "./images/gallery1.jpg",
    durationDays: 15,
    difficulty: "challenging",
    minAge: 18,
    typologies: ["heritage", "culture", "adventure"],
    promo: true,
    price: 890,
    oldPrice: 999,
    desc: "Discover the incredible landmarks such as the Todai-ji temple and its famous Great Buddha statue.",
  },
  {
    id: 5,
    name: "Athenes",
    country: "Greece",
    destination: "greece",
    img: "./images/athenes.jpg",
    durationDays: 7,
    difficulty: "easy",
    minAge: 5,
    typologies: ["culture", "heritage", "budget"],
    promo: false,
    price: 677,
    oldPrice: null,
    desc: "A short city escape with culture, food and beautiful views.",
  },
  {
    id: 6,
    name: "Visitor Insurance",
    country: "Japan",
    destination: "japan",
    img: "./images/gallery2.jpg",
    durationDays: 10,
    difficulty: "medium",
    minAge: 0,
    typologies: ["family", "beach"],
    promo: false,
    price: 580,
    oldPrice: null,
    desc: "A calm and flexible trip with light activities and easy planning.",
  },
];

function loadPackagesFromJson() {
  if (!pkgCards) return;
  if (!window.fetch) return;

  fetch("./data/packages.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (!Array.isArray(data)) return;

      var cleaned = data.filter(function (p) {
        return p && p.name && p.country && p.destination && p.img && p.price != null;
      });

      if (cleaned.length === 0) return;

      packagesData = cleaned;
      pkgPage = 1;
      renderPackages();
    })
    .catch(function () {});
}

function getCheckedValues(selector) {
  var els = document.querySelectorAll(selector);
  var arr = [];
  for (var i4 = 0; i4 < els.length; i4++) {
    if (els[i4].checked) arr.push(els[i4].value);
  }
  return arr;
}

function matchAny(have, want) {
  if (want.length === 0) return true;
  for (var i5 = 0; i5 < want.length; i5++) {
    if (have.indexOf(want[i5]) >= 0) return true;
  }
  return false;
}

function getFilteredPackages() {
  var destVal = pkgDest ? pkgDest.value : "all";
  var maxVal = pkgMax ? parseInt(pkgMax.value, 10) : 5000;
  var onlyPromo = pkgPromo ? pkgPromo.checked : false;
  var types = getCheckedValues(".pkgType");
  var durs = getCheckedValues(".pkgDur");
  var diffs = getCheckedValues(".pkgDiff");
  var ages = getCheckedValues(".pkgAge");

  var out = [];

  for (var i6 = 0; i6 < packagesData.length; i6++) {
    var p = packagesData[i6];

    if (destVal !== "all" && p.destination !== destVal) continue;
    if (p.price > maxVal) continue;
    if (onlyPromo && !p.promo) continue;
    if (!matchAny(p.typologies, types)) continue;

    if (durs.length > 0) {
      var okDur = false;
      for (var d = 0; d < durs.length; d++) {
        if (parseInt(durs[d], 10) === p.durationDays) okDur = true;
      }
      if (!okDur) continue;
    }

    if (diffs.length > 0 && diffs.indexOf(p.difficulty) < 0) continue;

    if (ages.length > 0) {
      var okAge = false;
      for (var a = 0; a < ages.length; a++) {
        if (parseInt(ages[a], 10) === p.minAge) okAge = true;
      }
      if (!okAge) continue;
    }

    out.push(p);
  }

  return out;
}

function sortPackages(arr) {
  var copy = arr.slice();

  if (pkgSort === "low") {
    copy.sort(function (a, b) { return a.price - b.price; });
  } else if (pkgSort === "high") {
    copy.sort(function (a, b) { return b.price - a.price; });
  } else if (pkgSort === "az") {
    copy.sort(function (a, b) { return a.name.localeCompare(b.name); });
  } else if (pkgSort === "za") {
    copy.sort(function (a, b) { return b.name.localeCompare(a.name); });
  }

  return copy;
}

function renderPagination(totalCount) {
  if (!pkgPagination) return;
  pkgPagination.innerHTML = "";

  var totalPages = Math.ceil(totalCount / pkgPerPage);
  if (totalPages <= 1) return;

  for (var p = 1; p <= totalPages; p++) {
    var btn = document.createElement("button");
    btn.className = "page-btn" + (p === pkgPage ? " is-active" : "");
    btn.type = "button";
    btn.textContent = String(p);

    (function (pageNum) {
      btn.addEventListener("click", function () {
        pkgPage = pageNum;
        renderPackages();
      });
    })(p);

    pkgPagination.appendChild(btn);
  }
}

function renderPackages() {
  if (!pkgCards) return;

  var filtered = getFilteredPackages();
  var sorted = sortPackages(filtered);

  var totalPages = Math.ceil(sorted.length / pkgPerPage);
  if (pkgPage > totalPages) pkgPage = 1;

  var start = (pkgPage - 1) * pkgPerPage;
  var end = start + pkgPerPage;
  var pageItems = sorted.slice(start, end);

  pkgCards.classList.toggle("is-list", pkgView === "list");

  pkgCards.innerHTML = "";

  for (var i7 = 0; i7 < pageItems.length; i7++) {
    var item = pageItems[i7];
    var saleHtml = item.promo ? '<span class="pkg-sale">SALE</span>' : "";
    var oldHtml = item.oldPrice ? '<span class="old">$' + item.oldPrice + "</span>" : "";
    var durLabel = item.durationDays === 7 ? "1 Week" : item.durationDays + " Days";

    var card = document.createElement("div");
    card.className = "pkg-card";
    card.innerHTML =
      '<div class="pkg-img">' +
        saleHtml +
        '<img src="' + item.img + '" alt=""/>' +
      "</div>" +
      '<div class="pkg-mini">' +
        '<div class="mini-left">' +
          '<span class="mini-icon"><i class="fa-regular fa-clock"></i></span>' +
          "<span>" + durLabel + "</span>" +
        "</div>" +
        '<div class="mini-right"><i class="fa-regular fa-envelope"></i><i class="fa-solid fa-share-nodes"></i></div>' +
      "</div>" +
      '<div class="pkg-body">' +
        '<div class="pkg-name">' + item.name + "</div>" +
        '<div class="pkg-loc"><i class="fa-solid fa-location-dot"></i> ' + item.country + "</div>" +
        '<div class="pkg-sep"></div>' +
        '<div class="pkg-desc">' + item.desc + "</div>" +
        '<div class="pkg-sep"></div>' +
        '<div class="pkg-bottom">' +
          '<button class="pkg-details" type="button" data-id="' + item.id + '">Details</button>' +
          '<div class="pkg-price"><div class="from">From</div><div><span class="money">$ ' + item.price + "</span>" + oldHtml + "</div></div>" +
        "</div>" +
      "</div>";

    pkgCards.appendChild(card);
  }

  var detailsBtns = pkgCards.querySelectorAll(".pkg-details");
  for (var b2 = 0; b2 < detailsBtns.length; b2++) {
    detailsBtns[b2].addEventListener("click", function () {
      var id = parseInt(this.getAttribute("data-id"), 10);
      for (var x = 0; x < packagesData.length; x++) {
        if (packagesData[x].id === id) {
          alert("Details: " + packagesData[x].name);
        }
      }
    });
  }

  renderPagination(sorted.length);
}

function onFiltersChange() {
  pkgPage = 1;
  renderPackages();
}

if (pkgMax && pkgMaxVal) {
  pkgMaxVal.textContent = pkgMax.value;
  pkgMax.addEventListener("input", function () {
    pkgMaxVal.textContent = pkgMax.value;
  });
  pkgMax.addEventListener("change", onFiltersChange);
}

if (pkgDest) pkgDest.addEventListener("change", onFiltersChange);
if (pkgDate) pkgDate.addEventListener("change", onFiltersChange);
if (pkgPromo) pkgPromo.addEventListener("change", onFiltersChange);

var typeChecks = document.querySelectorAll(".pkgType, .pkgDur, .pkgDiff, .pkgAge");
for (var t2 = 0; t2 < typeChecks.length; t2++) {
  typeChecks[t2].addEventListener("change", onFiltersChange);
}

var sideHeads = document.querySelectorAll(".side-head");
for (var sh = 0; sh < sideHeads.length; sh++) {
  sideHeads[sh].addEventListener("click", function () {
    var targetId = this.getAttribute("data-target");
    var box = document.getElementById(targetId);
    if (!box) return;
    var isHidden = box.style.display === "none";
    box.style.display = isHidden ? "grid" : "none";
  });
}

if (menuPrice) {
  menuPrice.addEventListener("click", function (e) {
    var t = e.target;
    if (!t) return;
    if (t.tagName !== "BUTTON") return;
    pkgSort = t.getAttribute("data-v") || "default";
    closeMenus();
    renderPackages();
  });
}

if (menuName) {
  menuName.addEventListener("click", function (e) {
    var t = e.target;
    if (!t) return;
    if (t.tagName !== "BUTTON") return;
    pkgSort = t.getAttribute("data-v") || "default";
    closeMenus();
    renderPackages();
  });
}

if (viewGrid) {
  viewGrid.addEventListener("click", function () {
    pkgView = "grid";
    renderPackages();
  });
}

if (viewList) {
  viewList.addEventListener("click", function () {
    pkgView = "list";
    renderPackages();
  });
}

if (pkgCards) {
  renderPackages();
  loadPackagesFromJson();
}

var mainSections = document.querySelectorAll("main section");
for (var rs = 0; rs < mainSections.length; rs++) {
  var sec = mainSections[rs];
  if (!sec) continue;
  var cls = sec.className || "";
  if (cls.indexOf("hero") >= 0) continue;
  if (!sec.classList.contains("reveal")) sec.classList.add("reveal");
}

var revealEls = document.querySelectorAll(".reveal");

function checkReveal() {
  for (var i = 0; i < revealEls.length; i++) {
    var el = revealEls[i];
    if (!el) continue;
    if (el.classList.contains("is-show")) continue;
    var box = el.getBoundingClientRect();
    if (box.top < window.innerHeight - 120) {
      el.classList.add("is-show");
    }
  }
}

var revealTimer = null;
window.addEventListener("scroll", function () {
  if (revealTimer) return;
  revealTimer = setTimeout(function () {
    revealTimer = null;
    checkReveal();
  }, 120);
});

window.addEventListener("load", function () {
  checkReveal();
});

checkReveal();
