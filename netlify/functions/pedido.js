exports.handler = async function () {

  const numero = "34604094870";
  const mensaje = encodeURIComponent(
    "Hola, me interesa encargar un muñeco de mCrochet."
  );

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>mCrochet</title>
      </head>
      <body>
        <p>Abriendo WhatsApp...</p>
        <script>
          window.location.href="https://wa.me/${numero}?text=${mensaje}";
        </script>
      </body>
      </html>
    `
  };
};