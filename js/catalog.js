/* ═══════════════════════════════════════════
   mCrochet — catalog.js
   Catálogo de productos.
   Para añadir un producto nuevo:
   1. Pon la imagen en la carpeta img/
   2. Añade una entrada aquí abajo
   ═══════════════════════════════════════════ */
var catalogData = [
  {
    id: 1,
    name: "Demogorgon",
    category: "Fantasía",
    price: 29.90,
    stock: 6,
    image: "img/demogorgon.jpeg",
    description: { es: "Amigurumi detallado y aterrador, inspirado en Stranger Things, caracterizado por su cuerpo humanoide, alto y delgado, generalmente tejido en colores oscuros (negro/gris/marrón) y una cabeza distintiva en forma de flor roja de cinco pétalos.", en: "A detailed and terrifying amigurumi, inspired by Stranger Things, characterized by its tall and thin humanoid body, usually knitted in dark colors (black/grey/brown) and a distinctive head in the shape of a five-petaled red flower." }
  },
  {
    id: 2,
    name: "Grinch",
    category: "Animales",
    price: 31.50,
    stock: 4,
    image: "img/grinch.jpeg",
    description: { es: "Amigurumi navideño popular, tejido generalmente en verde con punto bajo, caracterizado por una expresión gruñona, ojos amarillos de seguridad, cejas bordadas y a menudo con traje rojo de fieltro o lana.", en: "Popular Christmas amigurumi, usually knitted in green with single crochet, characterized by a grumpy expression, yellow safety eyes, embroidered eyebrows and often with a red felt or wool suit." }
  },
  {
    id: 3,
    name: "Novia Cadaver",
    category: "Fantasía",
    price: 34.00,
    stock: 3,
    image: "img/noviaCadaver.jpeg",
    description: { es: "Amigurumi gótico-tierno, generalmente tejido con hilo de algodón en tonos azul pálido, blanco y gris. Caracterizada por un vestido de novia andrajoso, cabello largo azul, detalles bordados (ojos, cicatrices) y a menudo un velo de novia, se trabaja con técnicas básicas y puntos altos.", en: "A cute gothic amigurumi, usually crocheted with cotton yarn in pale blue, white, and gray tones. Characterized by a tattered wedding dress, long blue hair, embroidered details (eyes, scars), and often a bridal veil, it is made using basic techniques and double crochet stitches." }
  },
  {
    id: 4,
    name: "Simba",
    category: "Animal",
    price: 27.50,
    stock: 8,
    image: "img/simba.jpeg",
    description: { es: "Peluche tejido a mano, generalmente con hilo de algodón color marrón-dorado y crema, caracterizado por su melena de hojas (inspirada en la canción 'Yo quisiera ya ser el rey') y detalles bordados.", en: "Hand-knitted plush toy, usually made with brown-gold and cream colored cotton yarn, characterized by its mane of leaves (inspired by the song 'I wish I were king') and embroidered details" }
  },
  {
    id: 5,
    name: "Sony",
    category: "Fantasia",
    price: 38.90,
    stock: 2,
    image: "img/sony.jpeg",
    description: { es: "Muñeco tejido a mano, generalmente diseñado con la técnica japonesa de amigurumi (tejido en espiral con puntos bajos), que representa al famoso erizo azul de los videojuegos.", en: "A hand-knitted doll, usually designed using the Japanese amigurumi technique (knitting in a spiral with single crochet stitches), representing the famous blue hedgehog from video games." }
  },
  {
    id: 6,
    name: "Tarta de Fresa",
    category: "Fantasia",
    price: 22.00,
    stock: 10,
    image: "img/tartaFresa.jpeg",
    description: { es: "Se caracteriza por su cabello fucsia, vestido rojo, delantal blanco y sombrero con fresas, midiendo usualmente entre 20 cm y 36 cm, ideal para nivel intermedio.", en: "She is characterized by her fuchsia hair, red dress, white apron and hat with strawberries, usually measuring between 20 cm and 36 cm, ideal for intermediate level." }
  }
];

