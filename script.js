const products = [
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    category: "tech",
    price: 129.99,
    image: ""
  },
  {
    id: 2,
    title: "Smart Home Speaker",
    category: "tech",
    price: 89.0,
    image: ""
  },
  {
    id: 3,
    title: "Minimalist Desk Lamp",
    category: "home",
    price: 39.5,
    image: ""
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    category: "home",
    price: 199.0,
    image: ""
  },
  {
    id: 5,
    title: "Classic Denim Jacket",
    category: "fashion",
    price: 59.99,
    image: ""
  },
  {
    id: 6,
    title: "Everyday Sneakers",
    category: "fashion",
    price: 74.99,
    image: ""
  },
  {
    id: 7,
    title: "RGB Gaming Mouse",
    category: "gaming",
    price: 49.99,
    image: ""
  },
  {
    id: 8,
    title: "Mechanical Keyboard",
    category: "gaming",
    price: 99.99,
    image: ""
  }
];

let cart = [];
let activeCategory = "all";

const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const cartCount = document.getElementById("cart-count");
const cartDrawer = document.getElementById("cart-drawer");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartToggle = document.getElementById("cart-toggle");
const cartClose = document.getElementById("cart-close");
const backdrop = document.getElementById("backdrop");
const yearSpan = document.getElementById("year");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
const categoryList = document.getElementById("category-list");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

function getFilteredAndSortedProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const sortValue = sortSelect.value;

  let filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm);
    const matchesCategory =
      activeCategory === "all" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (sortValue === "price-asc") {
    filtered = filtered.slice().sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filtered = filtered.slice().sort((a, b) => b.price - a.price);
  }

  return filtered;
}

function renderProducts() {
  const list = getFilteredAndSortedProducts();
  productsGrid.innerHTML = "";

  if (list.length === 0) {
    productsGrid.innerHTML = "<p>No products found.</p>";
    return;
  }

  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const imageContent = product.image
      ? `<img src="${product.image}" alt="${product.title}" />`
      : "Image placeholder";

    card.innerHTML = `
      <div class="product-image">${imageContent}</div>
      <div class="product-title">${product.title}</div>
      <div class="product-category">${capitalize(product.category)}</div>
      <div class="product-bottom">
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <button class="btn-primary" data-id="${product.id}">Add to cart</button>
      </div>
    `;

    const btn = card.querySelector("button");
    btn.addEventListener("click", () => addToCart(product.id));

    productsGrid.appendChild(card);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function addToCart(productId) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = products.find((p) => p.id === productId);
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  if (cartCount) {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  }

  if (!cartItemsContainer || !cartTotal) return;

  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div class="cart-item-info">
          <span class="cart-item-title">${item.title}</span>
          <span class="cart-item-meta">${item.qty} × $${item.price.toFixed(
            2
          )}</span>
        </div>
        <button class="cart-item-remove">Remove</button>
      `;
      row.querySelector("button").addEventListener("click", () => {
        removeFromCart(item.id);
      });
      cartItemsContainer.appendChild(row);
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

function openCart() {
  if (!cartDrawer || !backdrop) return;
  cartDrawer.classList.add("open");
  backdrop.classList.add("visible");
}

function closeCart() {
  if (!cartDrawer || !backdrop) return;
  cartDrawer.classList.remove("open");
  backdrop.classList.remove("visible");
}

if (cartToggle) cartToggle.addEventListener("click", openCart);
if (cartClose) cartClose.addEventListener("click", closeCart);
if (backdrop) backdrop.addEventListener("click", closeCart);

if (searchInput) searchInput.addEventListener("input", renderProducts);
if (sortSelect) sortSelect.addEventListener("change", renderProducts);

function scrollToProducts() {
  const el = document.getElementById("products");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

if (categoryList) {
  categoryList.addEventListener("click", (e) => {
    const item = e.target.closest(".category-item");
    if (!item) return;
    const category = item.getAttribute("data-category");
    if (!category) return;

    activeCategory = category;

    categoryList
      .querySelectorAll(".category-item")
      .forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    renderProducts();
  });
}

renderProducts();
updateCartUI();
