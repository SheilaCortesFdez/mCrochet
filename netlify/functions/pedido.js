exports.handler = async function (event) {

  var producto = event.queryStringParameters?.producto || "un muñeco";
  var mensaje = encodeURIComponent(
    "Hola, me interesa encargar: " + producto + " de mCrochet."
  );

  return {
    statusCode: 302,
    headers: {
      Location: "https://wa.me/615913679?text=" + mensaje
    }
  };
};