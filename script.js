function enviarWhatsApp() {
    // COLOQUE SEU NÚMERO ABAIXO (DDI + DDD + NÚMERO) Ex: 5511999999999
    const meuNumero = "55XXXXXXXXXXX";

    const nome = document.getElementById('nome').value;
    const escritorio = document.getElementById('escritorio').value;
    const mensagem = document.getElementById('mensagem').value;

    const texto = `Olá Saulo, meu nome é ${nome} do escritório ${escritorio}. Gostaria de saber mais sobre a SACC Technologies. ${mensagem}`;
    const linkZap = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${encodeURIComponent(texto)}`;

    if (nome && escritorio) {
        window.open(linkZap, '_blank');
    } else {
        alert("Por favor, preencha seu nome e o nome do escritório.");
    }
}