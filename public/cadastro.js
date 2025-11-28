document.getElementById("userForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const dados = {
        nome_completo: document.getElementById("nome_completo").value,
        cpf: document.getElementById("cpf").value,
        data_nascimento: document.getElementById("data_nascimento").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    try {
        const resposta = await fetch("/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();
        alert(resultado.mensagem || resultado.erro);

        if (resposta.ok) {
            document.getElementById("userForm").reset();
            fecharCadastro();
        }

    } catch (erro) {
        alert("Erro ao conectar com o servidor");
    }
});
