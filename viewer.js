const products = [
  {
    name: "Not All Heroes Wear Capes Tee",
    price: "$28 placeholder",
    giveback: "Donation math pending",
    art: "Not All Heroes\nWear Capes",
    description: "Hero portrait tee concept with rainbow advocacy lettering.",
    style: "rainbow marker"
  },
  {
    name: "Daniel 4 President Tee",
    price: "$28 placeholder",
    giveback: "Donation math pending",
    art: "Daniel\n4 President",
    description: "Campaign-style tee concept with bold rainbow varsity type.",
    style: "rainbow"
  },
  {
    name: "Official Merch Collage Tee",
    price: "$32 placeholder",
    giveback: "Donation math pending",
    art: "Official\nMerch\nCollage",
    description: "Multi-design front graphic concept using the approved merch set.",
    style: "poster"
  },
  {
    name: "Speak From the Heart Brand Set",
    price: "$24 placeholder",
    giveback: "Donation math pending",
    art: "Speak From\nthe Heart",
    description: "Clean campaign identity artwork for premium prints, stickers, and store branding.",
    style: "soft"
  },
  {
    name: "A Mic. A Moment. A Movement. Poster",
    price: "$22 placeholder",
    giveback: "Donation math pending",
    art: "A Mic.\nA Moment.\nA Movement.",
    description: "High-impact poster or hoodie-back design built around the movement frame.",
    style: "grit"
  },
  {
    name: "Let Them Speak Poster",
    price: "$22 placeholder",
    giveback: "Donation math pending",
    art: "Let Them\nSpeak",
    description: "Street-poster advocacy design with punk energy and direct support messaging.",
    style: "marker"
  },
  {
    name: "Stand With Daniel Poster",
    price: "$22 placeholder",
    giveback: "Donation math pending",
    art: "Stand With\nDaniel",
    description: "Core campaign poster with the support line: protect kids who tell the truth.",
    style: "poster"
  },
  {
    name: "Give the Kid the Mic Emblem",
    price: "$18 placeholder",
    giveback: "Donation math pending",
    art: "Give the Kid\nthe Mic",
    description: "Primary badge/logo graphic for shirts, stickers, pins, and social avatars.",
    style: "badge"
  },
  {
    name: "Sticker Pack Mockup",
    price: "$12 placeholder",
    giveback: "Donation math pending",
    art: "Sticker\nPack",
    description: "Low-cost entry product with multiple campaign slogans and icon graphics.",
    style: "soft marker"
  }
];

const productGrid = document.getElementById("productGrid");

if (productGrid) {
  productGrid.innerHTML = products.map((product) => `
    <article class="product-card merch-card">
      <div class="product-art ${product.style}">${product.art.replaceAll("\n", "<br>")}</div>
      <div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="placeholder-note">Mockup supplied. Connect final artwork file, drop-shipping SKU, and fulfillment link before launch.</p>
      </div>
      <div class="product-meta">
        <span>${product.price}</span>
        <span>${product.giveback}</span>
      </div>
      <button type="button" onclick="alert('Shop placeholder: connect this button to Shopify, Fourthwall, Printful, Printify, or another storefront when ready.')">Shop placeholder</button>
    </article>
  `).join("");
}

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.getAttribute("data-copy");
    const target = document.getElementById(targetId);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      const original = button.innerText;
      button.innerText = "Copied";
      setTimeout(() => {
        button.innerText = original;
      }, 1600);
    } catch (error) {
      button.innerText = "Select text to copy";
    }
  });
});
