document.getElementById("pedidoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const pedido = document.getElementById("pedido").value;
  const mensagem = encodeURIComponent(`Olá! Meu nome é ${nome} e gostaria de pedir: ${pedido}`);
  const numero = "5511999999999"; // substitua pelo número da Cofftopia
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
});
