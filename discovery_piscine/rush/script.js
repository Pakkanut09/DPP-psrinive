const $ = s => document.querySelector(s);
const items = [
  {n:"Classic Original", c:"Classic", p:25, d:"Silky grass jelly in lightly sweet herbal tea."},
  {n:"Less Sugar Original", c:"Classic", p:25, d:"Half the sugar for a clean, earthy sip."},
  {n:"Honey Lime", c:"Fruity", p:30, d:"Bright lime and wild honey over jelly cubes."},
  {n:"Lychee Cooler", c:"Fruity", p:30, d:"Floral lychee juice with chilled jelly."},
  {n:"Brown Sugar Milk", c:"Creamy", p:35, d:"Caramel-style brown sugar with fresh milk."},
  {n:"Pandan Coconut", c:"Creamy", p:35, d:"Fragrant pandan swirled with coconut milk."}
];
const grid = $("#products");
if (grid) {
  const cart = {};
  const show = cat => {
    grid.innerHTML = items.filter(i => cat === "All" || i.c === cat).map(i =>
      `<article class="card"><h3>${i.n}</h3><p>${i.d}</p><p><b>฿${i.p}</b> (${i.c})</p>
      <button class="btn" data-n="${i.n}">Add to cart</button></article>`).join("");
  };
  const total = () => Object.entries(cart).reduce((t, [n, q]) => [t[0] + q, t[1] + q * items.find(i => i.n === n).p], [0, 0]);
  const update = () => {
    const [q, t] = total();
    $("#sum").textContent = q ? `${q} bottle${q > 1 ? "s" : ""}: ฿${t}` : "Cart is empty";
  };
  ["All", "Classic", "Fruity", "Creamy"].forEach(c => {
    const b = document.createElement("button");
    b.textContent = c;
    b.setAttribute("aria-pressed", c === "All");
    b.onclick = () => {
      document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
      show(c);
    };
    $("#filters").append(b);
  });
  grid.onclick = e => {
    const n = e.target.dataset.n;
    if (n) { cart[n] = (cart[n] || 0) + 1; update(); }
  };
  $("#buy").onclick = () => {
    const had = total()[0];
    Object.keys(cart).forEach(k => delete cart[k]);
    $("#sum").textContent = had ? "Order sent! We will message you to confirm." : "Add a bottle first";
  };
  show("All");
}
const mood = $("#mood");
if (mood) mood.onchange = () => {
  $("#rec").textContent = {
    hot: "Try Honey Lime. It is sharp, icy and made for heat.",
    tired: "Try Classic Original. The herbal tea is gentle and refreshing.",
    treat: "Try Brown Sugar Milk. It is the richest bottle we make.",
    "": ""
  }[mood.value];
};
