function enviarWhatsApp() {
  const meuNumero = "5512996306019";

  const nome = document.getElementById("nome").value;
  const empresa = document.getElementById("empresa").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !empresa) {
    alert("Por favor, preencha seus dados.");
    return;
  }

  const texto = `Olá Saulo, meu nome é ${nome} da empresa ${empresa}. Gostaria de saber mais sobre a SACC Technologies. ${mensagem}`;

  const linkZap = `https://wa.me/${meuNumero}?text=${encodeURIComponent(texto)}`;
  window.open(linkZap, "_blank");
}
