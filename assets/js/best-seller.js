// TODO: Replace this placeholder data with live product data once the store is wired up.
const bestSellers = [
  {
    name: "The Bronx",
    notes: "Flavor notes: bright citrus, honey, smooth finish.",
    price: "$18",
    url: "products/bronx.html",
    image: "assets/images/Bronx-Bag.png",
    width: 1024,
    height: 1536,
    alt: "The Bronx blend bag",
  },
  {
    name: "Manhattan",
    notes: "Flavor notes: cocoa, toasted sugar, clean finish.",
    price: "$19",
    url: "products/manhattan.html",
    image: "assets/images/Manhattan-Bag.png",
    width: 1024,
    height: 1536,
    alt: "Manhattan blend bag",
  },
  {
    name: "Queens",
    notes: "Flavor notes: crisp apple, floral lift, clean finish.",
    price: "$18",
    url: "products/queens.html",
    image: "assets/images/Queens-Bag.png",
    width: 1024,
    height: 1536,
    alt: "Queens blend bag",
  },
  {
    name: "Brooklyn",
    notes: "Flavor notes: caramel, toffee, warm spice.",
    price: "$19",
    url: "products/brooklyn.html",
    image: "assets/images/Brooklyn-Bag.png",
    width: 1024,
    height: 1536,
    alt: "Brooklyn blend bag",
  },
];

const grid = document.getElementById("best-sellers-grid");

if (grid) {
  bestSellers.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card card-link product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.alt;
    img.width = product.width;
    img.height = product.height;
    img.loading = "lazy";
    img.decoding = "async";

    const title = document.createElement("h3");
    title.textContent = product.name;

    const notes = document.createElement("p");
    notes.className = "muted";
    notes.textContent = product.notes;

    const meta = document.createElement("div");
    meta.className = "product-meta";

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = product.price;

    const link = document.createElement("a");
    link.className = "btn btn-ghost btn-sm";
    link.href = product.url;
    link.textContent = "Shop";

    meta.append(price, link);
    card.append(img, title, notes, meta);
    grid.appendChild(card);
  });
}
