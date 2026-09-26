const IMAGES = [
  // Nature
  { src: "https://images.pexels.com/photos/22666600/pexels-photo-22666600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/22666600/pexels-photo-22666600.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Aerial view of lush landscapes and forested areas at Zittau Mountains Nature Park in Germany.", category: "nature" },
  { src: "https://images.pexels.com/photos/6072751/pexels-photo-6072751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/6072751/pexels-photo-6072751.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Snow-capped mountains shrouded in mist with bare trees in the foreground.", category: "nature" },
  { src: "https://images.pexels.com/photos/33843011/pexels-photo-33843011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/33843011/pexels-photo-33843011.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "The Dolomites under the warm glow of sunset from a serene pine forest.", category: "nature" },
  { src: "https://images.pexels.com/photos/33240146/pexels-photo-33240146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/33240146/pexels-photo-33240146.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Slovenian Alps with lush forests in bright daylight.", category: "nature" },
  { src: "https://images.pexels.com/photos/20450245/pexels-photo-20450245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/20450245/pexels-photo-20450245.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Sunlit mountain range in northern Italy with lush forests and dramatic peaks.", category: "nature" },
  { src: "https://images.pexels.com/photos/39344511/pexels-photo-39344511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/39344511/pexels-photo-39344511.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Snow-covered peaks in the Dolomites under a clear blue sky.", category: "nature" },
  { src: "https://images.pexels.com/photos/3218443/pexels-photo-3218443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/3218443/pexels-photo-3218443.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Rugged mountains under a vibrant blue sky.", category: "nature" },
  { src: "https://images.pexels.com/photos/10195041/pexels-photo-10195041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/10195041/pexels-photo-10195041.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Serene misty pine tree forest in a peaceful mountainous landscape.", category: "nature" },

  // Travel
  { src: "https://images.pexels.com/photos/8860041/pexels-photo-8860041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/8860041/pexels-photo-8860041.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Historic architecture and urban landscape showcasing classic landmarks.", category: "travel" },
  { src: "https://images.pexels.com/photos/19871348/pexels-photo-19871348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/19871348/pexels-photo-19871348.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Ornate historic buildings in Hamburg, Germany.", category: "travel" },
  { src: "https://images.pexels.com/photos/24906518/pexels-photo-24906518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/24906518/pexels-photo-24906518.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Elbphilharmonie Concert Hall in Hamburg's harbor.", category: "travel" },
  { src: "https://images.pexels.com/photos/38219310/pexels-photo-38219310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/38219310/pexels-photo-38219310.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Iconic Gehry Buildings at MedienHafen in Düsseldorf, Germany.", category: "travel" },
  { src: "https://images.pexels.com/photos/22805636/pexels-photo-22805636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/22805636/pexels-photo-22805636.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Black and white view of modern Buenos Aires skyline with Puente de la Mujer.", category: "travel" },
  { src: "https://images.pexels.com/photos/15234759/pexels-photo-15234759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/15234759/pexels-photo-15234759.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Renaissance-style facades lining a street in Pilsen, Czech Republic.", category: "travel" },
  { src: "https://images.pexels.com/photos/12039244/pexels-photo-12039244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/12039244/pexels-photo-12039244.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Classical architecture with sculptures in Madrid, Spain.", category: "travel" },
  { src: "https://images.pexels.com/photos/10686954/pexels-photo-10686954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/10686954/pexels-photo-10686954.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Cityscape of Istanbul with a prominent mosque among modern buildings.", category: "travel" },

  // Food
  { src: "https://images.pexels.com/photos/24186408/pexels-photo-24186408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/24186408/pexels-photo-24186408.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Gourmet soup dish featuring green peas and rice in a white bowl.", category: "food" },
  { src: "https://images.pexels.com/photos/27381531/pexels-photo-27381531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/27381531/pexels-photo-27381531.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Sophisticated fish dish with flavorful sauce, elegantly presented.", category: "food" },
  { src: "https://images.pexels.com/photos/39122376/pexels-photo-39122376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/39122376/pexels-photo-39122376.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Party appetizers served on plates with dipping sauce.", category: "food" },
  { src: "https://images.pexels.com/photos/6426095/pexels-photo-6426095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/6426095/pexels-photo-6426095.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Plate with cooked prawns, a delicious Vietnamese dish.", category: "food" },
  { src: "https://images.pexels.com/photos/32860319/pexels-photo-32860319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/32860319/pexels-photo-32860319.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Diverse Asian dishes including dim sum and soups on a round table.", category: "food" },
  { src: "https://images.pexels.com/photos/20943896/pexels-photo-20943896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/20943896/pexels-photo-20943896.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Vibrant green pasta dish garnished with mushrooms.", category: "food" },
  { src: "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Flatlay of various dishes including pasta, egg, soup, and croissant.", category: "food" },
  { src: "https://images.pexels.com/photos/39599597/pexels-photo-39599597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/39599597/pexels-photo-39599597.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Flavorful herbal soup with meat and a cup of tea on a wooden table.", category: "food" },

  // Animals
  { src: "https://images.pexels.com/photos/13218637/pexels-photo-13218637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/13218637/pexels-photo-13218637.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "A deer standing amid dense forest foliage.", category: "animals" },
  { src: "https://images.pexels.com/photos/37352100/pexels-photo-37352100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/37352100/pexels-photo-37352100.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Black and white close-up of a deer in a snowy landscape.", category: "animals" },
  { src: "https://images.pexels.com/photos/7031226/pexels-photo-7031226.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/7031226/pexels-photo-7031226.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Close-up of two deer showcasing natural wildlife beauty.", category: "animals" },
  { src: "https://images.pexels.com/photos/31793882/pexels-photo-31793882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/31793882/pexels-photo-31793882.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Adorable meerkat resting on a rock in serene natural light.", category: "animals" },
  { src: "https://images.pexels.com/photos/34159290/pexels-photo-34159290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/34159290/pexels-photo-34159290.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Dramatic close-up of a yawning sloth bear in the wild.", category: "animals" },
  { src: "https://images.pexels.com/photos/39372761/pexels-photo-39372761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/39372761/pexels-photo-39372761.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Portrait of a Great Blue Heron during golden hour.", category: "animals" },
  { src: "https://images.pexels.com/photos/37030625/pexels-photo-37030625.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/37030625/pexels-photo-37030625.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Close-up portrait of a lioness highlighting her eye and fur texture.", category: "animals" },
  { src: "https://images.pexels.com/photos/26727621/pexels-photo-26727621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", full: "https://images.pexels.com/photos/26727621/pexels-photo-26727621.jpeg?auto=compress&cs=tinysrgb&w=1600", alt: "Portrait of zebras displaying their distinctive black and white stripes.", category: "animals" },
];

const PER_PAGE = 8;

const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");
const pageNav = document.querySelector(".page-nav");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentFilter = "all";
let currentPage = 0;
let currentList = [];
let lightboxIndex = 0;

function getFilteredList() {
  return currentFilter === "all"
    ? [...IMAGES]
    : IMAGES.filter((img) => img.category === currentFilter);
}

function renderGallery() {
  currentList = getFilteredList();
  const totalPages = Math.ceil(currentList.length / PER_PAGE);
  if (currentPage >= totalPages) currentPage = Math.max(0, totalPages - 1);

  const start = currentPage * PER_PAGE;
  const pageItems = currentList.slice(start, start + PER_PAGE);

  gallery.innerHTML = "";

  if (pageItems.length === 0) {
    const empty = document.createElement("p");
    empty.className = "gallery-empty";
    empty.textContent = "No images in this category.";
    gallery.appendChild(empty);
    pageNav.hidden = true;
    return;
  }

  pageItems.forEach((img, i) => {
    const globalIndex = start + i;
    const item = document.createElement("button");
    item.className = "gallery-item";
    item.type = "button";
    item.setAttribute("aria-label", `Open image: ${img.alt}`);
    item.style.animationDelay = `${i * 0.06}s`;

    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.alt;
    image.loading = "lazy";

    const label = document.createElement("span");
    label.className = "item-label";
    label.textContent = img.category;

    item.appendChild(image);
    item.appendChild(label);
    item.addEventListener("click", () => openLightbox(globalIndex));
    gallery.appendChild(item);
  });

  if (totalPages > 1) {
    pageNav.hidden = false;
    pageInfo.textContent = `Page ${currentPage + 1} of ${totalPages}`;
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;
  } else {
    pageNav.hidden = true;
  }
}

function setFilter(filter) {
  currentFilter = filter;
  currentPage = 0;
  filterButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
  renderGallery();
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => setFilter(btn.dataset.filter));
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderGallery();
    window.scrollTo({ top: gallery.offsetTop - 120, behavior: "smooth" });
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(currentList.length / PER_PAGE);
  if (currentPage < totalPages - 1) {
    currentPage++;
    renderGallery();
    window.scrollTo({ top: gallery.offsetTop - 120, behavior: "smooth" });
  }
});

/* Lightbox */
function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function updateLightbox() {
  const img = IMAGES[lightboxIndex];
  lightboxImage.src = img.full;
  lightboxImage.alt = img.alt;
  lightboxCaption.textContent = img.alt;
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${IMAGES.length}`;
}

function changeLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + IMAGES.length) % IMAGES.length;
  updateLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => changeLightbox(-1));
lightboxNext.addEventListener("click", () => changeLightbox(1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  switch (e.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowLeft":
      changeLightbox(-1);
      break;
    case "ArrowRight":
      changeLightbox(1);
      break;
  }
});

renderGallery();
