// Função para selecionar e desmarcar os assentos
function selecionarAssento(tipo, index) {
    const assento = document.querySelector(`#${tipo} .assento:nth-child(${index + 1})`);
    assento.classList.toggle('selecionado');
}

// Função para confirmar a seleção dos assentos
function confirmarSelecao() {
    const mezaninoSelecionados = [];
    const inferiorSelecionados = [];

    // Pega os assentos selecionados do mezanino
    const mezaninoAssentos = document.querySelectorAll('#mezanino .assento');
    mezaninoAssentos.forEach((assento, index) => {
        if (assento.classList.contains('selecionado')) {
            mezaninoSelecionados.push(index + 1);
        }
    });

    // Pega os assentos selecionados da parte inferior
    const inferiorAssentos = document.querySelectorAll('#inferior .assento');
    inferiorAssentos.forEach((assento, index) => {
        if (assento.classList.contains('selecionado')) {
            inferiorSelecionados.push(index + 1);
        }
    });

    // Exibe os assentos selecionados
    const mensagem = `
        Mezanino: ${mezaninoSelecionados.length > 0 ? mezaninoSelecionados.join(', ') : 'Nenhum'}
        Parte Inferior: ${inferiorSelecionados.length > 0 ? inferiorSelecionados.join(', ') : 'Nenhum'}
    `;
    alert(mensagem);
}
