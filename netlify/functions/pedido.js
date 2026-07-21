exports.handler = async function () {
  const mensaje = encodeURIComponent(
    "Hola, me interesa comprar un muñeco de mCrochet."
  );

  return {
    statusCode: 302,
    headers: {
      Location: `https://wa.me/34604094870?text=${mensaje}`
    }
  };
};