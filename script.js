// MANY PRODUCTS, MULTI-CATEGORY, LIFESTYLE IMAGES (UNSPLASH)

const products = [
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    category: "tech",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1518444028781-05f7c1e63f2f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Smart Home Speaker",
    category: "tech",
    price: 89.0,
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Minimalist Desk Lamp",
    category: "home",
    price: 39.5,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    category: "office",
    price: 199.0,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Classic Denim Jacket",
    category: "fashion",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Everyday White Sneakers",
    category: "fashion",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "RGB Gaming Mouse",
    category: "gaming",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1587202372775-98927f6a8caa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Mechanical Gaming Keyboard",
    category: "gaming",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Cozy Knit Throw Blanket",
    category: "home",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Ceramic Coffee Mug Set",
    category: "home",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Standing Desk Converter",
    category: "office",
    price: 159.0,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Leather Work Backpack",
    category: "lifestyle",
    price: 129.0,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    title: "Wireless Charging Pad",
    category: "tech",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    title: "4K Ultra HD Monitor",
    category: "tech",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    title: "Slim Fit Chinos",
    category: "fashion",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    title: "Casual Hoodie",
    category: "fashion",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    title: "Console Gaming Headset",
    category: "gaming",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    title: "LED Strip Lights",
    category: "gaming",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    title: "Indoor Plant Set",
    category: "lifestyle",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    title: "Scented Soy Candle",
    category: "lifestyle",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&w=800&q=80"
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
  const searchTerm = (searchInput?.value || "").toLowerCase();
  const sortValue = sortSelect?.value || "default";

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
      : "Image";

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
    if (!product) return;
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

// INITIAL RENDER
renderProducts();
updateCartUI();
