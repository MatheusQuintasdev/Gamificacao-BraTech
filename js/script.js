function validarFormulario(event) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Ops! Todos os campos precisam ser preenchidos antes do envio.");
        event.preventDefault();
        return false;
    }
    alert("Mensagem enviada com sucesso para a BraTech!");
    return true;
}