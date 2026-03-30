/* ═══════════════════════════════════════════
   mCrochet — app.js
   Tienda + fondo Three.js
   Three.js se carga como <script> global (THREE)
   ═══════════════════════════════════════════ */

/* ═══════════ DATOS ═══════════ */
var products = [
  { id: 1, name: "Conejita Luna", category: "Animales", price: 29.9, stock: 6,
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><rect width="400" height="320" fill="#fff3f7"/><circle cx="200" cy="170" r="72" fill="#ffd2de"/><ellipse cx="165" cy="80" rx="26" ry="56" fill="#ffd2de"/><ellipse cx="235" cy="80" rx="26" ry="56" fill="#ffd2de"/><circle cx="174" cy="166" r="8" fill="#7b4970"/><circle cx="226" cy="166" r="8" fill="#7b4970"/><ellipse cx="200" cy="190" rx="14" ry="10" fill="#ff8fb1"/><text x="200" y="292" text-anchor="middle" font-family="Arial" font-size="24" fill="#7b4970">Conejita Luna</text></svg>'),
    description: "Muñeca tejida a mano con vestido rosa pastel." },
  { id: 2, name: "Oso Mateo", category: "Animales", price: 31.5, stock: 4,
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><rect width="400" height="320" fill="#fdf1e3"/><circle cx="200" cy="170" r="74" fill="#d6a67d"/><circle cx="145" cy="112" r="24" fill="#c78e63"/><circle cx="255" cy="112" r="24" fill="#c78e63"/><circle cx="174" cy="165" r="8" fill="#4c2f20"/><circle cx="226" cy="165" r="8" fill="#4c2f20"/><ellipse cx="200" cy="191" rx="15" ry="11" fill="#8a5a3f"/><rect x="122" y="230" width="156" height="24" rx="12" fill="#7b4970"/><text x="200" y="292" text-anchor="middle" font-family="Arial" font-size="24" fill="#6b4f65">Oso Mateo</text></svg>'),
    description: "Oso de crochet con bufanda suave y relleno hipoalergénico." },
  { id: 3, name: "Sirena Coral", category: "Fantasía", price: 34.0, stock: 3,
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><rect width="400" height="320" fill="#eef8ff"/><circle cx="200" cy="132" r="52" fill="#ffd5cc"/><path d="M200 182 C240 215 255 245 210 275 C190 289 162 285 150 262 C132 229 164 211 200 182Z" fill="#8ed6d1"/><circle cx="182" cy="130" r="6" fill="#425062"/><circle cx="218" cy="130" r="6" fill="#425062"/><path d="M188 149 Q200 159 212 149" stroke="#ff8fb1" stroke-width="4" fill="none" stroke-linecap="round"/><text x="200" y="292" text-anchor="middle" font-family="Arial" font-size="24" fill="#4f6680">Sirena Coral</text></svg>'),
    description: "Sirena amigurumi con detalles de estrellas marinas." },
  { id: 4, name: "Dino Pepo", category: "Fantasía", price: 27.5, stock: 8,
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><rect width="400" height="320" fill="#f1fff0"/><path d="M120 210 C120 130 180 92 242 110 C286 122 315 154 309 200 C304 242 265 264 218 264 C162 264 120 246 120 210Z" fill="#9ddf8c"/><circle cx="250" cy="150" r="8" fill="#385c32"/><circle cx="182" cy="150" r="6" fill="#b6e9aa"/><circle cx="166" cy="168" r="6" fill="#b6e9aa"/><circle cx="182" cy="186" r="6" fill="#b6e9aa"/><rect x="142" y="252" width="30" height="20" rx="8" fill="#8ccf7e"/><rect x="225" y="252" width="30" height="20" rx="8" fill="#8ccf7e"/><text x="200" y="292" text-anchor="middle" font-family="Arial" font-size="24" fill="#4f7a47">Dino Pepo</text></svg>'),
    description: "Pequeño dinosaurio ideal para regalo infantil." },
  { id: 5, name: "Frida Crochet", category: "Colección", price: 38.9, stock: 2,
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><rect width="400" height="320" fill="#fff4ea"/><circle cx="200" cy="160" r="72" fill="#d6a88f"/><path d="M130 132 Q200 65 270 132" stroke="#2f2a2a" stroke-width="18" fill="none" stroke-linecap="round"/><circle cx="175" cy="164" r="8" fill="#2f2a2a"/><circle cx="225" cy="164" r="8" fill="#2f2a2a"/><path d="M184 191 Q200 204 216 191" stroke="#8d3f5f" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="153" cy="95" r="10" fill="#ff8fb1"/><circle cx="175" cy="82" r="10" fill="#ffd05b"/><circle cx="199" cy="78" r="10" fill="#7ed6c2"/><circle cx="224" cy="82" r="10" fill="#d98fff"/><circle cx="248" cy="95" r="10" fill="#ff8fb1"/><text x="200" y="292" text-anchor="middle" font-family="Arial" font-size="24" fill="#6a3c4e">Frida Crochet</text></svg>'),
    description: "Pieza decorativa inspirada en arte latinoamericano." },
  { id: 6, name: "Mini Nube", category: "Bebés", price: 22.0, stock: 10,
    image: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320"><rect width="400" height="320" fill="#eef4ff"/><path d="M132 190 C118 165 139 132 171 136 C185 112 218 106 240 126 C272 118 298 139 298 168 C312 175 319 189 312 204 C303 224 277 230 254 225 L166 225 C146 230 120 218 119 198 C118 195 118 193 132 190Z" fill="#ffffff" stroke="#c8d9ff" stroke-width="4"/><circle cx="182" cy="180" r="7" fill="#5b6c8c"/><circle cx="220" cy="180" r="7" fill="#5b6c8c"/><path d="M183 198 Q201 212 219 198" stroke="#ff8fb1" stroke-width="4" fill="none" stroke-linecap="round"/><text x="200" y="292" text-anchor="middle" font-family="Arial" font-size="24" fill="#56648a">Mini Nube</text></svg>'),
    description: "Sonajero tejido para cuna, muy ligero y suave." }
];

/* ═══════════ FILTRO ═══════════ */
function filterProducts(items, filters) {
  var search = (filters.search || "").trim().toLowerCase();
  var cat    = filters.category || "Todos";
  var max    = Number.isFinite(filters.maxPrice) ? filters.maxPrice : Infinity;
  return items.filter(function (p) {
    var okCat    = cat === "Todos" || p.category === cat;
    var okSearch = !search || p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search);
    var okPrice  = p.price <= max;
    return okCat && okSearch && okPrice;
  });
}

/* ═══════════ ESTADO ═══════════ */
var state = { search: "", category: "Todos", maxPrice: 50, cartCount: 0 };
var categories = ["Todos"];
products.forEach(function (p) {
  if (categories.indexOf(p.category) === -1) categories.push(p.category);
});


/* ═══════════ REFERENCIAS DOM ═══════════ */
var productsGrid  = document.getElementById("productsGrid");
var searchInput   = document.getElementById("searchInput");
var priceInput    = document.getElementById("priceInput");
var priceValue    = document.getElementById("priceValue");
var cartCountEl   = document.getElementById("cartCount");
var categoryChips = document.getElementById("categoryChips");

/* ═══════════ RENDER ═══════════ */
function renderCategories() {
  categoryChips.innerHTML = categories.map(function (c) {
    return '<button class="chip ' + (state.category === c ? "active" : "") + '" data-category="' + c + '">' + c + '</button>';
  }).join("");
}

function renderProducts() {
  var visible = filterProducts(products, state);
  if (!visible.length) {
    productsGrid.innerHTML = '<p class="empty">No hay resultados para los filtros actuales.</p>';
    return;
  }
  productsGrid.innerHTML = visible.map(function (item) {
    return '<article class="card">' +
      '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy" />' +
      '<div class="card-content">' +
        '<p class="category">' + item.category + '</p>' +
        '<h2>' + item.name + '</h2>' +
        '<p class="description">' + item.description + '</p>' +
        '<p class="price">' + item.price.toFixed(2) + ' €</p>' +
        '<div class="card-actions">' +
          '<span>Stock: ' + item.stock + '</span>' +
        '</div>' +
      '</div>' +
    '</article>';
  }).join("");
}

/* ═══════════ EVENTOS ═══════════ */
searchInput.addEventListener("input", function (e) {
  state.search = e.target.value;
  renderProducts();
});

priceInput.addEventListener("input", function (e) {
  state.maxPrice = Number(e.target.value);
  priceValue.textContent = "Hasta " + state.maxPrice + " €";
  renderProducts();
});

categoryChips.addEventListener("click", function (e) {
  var btn = e.target.closest("[data-category]");
  if (!btn) return;
  state.category = btn.dataset.category;
  renderCategories();
  renderProducts();
});

productsGrid.addEventListener("click", function (e) {
  var btn = e.target.closest("[data-add]");
  if (!btn) return;
  state.cartCount++;
  cartCountEl.textContent = state.cartCount;
  btn.style.transform = "scale(1.15)";
  setTimeout(function () { btn.style.transform = ""; }, 200);
});

renderCategories();
renderProducts();

/* ═══════════ FORMULARIO DE PEDIDO ═══════════ */
var checkSelectDropdown = document.getElementById("checkSelectDropdown");
var checkSelectToggle   = document.getElementById("checkSelectToggle");
var checkSelect         = document.getElementById("checkSelect");
var hiddenMunecos       = document.getElementById("hiddenMunecos");

/* Generar checkboxes */
products.forEach(function (p) {
  var item = document.createElement("label");
  item.className = "check-select-item";
  item.innerHTML =
    '<input type="checkbox" value="' + p.name + ' (' + p.price.toFixed(2) + ' €)" />' +
    '<span class="check-select-name">' + p.name + '</span>' +
    '<span class="check-select-price">' + p.price.toFixed(2) + ' €</span>';
  checkSelectDropdown.appendChild(item);
});

/* Toggle abrir / cerrar */
checkSelectToggle.addEventListener("click", function () {
  checkSelect.classList.toggle("open");
});

/* Cerrar al hacer clic fuera */
document.addEventListener("click", function (e) {
  if (!checkSelect.contains(e.target)) {
    checkSelect.classList.remove("open");
  }
});

/* Actualizar resumen al marcar/desmarcar */
checkSelectDropdown.addEventListener("change", function () {
  var checked = checkSelectDropdown.querySelectorAll("input:checked");
  var names = [];
  checked.forEach(function (cb) { names.push(cb.value); });
  hiddenMunecos.value = names.join(", ");

  if (names.length === 0) {
    checkSelectToggle.firstChild.textContent = "— Selecciona uno o varios muñecos — ";
  } else {
    checkSelectToggle.firstChild.textContent = names.length + (names.length === 1 ? " muñeco" : " muñecos") + " seleccionado" + (names.length === 1 ? "" : "s") + " ";
  }
});

var orderForm = document.getElementById("orderForm");

/* ═══════════ CONSENTIMIENTO Y MODAL ═══════════ */
var consentCheck       = document.getElementById("consentCheck");
var submitBtn          = document.getElementById("submitBtn");
var policyModalOverlay = document.getElementById("policyModalOverlay");
var closePolicyModal   = document.getElementById("closePolicyModal");
var acceptPolicyBtn    = document.getElementById("acceptPolicyBtn");

/* Referencias a campos obligatorios */
var inputNombre    = orderForm.querySelector('[name="nombre"]');
var inputEmail     = orderForm.querySelector('[name="email"]');
var inputTelefono  = orderForm.querySelector('[name="telefono"]');
var inputDireccion = orderForm.querySelector('[name="direccion"]');

/* Función que comprueba si todos los requisitos se cumplen */
var telRegex = /^\+?\d[\d\s]{7,15}$/;
function validateForm() {
  var nombreOk    = inputNombre.value.trim() !== "";
  var emailOk     = inputEmail.value.trim() !== "" && inputEmail.validity.valid;
  var telefonoOk  = telRegex.test(inputTelefono.value.trim());
  var direccionOk = inputDireccion.value.trim() !== "";
  var munecosOk   = hiddenMunecos.value.trim() !== "";
  var consentOk   = consentCheck.checked;

  submitBtn.disabled = !(nombreOk && emailOk && telefonoOk && direccionOk && munecosOk && consentOk);
}

/* Escuchar cambios en todos los campos obligatorios */
inputNombre.addEventListener("input", validateForm);
inputEmail.addEventListener("input", validateForm);
inputTelefono.addEventListener("input", validateForm);
inputDireccion.addEventListener("input", validateForm);
consentCheck.addEventListener("change", validateForm);
/* Los muñecos se validan también al marcar/desmarcar (desde el change del dropdown) */
checkSelectDropdown.addEventListener("change", function () {
  /* (el hiddenMunecos ya se actualiza en el listener anterior) */
  setTimeout(validateForm, 0); /* ejecutar después de que el otro listener actualice hiddenMunecos */
});

/* Abrir modal — delegación porque el enlace se re-crea al cambiar idioma */
document.addEventListener("click", function (e) {
  var link = e.target.closest("#openPolicyModal, .policy-link");
  if (link) {
    e.preventDefault();
    policyModalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});

/* Cerrar modal con botón X */
closePolicyModal.addEventListener("click", function () {
  policyModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
});

/* Cerrar modal con botón "Entendido" */
acceptPolicyBtn.addEventListener("click", function () {
  policyModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
});

/* Cerrar modal al hacer clic fuera */
policyModalOverlay.addEventListener("click", function (e) {
  if (e.target === policyModalOverlay) {
    policyModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

/* Cerrar modal con Escape */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && policyModalOverlay.classList.contains("active")) {
    policyModalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

/* ═══════════ ENVÍO DEL FORMULARIO ═══════════ */
orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  /* Validar consentimiento */
  if (!consentCheck.checked) {
    alert("Debes aceptar la política de cancelación para enviar el pedido.");
    return;
  }

  var form = e.target;
  var data = new FormData(form);
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  }).then(function (res) {
    if (res.ok) {
      form.reset();
      /* Resetear checkboxes de muñecos */
      checkSelectDropdown.querySelectorAll("input:checked").forEach(function (cb) { cb.checked = false; });
      hiddenMunecos.value = "";
      checkSelectToggle.firstChild.textContent = "— Selecciona uno o varios muñecos — ";
      checkSelect.classList.remove("open");
      /* Resetear consentimiento */
      consentCheck.checked = false;

      submitBtn.textContent = "¡Pedido enviado! ✅";
      setTimeout(function () {
        submitBtn.textContent = "Enviar pedido ✉️";
        validateForm(); /* Re-evaluar: tras reset todo está vacío → deshabilitado */
      }, 3000);
    } else {
      submitBtn.textContent = "Error al enviar ❌";
      submitBtn.disabled = false;
    }
  }).catch(function () {
    submitBtn.textContent = "Error de red ❌";
    submitBtn.disabled = false;
  });
});

/* ═══════════════════════════════════════════
   THREE.JS — Fondo decorativo animado
   Ovillos, agujas, corazones, hilos, partículas
   ═══════════════════════════════════════════ */

function initThreeBackground() {
  if (typeof THREE === "undefined") {
    console.warn("Three.js no se ha cargado. El fondo animado no estará disponible.");
    return;
  }

  var canvas   = document.getElementById("bg-canvas");
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);

  var scene  = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 14);

  /* — Luces (tonos cálidos profesionales) — */
  scene.add(new THREE.AmbientLight(0xf5f0e8, 0.7));
  var dir = new THREE.DirectionalLight(0xffecd2, 1.0);
  dir.position.set(4, 5, 6);
  scene.add(dir);
  var pk = new THREE.PointLight(0xb08d57, 0.9, 25);
  pk.position.set(-3, 2, 5);
  scene.add(pk);
  var lv = new THREE.PointLight(0x8a7e6e, 0.6, 20);
  lv.position.set(3, -1, 4);
  scene.add(lv);

  /* Paleta profesional: dorados, bronce, tierra, slate, crema */
  var yC = [0xb08d57, 0xc9a96e, 0x8a7e6e, 0xa39280, 0xd5c4a1, 0x6b6560, 0xc4bdb4, 0x3a3632];

  /* — Ovillos de lana (distribuidos en laterales) — */
  var balls = [];
  for (var i = 0; i < 14; i++) {
    var r   = 0.35 + Math.random() * 0.45;
    var col = yC[i % 8];
    var m   = new THREE.Mesh(
      new THREE.SphereGeometry(r, 32, 32),
      new THREE.MeshStandardMaterial({ color: col, roughness: 0.85 })
    );
    /* Lateral: mitad izquierda, mitad derecha, evitando el centro */
    var side = (i % 2 === 0) ? -1 : 1;
    var xPos = side * (5.5 + Math.random() * 3.5);
    var yPos = (Math.random() - 0.5) * 8;
    var zPos = -1 + Math.random() * 2;
    m.position.set(xPos, yPos, zPos);
    var ng = 2 + Math.floor(Math.random() * 3);
    for (var g = 0; g < ng; g++) {
      var t = new THREE.Mesh(
        new THREE.TorusGeometry(r * .92, r * .08, 8, 32),
        new THREE.MeshStandardMaterial({ color: new THREE.Color(col).multiplyScalar(.85), roughness: .9 })
      );
      t.rotation.x = (Math.PI / ng) * g + Math.random() * .3;
      t.rotation.z = Math.random() * Math.PI;
      m.add(t);
    }
    balls.push({ m: m, by: m.position.y, sp: .3 + Math.random() * .5, am: .2 + Math.random() * .35, rt: (Math.random() - .5) * .4 });
    scene.add(m);
  }

  /* — Agujas de crochet (en los laterales) — */
  var needles = [];
  var nC = [0x8b7355, 0x6b5b4a, 0xa08c72];
  for (var i = 0; i < 6; i++) {
    var grp = new THREE.Group();
    var bM  = new THREE.MeshStandardMaterial({ color: nC[i % 3], roughness: .4, metalness: .15 });
    grp.add(new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, 3.5, 8), bM));
    var hk = new THREE.Mesh(new THREE.TorusGeometry(.09, .035, 8, 12, Math.PI), bM);
    hk.position.y = 1.75;
    hk.rotation.z = Math.PI / 2;
    grp.add(hk);
    var gr = new THREE.Mesh(
      new THREE.CylinderGeometry(.07, .055, .65, 8),
      new THREE.MeshStandardMaterial({ color: yC[i * 2 % 8], roughness: .7 })
    );
    gr.position.y = -1.4;
    grp.add(gr);
    /* Lateral: alternar izquierda/derecha */
    var side = (i % 2 === 0) ? -1 : 1;
    var xPos = side * (6 + Math.random() * 3);
    var yPos = (Math.random() - 0.5) * 7;
    grp.position.set(xPos, yPos, 0 + Math.random() * 1);
    grp.rotation.z = side * (0.3 + Math.random() * 0.6);
    needles.push({ g: grp, by: grp.position.y, sp: .2 + Math.random() * .3, am: .25 + Math.random() * .2, rt: (Math.random() - .5) * .15 });
    scene.add(grp);
  }

  /* — Corazones (en laterales) — */
  var hearts = [];
  var s  = .1;
  var hS = new THREE.Shape();
  hS.moveTo(0, s * 2);
  hS.bezierCurveTo(0, s * 3, -s * 3, s * 3, -s * 3, s * 1.5);
  hS.bezierCurveTo(-s * 3, 0, 0, -s, 0, -s * 2.5);
  hS.bezierCurveTo(0, -s, s * 3, 0, s * 3, s * 1.5);
  hS.bezierCurveTo(s * 3, s * 3, 0, s * 3, 0, s * 2);
  var hG = new THREE.ExtrudeGeometry(hS, { depth: .06, bevelEnabled: true, bevelThickness: .03, bevelSize: .03 });
  for (var i = 0; i < 10; i++) {
    var hm = new THREE.Mesh(hG, new THREE.MeshStandardMaterial({
      color: Math.random() > .5 ? 0xb08d57 : 0xc9a96e,
      roughness: .6,
      transparent: true,
      opacity: .45 + Math.random() * .35
    }));
    var side = (i % 2 === 0) ? -1 : 1;
    var xPos = side * (5 + Math.random() * 4.5);
    hm.position.set(xPos, (Math.random() - .5) * 9, -1 - Math.random() * 2);
    hm.scale.setScalar(.7 + Math.random() * 1.0);
    hearts.push({ m: hm, by: hm.position.y, sp: .15 + Math.random() * .25, am: .15 + Math.random() * .25, rt: (Math.random() - .5) * .3 });
    scene.add(hm);
  }

  /* — Partículas — */
  var pN  = 60;
  var pP  = new Float32Array(pN * 3);
  var pCl = new Float32Array(pN * 3);
  for (var i = 0; i < pN; i++) {
    pP[i * 3]     = (Math.random() - .5) * 18;
    pP[i * 3 + 1] = (Math.random() - .5) * 10;
    pP[i * 3 + 2] = (Math.random() - .5) * 6 - 1;
    var c = new THREE.Color(yC[Math.floor(Math.random() * 8)]);
    pCl[i * 3]     = c.r;
    pCl[i * 3 + 1] = c.g;
    pCl[i * 3 + 2] = c.b;
  }
  var pGe = new THREE.BufferGeometry();
  pGe.setAttribute("position", new THREE.BufferAttribute(pP, 3));
  pGe.setAttribute("color", new THREE.BufferAttribute(pCl, 3));
  var pts = new THREE.Points(pGe, new THREE.PointsMaterial({
    size: .08, vertexColors: true, transparent: true, opacity: .6, sizeAttenuation: true
  }));
  scene.add(pts);

  /* — Hilos curvados (en laterales) — */
  for (var i = 0; i < 8; i++) {
    var cp = [];
    var side = (i % 2 === 0) ? -1 : 1;
    var sx = side * (5 + Math.random() * 4);
    var sy = (Math.random() - .5) * 8;
    for (var j = 0; j < 6; j++) {
      cp.push(new THREE.Vector3(
        sx + (Math.random() - .5) * 1.5,
        sy + j * .7 + (Math.random() - .5) * .4,
        -1 - Math.random()
      ));
    }
    scene.add(new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cp), 32, .025, 6, false),
      new THREE.MeshStandardMaterial({ color: yC[i % 8], roughness: .8, transparent: true, opacity: .4 })
    ));
  }

  /* — Paralaje con ratón — */
  var mouse = { x: 0, y: 0 };
  window.addEventListener("mousemove", function (e) {
    mouse.x = (e.clientX / innerWidth - .5) * 2;
    mouse.y = (e.clientY / innerHeight - .5) * 2;
  });

  /* — Resize — */
  function resize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
  }
  window.addEventListener("resize", resize);
  resize();

  /* — Loop de animación — */
  function animate(time) {
    var t = time * .001;

    balls.forEach(function (b) {
      b.m.position.y = b.by + Math.sin(t * b.sp) * b.am;
      b.m.rotation.y += b.rt * .01;
      b.m.rotation.x += b.rt * .005;
    });

    needles.forEach(function (n) {
      n.g.position.y = n.by + Math.sin(t * n.sp + 1) * n.am;
      n.g.rotation.z += n.rt * .003;
    });

    hearts.forEach(function (h) {
      h.m.position.y = h.by + Math.sin(t * h.sp + 2) * h.am;
      h.m.rotation.z += h.rt * .008;
    });

    var pa = pts.geometry.attributes.position.array;
    for (var i = 0; i < pN; i++) {
      pa[i * 3 + 1] += .002;
      if (pa[i * 3 + 1] > 6) pa[i * 3 + 1] = -6;
    }
    pts.geometry.attributes.position.needsUpdate = true;

    camera.position.x += (mouse.x * .5 - camera.position.x) * .02;
    camera.position.y += (-mouse.y * .3 - camera.position.y) * .02;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

try {
  initThreeBackground();
} catch (e) {
  console.error("Error al inicializar el fondo Three.js:", e);
}

