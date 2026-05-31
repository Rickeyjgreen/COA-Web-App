const products = [
  {
    name: "Give the Kid the Mic Tee",
    price: "$28 placeholder",
    giveback: "Donation math pending",
    art: "Give the Kid\nthe Mic",
    style: "marker"
  },
  {
    name: "Speak From the Heart Hoodie",
    price: "$54 placeholder",
    giveback: "Donation math pending",
    art: "Speak From\nthe Heart",
    style: ""
  },
  {
    name: "Stand With Daniel Sticker Pack",
    price: "$12 placeholder",
    giveback: "Donation math pending",
    art: "Let Them Speak",
    style: "marker"
  },
  {
    name: "A Mic. A Moment. A Movement. Tote",
    price: "$24 placeholder",
    giveback: "Donation math pending",
    art: "A Mic.\nA Moment.\nA Movement.",
    style: ""
  },
  {
    name: "Protect Kids Yard Sign",
    price: "$22 placeholder",
    giveback: "Donation math pending",
    art: "Protect Kids\nWho Tell\nthe Truth",
    style: "marker"
  },
  {
    name: "Digital Support Card",
    price: "$5 donation placeholder",
    giveback: "Direct-giving option pending",
    art: "You Matter.\nYour Voice\nMatters.",
    style: ""
  }
];

const productGrid = document.getElementById("productGrid");

if (productGrid) {
  productGrid.innerHTML = products.map((product) => `
    <article class="product-card">
      <div class="product-art ${product.style}">${product.art.replaceAll("\n", "<br>")}</div>
      <div>
        <h3>${product.name}</h3>
        <p>Placeholder product. Connect to a drop-shipping SKU after approval, fulfillment, and receipts are ready.</p>
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
