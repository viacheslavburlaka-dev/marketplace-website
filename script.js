const products = [
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    category: "tech",
    price: 129.99
  },
  {
    id: 2,
    title: "Smart Home Speaker",
    category: "tech",
    price: 89.0
  },
  {
    id: 3,
    title: "Minimalist Desk Lamp",
    category: "home",
    price: 39.5
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    category: "home",
    price: 199.0
  },
  {
    id: 5,
    title: "Classic Denim Jacket",
    category: "fashion",
    price: 59.99
  },
  {
    id: 6,
    title: "Everyday Sneakers",
    category: "fashion",
    price: 74.99
  }
];

let cart = [];

const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
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

yearSpan.textContent = new Date().getFullYear();

function renderProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  productsGrid.innerHTML = "";

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm);
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">Image placeholder</div>
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
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

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
  cartDrawer.classList.add("open");
  backdrop.classList.add("visible");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  backdrop.classList.remove("visible");
}

cartToggle.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function handleContactSubmit(e) {
  e.preventDefault();
  const status = document.getElementById("contact-status");
  status.textContent = "Thanks! This is a demo form—hook it to a backend to receive messages.";
  e.target.reset();
}

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

renderProducts();
updateCartUI();
