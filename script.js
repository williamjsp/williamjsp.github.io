// Função para selecionar e desmarcar os assentos
function selecionarAssento(tipo, fileira, numero) {
    // Selecione o assento baseado na estrutura das fileiras e números
    const assento = document.querySelector(`#${tipo} .fileira:nth-child(${getFileiraIndex(fileira)}) .assento:nth-child(${numero})`);
    // Alterna a classe 'selecionado' para destacar a cadeira
    assento.classList.toggle('selecionado');
}

// Função para obter o índice da fileira (A = 1, B = 2, etc)
function getFileiraIndex(fileira) {
    const fileiras = ['A', 'B', 'C', 'D', 'E'];  // Supondo que você tenha até a fileira E
    return fileiras.indexOf(fileira) + 1;
}

// Função para confirmar os assentos selecionados
function confirmarSelecao() {
    const mezaninoSelecionados = [];
    const inferiorSelecionados = [];

    // Pega os assentos selecionados do mezanino
    const mezaninoAssentos = document.querySelectorAll('#mezanino .assento');
    mezaninoAssentos.forEach((assento, index) => {
        if (assento.classList.contains('selecionado')) {
            const fileira = assento.closest('.fileira').querySelector('.letra').textContent;
            mezaninoSelecionados.push(`${fileira}${index + 1}`);
        }
    });

    // Pega os assentos selecionados da parte inferior
    const inferiorAssentos = document.querySelectorAll('#inferior .assento');
    inferiorAssentos.forEach((assento, index) => {
        if (assento.classList.contains('selecionado')) {
            const fileira = assento.closest('.fileira').querySelector('.letra').textContent;
            inferiorSelecionados.push(`${fileira}${index + 1}`);
        }
    });

    // Exibe os assentos selecionados
    const mensagem = `
        Mezanino: ${mezaninoSelecionados.length > 0 ? mezaninoSelecionados.join(', ') : 'Nenhum'}
        Parte Inferior: ${inferiorSelecionados.length > 0 ? inferiorSelecionados.join(', ') : 'Nenhum'}
    `;
    alert(mensagem);
}
