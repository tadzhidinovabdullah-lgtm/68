
"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const money = value =>
  new Intl.NumberFormat("ru-RU").format(value) + " сум";

const image = (id, width = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

/* =========================
   УСЛУГИ АВТОМОЙКИ
========================= */

const services = [
  {
    id: "wash-basic",
    name: "Обычная мойка водой",
    category: "Мойка",
    price: 30000,
    image: image("photo-1607860108855-64acf2078ed9"),
    description: "Быстрая мойка кузова для повседневной чистоты автомобиля.",
    features: ["Смывание грязи водой", "Очистка кузова", "Ополаскивание автомобиля"]
  },
  {
    id: "wash-full",
    name: "Комплексная мойка",
    category: "Мойка",
    price: 60000,
    image: image("photo-1520340356584-f9917d1eea6f"),
    description: "Комплексный уход за внешними поверхностями автомобиля.",
    features: ["Мойка кузова", "Автомобильный шампунь", "Очистка колёс", "Сушка микрофиброй"]
  },
  {
    id: "wash-premium",
    name: "Премиум-мойка",
    category: "Мойка",
    price: 100000,
    image: image("photo-1503376780353-7e6692767b70"),
    description: "Более тщательная мойка с вниманием к деталям.",
    features: ["Тщательная мойка кузова", "Активная пена", "Очистка дисков", "Финишный блеск"]
  },
  {
    id: "interior",
    name: "Химчистка салона",
    category: "Химчистка",
    price: 250000,
    image: image("photo-1507136566006-cfc505b114fc"),
    description: "Уход за салоном, сиденьями и внутренними поверхностями.",
    features: ["Очистка сидений", "Уход за ковриками", "Удаление загрязнений", "Очистка пластиковых деталей"]
  },
  {
    id: "engine",
    name: "Мойка двигателя",
    category: "Детейлинг",
    price: 120000,
    image: image("photo-1486262715619-67b85e0b08d3"),
    description: "Аккуратная очистка доступных поверхностей под капотом.",
    features: ["Осмотр перед очисткой", "Очистка доступных поверхностей", "Соблюдение мер предосторожности"]
  },
  {
    id: "wheels",
    name: "Чистка колёс и дисков",
    category: "Детейлинг",
    price: 40000,
    image: image("photo-1558618666-fcd25c85cd64"),
    description: "Удаление дорожной грязи с колёс и дисков.",
    features: ["Очистка дисков", "Мойка шин", "Удаление дорожных загрязнений"]
  },
  {
    id: "polish",
    name: "Полировка кузова",
    category: "Полировка",
    price: 300000,
    image: image("photo-1613214150384-5a6f4b3f2b14"),
    description: "Обработка кузова для улучшения внешнего вида покрытия.",
    features: ["Осмотр лакокрасочного покрытия", "Обработка кузова", "Финишный блеск"]
  },
  {
    id: "mats",
    name: "Коврики и багажник",
    category: "Химчистка",
    price: 50000,
    image: image("photo-1492144534655-ae79c964c9d7"),
    description: "Очистка ковриков и багажного отделения.",
    features: ["Очистка ковриков", "Уборка багажника", "Удаление пыли и грязи"]
  }
];

/* =========================
   МАГАЗИН — 16 ТОВАРОВ
========================= */

const products = [
  {
    id: "microfiber",
    name: "Микрофибровое полотенце",
    category: "Инструменты",
    price: 25000,
    image: image("photo-1602143407151-7111542de6e8"),
    description: "Мягкая ткань для сушки и ухода за кузовом.",
    keywords: "тряпка салфетка полотенце микрофибра сушка",
    popular: 100
  },
  {
    id: "sponge",
    name: "Автомобильная губка",
    category: "Инструменты",
    price: 10000,
    image: image("photo-1607860108855-64acf2078ed9"),
    description: "Губка для аккуратной ручной мойки.",
    keywords: "губка мойка пена поролон",
    popular: 90
  },
  {
    id: "brush",
    name: "Щётка для колёс",
    category: "Инструменты",
    price: 30000,
    image: image("photo-1558618666-fcd25c85cd64"),
    description: "Щётка для очистки дисков и труднодоступных мест.",
    keywords: "щетка кисть диски колесо инструмент",
    popular: 85
  },
  {
    id: "mitt",
    name: "Перчатка для мойки",
    category: "Инструменты",
    price: 35000,
    image: image("photo-1607860108855-64acf2078ed9"),
    description: "Удобная моющая перчатка для ручного ухода.",
    keywords: "варежка перчатка губка мойка",
    popular: 78
  },
  {
    id: "shampoo",
    name: "Автошампунь",
    category: "Автохимия",
    price: 35000,
    image: image("photo-1600334089648-b0d9d3028eb2"),
    description: "Шампунь для регулярной мойки автомобильного кузова.",
    keywords: "химия шампунь пена кузов средство",
    popular: 99
  },
  {
    id: "foam",
    name: "Активная пена",
    category: "Автохимия",
    price: 50000,
    image: image("photo-1607860108855-64acf2078ed9"),
    description: "Средство для предварительной очистки кузова.",
    keywords: "пена химия активная бесконтактная мойка",
    popular: 95
  },
  {
    id: "glass",
    name: "Очиститель стёкол",
    category: "Автохимия",
    price: 30000,
    image: image("photo-1503376780353-7e6692767b70"),
    description: "Средство для ухода за автомобильными стёклами.",
    keywords: "стекло стекла окна очиститель химия",
    popular: 77
  },
  {
    id: "tire",
    name: "Чернитель шин",
    category: "Автохимия",
    price: 45000,
    image: image("photo-1492144534655-ae79c964c9d7"),
    description: "Средство для ухода за внешним видом шин.",
    keywords: "шины резина чернитель блеск",
    popular: 74
  },
  {
    id: "phone-holder",
    name: "Держатель телефона",
    category: "Аксессуары",
    price: 55000,
    image: image("photo-1502877338535-766e1452684a"),
    description: "Практичный аксессуар для размещения смартфона в салоне.",
    keywords: "телефон смартфон держатель салон",
    popular: 88
  },
  {
    id: "organizer",
    name: "Органайзер в багажник",
    category: "Аксессуары",
    price: 80000,
    image: image("photo-1492144534655-ae79c964c9d7"),
    description: "Помогает аккуратно разместить вещи в автомобиле.",
    keywords: "органайзер багажник хранение сумка",
    popular: 70
  },
  {
    id: "air-freshener",
    name: "Ароматизатор салона",
    category: "Аксессуары",
    price: 20000,
    image: image("photo-1507136566006-cfc505b114fc"),
    description: "Аксессуар для приятной атмосферы в салоне.",
    keywords: "ароматизатор запах аромат салон",
    popular: 81
  },
  {
    id: "seat-organizer",
    name: "Органайзер на сиденье",
    category: "Аксессуары",
    price: 65000,
    image: image("photo-1502877338535-766e1452684a"),
    description: "Дополнительные карманы для мелочей в салоне.",
    keywords: "карманы сиденье органайзер аксессуары",
    popular: 67
  },
  {
    id: "starter-kit",
    name: "Набор для мойки",
    category: "Наборы",
    price: 150000,
    image: image("photo-1607860108855-64acf2078ed9"),
    description: "Стартовый комплект для самостоятельного ухода за машиной.",
    keywords: "набор комплект подарок губка шампунь полотенце",
    popular: 98
  },
  {
    id: "detail-kit",
    name: "Набор для детейлинга",
    category: "Наборы",
    price: 250000,
    image: image("photo-1613214150384-5a6f4b3f2b14"),
    description: "Комплект средств и принадлежностей для детального ухода.",
    keywords: "детейлинг комплект набор щетки уход",
    popular: 87
  },
  {
    id: "gift-box",
    name: "CARWASH Gift Box",
    category: "Наборы",
    price: 150000,
    image: image("photo-1600334089648-b0d9d3028eb2"),
    description: "Подарочный набор для автолюбителя.",
    keywords: "подарок подарочный набор коробка gift box",
    popular: 100
  },
  {
    id: "travel-kit",
    name: "Дорожный набор",
    category: "Наборы",
    price: 180000,
    image: image("photo-1492144534655-ae79c964c9d7"),
    description: "Полезные принадлежности для ухода за машиной в дороге.",
    keywords: "дорожный поездка путешествие набор автомобиль",
    popular: 72
  }
];

/* =========================
   СОСТОЯНИЕ
========================= */

let serviceFilter = "all";
let productFilter = "all";
let searchQuery = "";
let cart = {};

try {
  const saved = JSON.parse(localStorage.getItem("carwash-cart") || "{}");
  if (saved && typeof saved === "object" && !Array.isArray(saved)) {
    for (const [id, quantity] of Object.entries(saved)) {
      if (products.some(product => product.id === id) &&
          Number.isInteger(quantity) && quantity > 0 && quantity <= 99) {
        cart[id] = quantity;
      }
    }
  }
} catch {
  cart = {};
}

/* =========================
   ПОИСК И СИНОНИМЫ
========================= */

function normalize(value) {
  return String(value ?? "")
    .toLocaleLowerCase("ru-RU")
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const synonyms = {
  "бампер": ["кузов", "мойка кузова"],
  "колеса": ["диски", "шины", "чистка колес"],
  "колесо": ["диски", "шины", "чистка колес"],
  "стекла": ["стекло", "очиститель стекол"],
  "стекло": ["стекла", "очиститель стекол"],
  "салфетка": ["микрофибровое полотенце", "тряпка"],
  "тряпка": ["микрофибровое полотенце", "салфетка"],
  "химия": ["автохимия", "автошампунь", "активная пена"],
  "пенa": ["активная пена", "автошампунь"],
  "шампунь": ["автошампунь"],
  "подарок": ["gift box", "набор для мойки"],
  "подарочный": ["gift box", "набор"],
  "аксессуар": ["аксессуары", "держатель телефона", "органайзер"],
  "инструмент": ["инструменты", "щетка для колес", "губка"],
  "губка": ["автомобильная губка"],
  "мойка": ["обычная мойка водой", "комплексная мойка", "премиум-мойка"],
  "полировка": ["полировка кузова"],
  "детейлинг": ["набор для детейлинга"],
  "салон": ["химчистка салона", "органайзер на сиденье"],
  "коврик": ["коврики и багажник"],
  "корзина": ["магазин товаров"],
  "аромат": ["ароматизатор салона"]
};

function expandSearch(query) {
  const normalized = normalize(query);
  const terms = normalized.split(" ").filter(Boolean);
  const expanded = new Set(terms);

  for (const term of terms) {
    for (const [key, values] of Object.entries(synonyms)) {
      if (normalize(key) === term || normalize(key).startsWith(term)) {
        expanded.add(normalize(key));
        values.forEach(value => expanded.add(normalize(value)));
      }
      if (values.some(value => normalize(value) === term)) {
        expanded.add(normalize(key));
        values.forEach(value => expanded.add(normalize(value)));
      }
    }
  }
  return [...expanded];
}

function matchesQuery(item, query) {
  if (!query) return true;

  const text = normalize([
    item.name,
    item.category,
    item.description,
    ...(item.features || []),
    item.keywords || ""
  ].join(" "));

  const terms = expandSearch(query);
  return terms.some(term => text.includes(term));
}

/* =========================
   КАРТОЧКИ УСЛУГ
========================= */

function renderServices() {
  const grid = $("#servicesGrid");
  if (!grid) return;

  const filtered = services.filter(service => {
    const categoryMatches =
      serviceFilter === "all" || service.category === serviceFilter;
    return categoryMatches && matchesQuery(service, searchQuery);
  });

  grid.innerHTML = filtered.map(service => `
    <article class="service-card">
      <div class="service-image">
        <img src="${service.image}" alt="${service.name}" loading="lazy">
      </div>
      <div class="service-body">
        <span class="service-category">${service.category}</span>
        <h3>${service.name}</h3>
        <p>${service.description}</p>
        <ul>
          ${service.features.slice(0, 4).map(feature => `<li>${feature}</li>`).join("")}
        </ul>
        <div class="service-bottom">
          <span class="price">${money(service.price)}</span>
        </div>
        <div class="service-actions">
          <button class="button button-outline" data-service-detail="${service.id}">Подробнее</button>
          <button class="button button-primary" data-book-service="${service.id}">Выбрать услугу</button>
        </div>
      </div>
    </article>
  `).join("");

  if (!filtered.length) {
    grid.innerHTML = `<p class="empty-state">Подходящих услуг не найдено.</p>`;
  }
}

/* =========================
   КАРТОЧКИ ТОВАРОВ
========================= */

function getSortedProducts(list) {
  const sorted = [...list];
  const sort = $("#productSort")?.value || "popular";

  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name, "ru"));
  if (sort === "popular") sorted.sort((a, b) => b.popular - a.popular);

  return sorted;
}

function renderProducts() {
  const grid = $("#productsGrid");
  if (!grid) return;

  const filtered = products.filter(product => {
    const categoryMatches =
      productFilter === "all" || product.category === productFilter;
    return categoryMatches && matchesQuery(product, searchQuery);
  });

  const sorted = getSortedProducts(filtered);
  $("#productCount").textContent = sorted.length;
  $("#noProducts").hidden = sorted.length > 0;

  grid.innerHTML = sorted.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-tag">${product.category}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <button class="add-cart" data-add="${product.id}" aria-label="Добавить: ${product.name}" title="Добавить в корзину">
            <svg><use href="#i-cart"/></svg>
          </button>
        </div>
        <button class="text-link" data-product-detail="${product.id}" style="margin-top:12px;border:0;background:none;padding:0">Подробнее о товаре ↗</button>
      </div>
    </article>
  `).join("");
}

/* =========================
   ФИЛЬТРЫ
========================= */

function setActiveFilter(container, value) {
  $$(".filter-chip", container).forEach(button => {
    button.classList.toggle("selected", button.dataset.filter === value);
  });
}

$("#serviceFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  serviceFilter = button.dataset.filter;
  setActiveFilter($("#serviceFilters"), serviceFilter);
  renderServices();
});

$("#productFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  productFilter = button.dataset.filter;
  setActiveFilter($("#productFilters"), productFilter);
  renderProducts();
});

$("#productSort").addEventListener("change", renderProducts);

/* =========================
   КОРЗИНА
========================= */

function saveCart() {
  try {
    localStorage.setItem("carwash-cart", JSON.stringify(cart));
  } catch {
    // Корзина продолжит работать до закрытия вкладки.
  }
}

function cartQuantity() {
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, quantity]) => {
    const product = products.find(item => item.id === id);
    return sum + (product ? product.price * quantity : 0);
  }, 0);
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  cart[id] = Math.min((cart[id] || 0) + 1, 99);
  saveCart();
  renderCart();
  showToast(`${product.name} добавлен в корзину`);
}

function changeQuantity(id, delta) {
  if (!cart[id]) return;

  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  if (cart[id] > 99) cart[id] = 99;

  saveCart();
  renderCart();
}

function renderCart() {
  $("#cartCount").textContent = cartQuantity();
  $("#cartTitle").textContent = `Корзина (${cartQuantity()})`;
  $("#cartTotal").textContent = money(cartTotal());

  const entries = Object.entries(cart).filter(([id, quantity]) =>
    products.some(product => product.id === id) && quantity > 0
  );

  $("#cartEmpty").hidden = entries.length > 0;
  $("#cartFooter").hidden = entries.length === 0;
  $("#cartItems").hidden = entries.length === 0;

  $("#cartItems").innerHTML = entries.map(([id, quantity]) => {
    const product = products.find(item => item.id === id);
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <div class="cart-item-price">${money(product.price * quantity)}</div>
          <div class="cart-item-controls">
            <div class="quantity-control">
              <button data-quantity="${id}" data-delta="-1" aria-label="Уменьшить количество">−</button>
              <span>${quantity}</span>
              <button data-quantity="${id}" data-delta="1" aria-label="Увеличить количество">+</button>
            </div>
            <button class="remove-item" data-remove="${id}">Удалить</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function openCart() {
  $("#cartOverlay").hidden = false;
  document.body.classList.add("no-scroll");
}

function closeCart() {
  $("#cartOverlay").hidden = true;
  document.body.classList.remove("no-scroll");
}

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);

$("#cartOverlay").addEventListener("click", event => {
  if (event.target === $("#cartOverlay")) closeCart();
});

$("#continueShopping").addEventListener("click", () => {
  closeCart();
  $("#shop").scrollIntoView({ behavior: "smooth" });
});

$("#cartItems").addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.delta));
  }

  if (removeButton) {
    delete cart[removeButton.dataset.remove];
    saveCart();
    renderCart();
  }
});

$("#checkoutButton").addEventListener("click", () => {
  if (cartQuantity() === 0) return;

  const summary = Object.entries(cart).map(([id, quantity]) => {
    const product = products.find(item => item.id === id);
    return `${product.name} — ${quantity} шт.`;
  }).join("\n");

  closeCart();
  showToast("Заявка на товары подготовлена. Оплата не подключена.");
  $("#bookingMessage").hidden = false;
  $("#bookingMessage").textContent =
    `Список товаров:\n${summary}\nИтого: ${money(cartTotal())}. Это заявка на экране, она ещё не отправлена.`;

  $("#contacts").scrollIntoView({ behavior: "smooth" });
});

/* =========================
   ПОДРОБНОСТИ
========================= */

function openDetail(item, type) {
  if (!item) return;

  const isService = type === "service";
  const details = isService ? item.features : [
    `Категория: ${item.category}`,
    item.description,
    "Добавь товар в корзину, чтобы включить его в список покупок."
  ];

  $("#detailContent").innerHTML = `
    <div class="detail-layout">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <span class="eyebrow">${isService ? "УСЛУГА АВТОМОЙКИ" : "ТОВАР ДЛЯ АВТОМОБИЛЯ"}</span>
        <h2 id="detailTitle">${item.name}</h2>
        <p>${item.description}</p>
        <ul>${details.map(detail => `<li>${detail}</li>`).join("")}</ul>
        <div class="price">${money(item.price)}</div>
        ${
          isService
            ? `<button class="button button-primary button-full" data-detail-book="${item.id}">Выбрать услугу</button>`
            : `<button class="button button-primary button-full" data-detail-add="${item.id}">Добавить в корзину</button>`
        }
      </div>
    </div>
  `;

  $("#detailOverlay").hidden = false;
  document.body.classList.add("no-scroll");
}

function closeDetail() {
  $("#detailOverlay").hidden = true;
  document.body.classList.remove("no-scroll");
}

$("#closeDetail").addEventListener("click", closeDetail);
$("#detailOverlay").addEventListener("click", event => {
  if (event.target === $("#detailOverlay")) closeDetail();
});

$("#servicesGrid").addEventListener("click", event => {
  const detailButton = event.target.closest("[data-service-detail]");
  const bookButton = event.target.closest("[data-book-service]");

  if (detailButton) {
    openDetail(services.find(item => item.id === detailButton.dataset.serviceDetail), "service");
  }

  if (bookButton) {
    selectBookingService(bookButton.dataset.bookService);
  }
});

$("#productsGrid").addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  const detailButton = event.target.closest("[data-product-detail]");

  if (addButton) addToCart(addButton.dataset.add);

  if (detailButton) {
    openDetail(products.find(item => item.id === detailButton.dataset.productDetail), "product");
  }
});

$("#detailContent").addEventListener("click", event => {
  const addButton = event.target.closest("[data-detail-add]");
  const bookButton = event.target.closest("[data-detail-book]");

  if (addButton) {
    addToCart(addButton.dataset.detailAdd);
    closeDetail();
  }

  if (bookButton) {
    const id = bookButton.dataset.detailBook;
    closeDetail();
    selectBookingService(id);
  }
});

/* =========================
   ПОИСК В РЕАЛЬНОМ ВРЕМЕНИ
========================= */

function searchCatalog(query) {
  searchQuery = normalize(query);
  renderServices();
  renderProducts();
}

function renderSearchResults(query) {
  const panel = $("#searchResults");
  const normalized = normalize(query);

  if (!normalized) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }

  const foundServices = services
    .filter(item => matchesQuery(item, normalized))
    .slice(0, 3)
    .map(item => ({ ...item, type: "service" }));

  const foundProducts = products
    .filter(item => matchesQuery(item, normalized))
    .slice(0, 5)
    .map(item => ({ ...item, type: "product" }));

  const results = [...foundServices, ...foundProducts];

  panel.hidden = false;
  panel.innerHTML = results.length ? results.map(item => `
    <button class="search-result" data-search-type="${item.type}" data-search-id="${item.id}">
      <img src="${item.image}" alt="" loading="lazy">
      <span><strong>${item.name}</strong><small>${item.category} · ${money(item.price)}</small></span>
    </button>
  `).join("") : `<div class="search-empty">Ничего не найдено. Попробуй другое слово.</div>`;
}

$("#globalSearch").addEventListener("input", event => {
  const value = event.target.value;
  searchCatalog(value);
  renderSearchResults(value);
});

$("#searchForm").addEventListener("submit", event => {
  event.preventDefault();
  searchCatalog($("#globalSearch").value);
  $("#searchResults").hidden = true;
  $("#shop").scrollIntoView({ behavior: "smooth" });
});

$("#searchResults").addEventListener("click", event => {
  const button = event.target.closest("[data-search-id]");
  if (!button) return;

  const item = button.dataset.searchType === "service"
    ? services.find(entry => entry.id === button.dataset.searchId)
    : products.find(entry => entry.id === button.dataset.searchId);

  $("#searchResults").hidden = true;

  if (button.dataset.searchType === "service") {
    openDetail(item, "service");
  } else {
    openDetail(item, "product");
  }
});

document.addEventListener("click", event => {
  if (!event.target.closest(".header-search")) {
    $("#searchResults").hidden = true;
  }
});

/* =========================
   ЗАПИСЬ НА МОЙКУ
========================= */

function initializeBookingForm() {
  const select = $("#bookingService");

  services.forEach(service => {
    const option = document.createElement("option");
    option.value = service.id;
    option.textContent = `${service.name} — ${money(service.price)}`;
    select.appendChild(option);
  });

  const today = new Date();
  const localDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  $("#bookingDate").min = localDate;
}

function selectBookingService(id) {
  const service = services.find(item => item.id === id);
  if (!service) return;

  $("#bookingService").value = service.id;
  closeDetail();
  $("#booking").scrollIntoView({ behavior: "smooth", block: "center" });

  // Якорь #booking — форма находится в секции контактов.
  $("#contacts").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast(`Выбрана услуга: ${service.name}`);
}

$("#bookingForm").addEventListener("submit", event => {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const serviceId = String(data.get("service") || "");
  const date = String(data.get("date") || "");
  const time = String(data.get("time") || "");
  const service = services.find(item => item.id === serviceId);

  if (name.length < 2 || phone.length < 7 || !service || !date || !time) {
    showToast("Проверь имя, телефон, услугу, дату и время.", true);
    return;
  }

  if (date < $("#bookingDate").min) {
    showToast("Выбери сегодняшнюю или будущую дату.", true);
    return;
  }

  $("#bookingMessage").hidden = false;
  $("#bookingMessage").textContent =
    `Заявка подготовлена!\nИмя: ${name}\nТелефон: ${phone}\nУслуга: ${service.name}\nСтоимость: ${money(service.price)}\nДата: ${date}\nВремя: ${time}\n\nЗаявка показана только на этом сайте и не отправлена в компанию.`;

  showToast("Данные заявки подготовлены.");
});

/* =========================
   БАННЕР ПОДАРОЧНОГО НАБОРА
========================= */

$("#promoAdd").addEventListener("click", () => {
  addToCart("gift-box");
});

/* =========================
   МОБИЛЬНОЕ МЕНЮ
========================= */

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#nav");
  const isOpen = nav.classList.toggle("open");

  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").setAttribute(
    "aria-label",
    isOpen ? "Закрыть меню" : "Открыть меню"
  );
});

$$(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    $("#nav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  });
});

/* =========================
   УВЕДОМЛЕНИЯ
========================= */

function showToast(message, isError = false) {
  const toast = document.createElement("div");
  toast.className = `toast${isError ? " error" : ""}`;
  toast.textContent = message;
  $("#toastContainer").appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3500);
}

/* =========================
   КЛАВИАТУРА И СТАРТ
========================= */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
    closeDetail();
    $("#searchResults").hidden = true;
    $("#nav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }
});

$("#year").textContent = new Date().getFullYear();

initializeBookingForm();
renderServices();
renderProducts();
renderCart();
