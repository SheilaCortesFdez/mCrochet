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
    name: "Hollow Knight",
    category: "Fantasía",
    price: 20.00,
    stock: 1,
    image: "img/elCaballeroHornet.jpeg",
    description: { es: "Amigurumis de crochet hechos a mano inspirados en The Knight y Hornet de Hollow Knight. Cuidadosamente elaborados con materiales de calidad y gran atención al detalle, son ideales para coleccionistas, fans del videojuego, decoración o como un regalo único.", en: "Handmade crochet amigurumi inspired by The Knight and Hornet from Hollow Knight. Carefully crafted with quality materials and great attention to detail, they're perfect for collectors, fans of the game, home décor, or as a unique gift.." }
  },
  {
    id: 2,
    name: "Grinch",
    category: "Fantasía",
    price: 10.00,
    stock: 1,
    image: "img/grinch.jpeg",
    description: { es: "Amigurumi navideño popular, tejido generalmente en verde con punto bajo, caracterizado por una expresión gruñona, ojos amarillos de seguridad, cejas bordadas y a menudo con traje rojo de fieltro o lana.", en: "Popular Christmas amigurumi, usually knitted in green with single crochet, characterized by a grumpy expression, yellow safety eyes, embroidered eyebrows and often with a red felt or wool suit." }
  },
  {
    id: 3,
    name: "Novia Cadaver",
    category: "Fantasía",
    price: 25.00,
    stock: 1,
    image: "img/noviaCadaver.jpeg",
    description: { es: "Amigurumi gótico-tierno, generalmente tejido con hilo de algodón en tonos azul pálido, blanco y gris. Caracterizada por un vestido de novia andrajoso, cabello largo azul, detalles bordados (ojos, cicatrices) y a menudo un velo de novia, se trabaja con técnicas básicas y puntos altos.", en: "A cute gothic amigurumi, usually crocheted with cotton yarn in pale blue, white, and gray tones. Characterized by a tattered wedding dress, long blue hair, embroidered details (eyes, scars), and often a bridal veil, it is made using basic techniques and double crochet stitches." }
  },
  {
    id: 4,
    name: "Simba",
    category: "Animal",
    price: 30.00,
    stock: 1,
    image: "img/simba.jpeg",
    description: { es: "Peluche tejido a mano, generalmente con hilo de algodón color marrón-dorado y crema", en: "Hand-knitted plush toy, usually made with brown-gold and cream colored cotton yarn" }
  },
  {
    id: 5,
    name: "Sony",
    category: "Fantasía",
    price: 30.00,
    stock: 1,
    image: "img/sony.jpeg",
    description: { es: "Muñeco tejido a mano, generalmente diseñado con la técnica japonesa de amigurumi (tejido en espiral con puntos bajos), que representa al famoso erizo azul de los videojuegos.", en: "A hand-knitted doll, usually designed using the Japanese amigurumi technique (knitting in a spiral with single crochet stitches), representing the famous blue hedgehog from video games." }
  },
  {
    id: 6,
    name: "Tarta de Fresa",
    category: "Muñeca",
    price: 20.00,
    stock: 1,
    image: "img/tartaFresa.jpeg",
    description: { es: "Un dulce amigurumi con forma de tarta de fresa, tejido a mano con mucho cariño. Su diseño tierno y colorido lo convierte en un detalle perfecto para decorar cualquier rincón, regalar o añadir a una colección de amigurumis. Cada pieza está hecha artesanalmente, por lo que puede tener pequeños detalles que la hacen única.", en: "A sweet strawberry cake-shaped amigurumi, lovingly handmade. Its cute, colorful design makes it a perfect decorative accent, a lovely gift, or a great addition to an amigurumi collection. Each piece is handcrafted, so it may feature small details that make it unique." }
  },
     {
       id: 7,
       name: "Bebé Triceratops",
       category: "Animal",
       price: 15.00,
       stock: 1,
       image: "img/pinkDino.jpeg",
       description: { es: "Bebé Triceratops de color rosa.", en: "Pink Baby Triceratops." }
     },
      {
        id: 8,
        name: "Dulce Primavera",
        category: "Muñeca",
        price: 25.00,
        stock: 1,
        image: "img/muñecaAzul.jpeg",
        description: { es: "Muñeca amigurumi tejida a mano con crochet, de cabello rosa y un delicado conjunto en tonos pastel con sombrero y un pequeño bolsito de rana. Cada detalle está elaborado con cuidado, convirtiéndola en una pieza única, perfecta para decorar, coleccionar o regalar.", en: "Handmade crochet amigurumi doll with pink hair, wearing a charming pastel outfit, matching hat, and a cute little frog purse. Carefully crafted with attention to every detail, this one-of-a-kind doll is perfect for display, collecting, or as a thoughtful gift." }
      },
     {
       id: 9,
       name: "Ratoncita Hada Blanca",
       category: "Animal",
       price: 25.00,
       stock: 1,
       image: "img/sleepRat.jpeg",
       description: { es: "Una encantadora ratoncita tejida a crochet con un delicado vestido blanco, gorrito puntiagudo con pompón y un simpático flequillo amarillo. Sus grandes orejas, mejillas sonrosadas y pequeña lengüita le dan una expresión dulce y divertida. Hecha a mano con la técnica amigurumi, es perfecta para decorar, regalar o formar parte de una colección de personajes tejidos.", en: "A charming crochet mouse featuring a delicate white dress, a pointed hat with a fluffy pom-pom, and cheerful yellow bangs. Her oversized ears, rosy cheeks, and tiny tongue create an adorable and playful expression. Handmade using the amigurumi technique, this cute doll is perfect for decoration, gifting, or adding to any crochet character collection." }
     }
];

