const featuredWines = [
  { name: 'Nocturne', type: 'Red', region: 'Loire Valley · France', year: '2022', price: 38, tag: 'Staff favourite', glass: '#5b2920', label: '#ebe0cc', foil: '#b27b4f', tone: '#dcd5c9' },
  { name: 'Le Petit Matin', type: 'White', region: 'Loire Valley · France', year: '2023', price: 31, tag: 'Bright & mineral', glass: '#b2a98a', label: '#efe9d9', foil: '#c4a363', tone: '#d7dcd3' },
  { name: 'Asteria', type: 'Rosé', region: 'Provence · France', year: '2023', price: 29, tag: 'New arrival', glass: '#c38a77', label: '#f0e4d8', foil: '#d8ad94', tone: '#e4d5ce' },
  { name: 'The Long Game', type: 'Red', region: 'Barossa · Australia', year: '2021', price: 54, tag: 'Cellar pick', glass: '#45191e', label: '#ddd8c8', foil: '#8c353e', tone: '#d8d0c6' },
  { name: 'Murmuration', type: 'Sparkling', region: 'Sussex · England', year: '2021', price: 62, tag: 'Celebration', glass: '#b5a26d', label: '#eee9d7', foil: '#b7a26b', tone: '#deded5' },
  { name: 'Verde Luna', type: 'White', region: 'Rías Baixas · Spain', year: '2023', price: 34, tag: 'Sea air', glass: '#869b7e', label: '#e6e5d4', foil: '#adb97e', tone: '#d6ded9' },
  { name: 'After Hours', type: 'Red', region: 'Etna · Italy', year: '2020', price: 47, tag: 'Slow nights', glass: '#49231e', label: '#e8dfce', foil: '#a87349', tone: '#ded6cd' },
  { name: 'Petite Joie', type: 'Rosé', region: 'Tavel · France', year: '2022', price: 36, tag: 'Good company', glass: '#aa6c6e', label: '#ede4d8', foil: '#c78e8e', tone: '#e3d5d1' },
  { name: 'Solstice Brut', type: 'Sparkling', region: 'Champagne · France', year: '2019', price: 88, tag: 'The good stuff', glass: '#b3a16b', label: '#ece7d9', foil: '#b79b56', tone: '#dfddd2' },
  { name: 'Blackbird', type: 'Red', region: 'Mendoza · Argentina', year: '2022', price: 43, tag: 'Dinner hero', glass: '#351b1b', label: '#e5dccd', foil: '#754047', tone: '#d8d2cb' },
  { name: 'Cloud Study', type: 'White', region: 'Marlborough · NZ', year: '2023', price: 32, tag: 'Crisp & cool', glass: '#a4ae89', label: '#f0eadb', foil: '#c9bc7a', tone: '#d8dfd5' },
  { name: 'Rosso Lento', type: 'Red', region: 'Piedmont · Italy', year: '2020', price: 58, tag: 'For the table', glass: '#5b211e', label: '#ded4c1', foil: '#a55f43', tone: '#ddd5c8' },
];

const regions = ['Burgundy', 'Tuscany', 'Napa Valley', 'Douro', 'Willamette', 'Mosel', 'Rioja', 'Beaujolais', 'Jura', 'Mendoza', 'Sicily', 'Bordeaux'];
const names = ['Lumen', 'Sunday Dress', 'Wildflower', 'Tender', 'Common Ground', 'Orchard Moon', 'Quiet Hours', 'Field Note', 'Good Neighbour', 'Little Comet', 'Soft Focus', 'Night Swim', 'Kindred', 'Open Secret', 'Blue Hour', 'Golden Hour', 'Lucky Star', 'House Wine', 'First Light', 'Second Wind', 'Slow Dance', 'Paper Moon', 'True North', 'No Drama', 'The Listener', 'Small Wonder', 'Rare Form', 'Easy Does It', 'North Star', 'Fine Print', 'Warm Current', 'Little Faith', 'Wild Card', 'Good Measure', 'Side Door', 'Velvet Rope', 'Free Spirit', 'Low Key', 'Still Life', 'Hush Hush', 'Tall Tale', 'Daydream', 'Off Script', 'Soft Landing', 'High Note', 'The Alibi', 'Golden Child', 'Long Weekend', 'Stay Awhile', 'Deep Cut', 'Afterglow', 'Slow Burn', 'Silver Lining', 'Plain Speak', 'The Outsider', 'Summer Rain', 'Good Form', 'Nocturne II', 'True Story', 'The Romantic', 'Late Bloomer', 'Home Soil', 'Night Garden', 'Lucky Number', 'A Good Sign', 'The Optimist', 'Room Tone', 'Velvet Morning', 'Easy Street', 'Side Note', 'Low Light', 'The Good Kind', 'Small Talk', 'Second Nature', 'Lost & Found', 'The Wanderer', 'Day One', 'Open Door', 'Golden Thread', 'Sunday Best', 'The Regular', 'Bright Side', 'Bluebird', 'The Muse', 'New Moon', 'Old Soul', 'The Outsider II', 'Soft Power', 'North Wind', 'Common Thread', 'Big Feeling', 'Quiet Riot', 'First Edition', 'The Long View', 'Slow Motion', 'Good Company', 'The Alchemist', 'Deep Water', 'Fine Line', 'A Little Something', 'The Aftertaste', 'Half Light', 'Good Morning', 'Almost Famous', 'Last Call', 'The Keepsake', 'True Love', 'One More'];
const types = ['Red', 'White', 'Rosé', 'Sparkling'];
const typeColors = {
  Red: { glass: '#54261f', label: '#e8dfcf', foil: '#ae7854', tone: '#ded6ca' },
  White: { glass: '#9ca783', label: '#efeadb', foil: '#c5b576', tone: '#d9ded5' },
  Rosé: { glass: '#b67b75', label: '#f0e5da', foil: '#ce9d93', tone: '#e5d8d3' },
  Sparkling: { glass: '#aa9967', label: '#eee9db', foil: '#b9a76a', tone: '#deded4' },
};

const generatedWines = names.map((name, index) => {
  const type = types[index % types.length];
  const palette = typeColors[type];
  return {
    name,
    type,
    region: `${regions[index % regions.length]} · ${index % 3 === 0 ? 'France' : index % 3 === 1 ? 'Italy' : 'New World'}`,
    year: String(2019 + (index % 5)),
    price: 26 + ((index * 7) % 61),
    tag: ['New find', 'Small batch', 'Worth knowing', 'For tonight'][index % 4],
    ...palette,
  };
});
const wines = [...featuredWines, ...generatedWines].slice(0, 120);
let activeFilter = 'All';
let visibleCount = 12;
let cart = [];
let toastTimer;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const money = (value) => `$${value.toFixed(0)}`;

function bottleMarkup(wine) {
  return `<img class="catalog-bottle" src="wine-list-bottle.png" alt="${wine.name} bottle" loading="lazy" />`;
}

function renderProducts() {
  const grid = $('#productGrid');
  if (!grid) return;
  const filtered = activeFilter === 'All' ? wines : wines.filter((wine) => wine.type === activeFilter);
  const visible = filtered.slice(0, visibleCount);
  const resultsCount = $('#resultsCount');
  if (resultsCount) resultsCount.textContent = filtered.length;
  grid.innerHTML = visible.map((wine, index) => `<article class="product-card" style="animation-delay:${Math.min(index * .045, .55)}s"><div class="product-visual" style="--visual:${wine.tone}"><span class="product-badge">${wine.tag}</span>${bottleMarkup(wine)}<span class="product-year">${wine.year}</span></div><div class="product-info"><div><h3 class="product-name">${wine.name}</h3><p class="product-label-text">Merlot Manor</p><p class="product-meta">${wine.type} · ${wine.region}</p></div><div><div class="product-price">${money(wine.price)}</div><button class="add-button" type="button" aria-label="Add ${wine.name} to bag" data-add="${wines.indexOf(wine)}">+</button></div></div></article>`).join('');
  const loadMore = $('#loadMore');
  if (loadMore) loadMore.style.display = visible.length < filtered.length ? 'flex' : 'none';
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $('#cartCount').textContent = count;
  $('#cartCount').classList.remove('bump');
  void $('#cartCount').offsetWidth;
  if (count) $('#cartCount').classList.add('bump');
  const total = cart.reduce((sum, item) => sum + item.wine.price * item.quantity, 0);
  $('#cartTotal').textContent = money(total);
  $('#checkoutButton').disabled = !cart.length;
  if (!cart.length) {
    $('#cartItems').innerHTML = '<div class="empty-cart"><span>✦</span><p>Your bag is waiting<br /><em>for something good.</em></p><a href="#newsletter" id="browseFromCart">Join the society ↗</a></div>';
    return;
  }
  $('#cartItems').innerHTML = cart.map((item, index) => `<div class="cart-line"><div class="cart-line-visual">${bottleMarkup(item.wine)}</div><div><h3>${item.wine.name}</h3><p>Merlot Manor · ${item.wine.type} · ${item.wine.year}</p><div class="line-controls"><button type="button" data-decrease="${index}" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-increase="${index}" aria-label="Increase quantity">+</button><button class="remove-line" type="button" data-remove="${index}">Remove</button></div></div><div class="line-price">${money(item.wine.price * item.quantity)}</div></div>`).join('');
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2800);
}

function addToCart(index) {
  const wine = wines[index];
  const existing = cart.find((item) => item.wine.name === wine.name);
  if (existing) existing.quantity += 1;
  else cart.push({ wine, quantity: 1 });
  renderCart();
  showToast(`${wine.name} is on the table.`);
}

function setCartOpen(open) {
  $('#cartDrawer').classList.toggle('is-open', open);
  $('#cartDrawer').setAttribute('aria-hidden', String(!open));
  $('#drawerBackdrop').classList.toggle('is-visible', open);
  document.body.classList.toggle('is-locked', open);
}

function setCheckoutOpen(open) {
  $('#checkoutBackdrop').classList.toggle('is-visible', open);
  document.body.classList.toggle('is-locked', open);
  if (open) {
    $('#checkoutForm').style.display = 'grid';
    $('#orderSuccess').classList.remove('is-visible');
  }
}

document.addEventListener('click', (event) => {
  const add = event.target.closest('[data-add]');
  if (add) addToCart(Number(add.dataset.add));
  const increase = event.target.closest('[data-increase]');
  if (increase) { cart[Number(increase.dataset.increase)].quantity += 1; renderCart(); }
  const decrease = event.target.closest('[data-decrease]');
  if (decrease) { const item = cart[Number(decrease.dataset.decrease)]; item.quantity -= 1; if (item.quantity <= 0) cart.splice(Number(decrease.dataset.decrease), 1); renderCart(); }
  const remove = event.target.closest('[data-remove]');
  if (remove) cart.splice(Number(remove.dataset.remove), 1); if (remove) renderCart();
  if (event.target.closest('#browseFromCart')) setCartOpen(false);
});

$$('.filter-tab').forEach((tab) => tab.addEventListener('click', () => {
  $$('.filter-tab').forEach((item) => item.classList.remove('is-active'));
  tab.classList.add('is-active');
  activeFilter = tab.dataset.filter;
  visibleCount = 12;
  renderProducts();
}));

const loadMoreButton = $('#loadMore');
if (loadMoreButton) loadMoreButton.addEventListener('click', () => { visibleCount += 8; renderProducts(); });
$('#openCart').addEventListener('click', () => setCartOpen(true));
$('#closeCart').addEventListener('click', () => setCartOpen(false));
$('#drawerBackdrop').addEventListener('click', () => setCartOpen(false));
$('#checkoutButton').addEventListener('click', () => { setCartOpen(false); setCheckoutOpen(true); });
$('#closeCheckout').addEventListener('click', () => setCheckoutOpen(false));
$('#checkoutBackdrop').addEventListener('click', (event) => { if (event.target === $('#checkoutBackdrop')) setCheckoutOpen(false); });
$('#closeSuccess').addEventListener('click', () => { setCheckoutOpen(false); cart = []; renderCart(); });

$('#checkoutForm').addEventListener('submit', (event) => {
  event.preventDefault();
  $('#checkoutForm').style.display = 'none';
  $('#orderNumber').textContent = `VV-${Math.floor(10000 + Math.random() * 89999)}`;
  $('#orderSuccess').classList.add('is-visible');
});

$('#newsletterForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = $('#email').value;
  if (email) { $('#newsletterNote').textContent = 'You’re on the list. We’ll keep the good stuff coming.'; $('#newsletterForm button').textContent = 'You’re in ✓'; $('#email').value = ''; showToast('Welcome to the cellar.'); }
});

const menuPanel = $('#menuPanel');
const menuToggle = $('#menuToggle');
const menuClose = $('#menuClose');
function setMenuOpen(open) {
  menuPanel.classList.toggle('is-open', open);
  menuPanel.setAttribute('aria-hidden', String(!open));
  menuToggle.classList.toggle('is-active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('is-menu-open', open);
  document.body.classList.toggle('is-locked', open);
}
menuToggle.addEventListener('click', () => setMenuOpen(!menuPanel.classList.contains('is-open')));
menuClose.addEventListener('click', () => setMenuOpen(false));
$$('.menu-panel a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: .12 });
$$('.reveal').forEach((element) => observer.observe(element));

renderProducts();
renderCart();

const preloader = $('#preloader');
const preloaderLine = preloader.querySelector('.preloader-line i');
const preloaderPercent = preloader.querySelector('.preloader-status b');
let loadingProgress = 0;
const loadingTimer = setInterval(() => {
  loadingProgress = Math.min(100, loadingProgress + Math.ceil(Math.random() * 13));
  preloaderLine.style.width = `${loadingProgress}%`;
  preloaderPercent.textContent = `${loadingProgress}%`;
  if (loadingProgress >= 100) {
    clearInterval(loadingTimer);
    setTimeout(() => preloader.classList.add('is-done'), 280);
  }
}, 75);

const cursorDot = $('#cursorDot');
const cursorRing = $('#cursorRing');
let pointerX = -100;
let pointerY = -100;
let ringX = -100;
let ringY = -100;
function renderCursor() {
  ringX += (pointerX - ringX) * .16;
  ringY += (pointerY - ringY) * .16;
  cursorDot.style.left = `${pointerX}px`;
  cursorDot.style.top = `${pointerY}px`;
  cursorRing.style.left = `${ringX}px`;
  cursorRing.style.top = `${ringY}px`;
  requestAnimationFrame(renderCursor);
}
renderCursor();
document.addEventListener('pointermove', (event) => {
  pointerX = event.clientX;
  pointerY = event.clientY;
  const target = event.target.closest('a,button,.craft-image,.product-visual,.hero-media');
  cursorRing.classList.toggle('is-hover', Boolean(target));
  cursorRing.querySelector('span').textContent = target?.classList.contains('product-visual') ? 'Add' : target?.classList.contains('hero-media') ? 'Explore' : 'View';
});

const heroStage = $('.hero-stage');
const heroMedia = $('.hero-media');
heroStage.addEventListener('pointermove', (event) => {
  const bounds = heroStage.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - .5;
  const y = (event.clientY - bounds.top) / bounds.height - .5;
  heroMedia.style.transform = `translate3d(${x * 9}px, ${y * 7}px, 0)`;
});
heroStage.addEventListener('pointerleave', () => { heroMedia.style.transform = ''; });

let ticking = false;
function updateScrollMotion() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  document.body.style.setProperty('--scroll-progress', scrollProgress.toFixed(4));
  const pageSections = $$('.hero-stage,.story-section,.craft-section,.society-section');
  const currentPage = pageSections.reduce((active, section, index) => {
    return section.getBoundingClientRect().top <= window.innerHeight * .45 ? index : active;
  }, 0) + 1;
  const heroCount = $('.hero-count');
  if (heroCount) heroCount.innerHTML = `${String(currentPage).padStart(2, '0')} <span>/</span> 04`;
  const craftImage = $('.craft-image img');
  if (craftImage) {
    const bounds = craftImage.getBoundingClientRect();
    const offset = (bounds.top + bounds.height / 2 - window.innerHeight / 2) / window.innerHeight;
    craftImage.style.transform = `scale(1.08) translateY(${offset * -12}px)`;
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { window.requestAnimationFrame(updateScrollMotion); ticking = true; }
}, { passive: true });
updateScrollMotion();

$$('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
});
