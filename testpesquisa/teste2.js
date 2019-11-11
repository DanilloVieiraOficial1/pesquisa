const paises = [
    { name: 'Brasil' },
    { name: 'Armenia' },
    { name: 'Argentina' }

];
const procurarInput = document.querySelector('.procurar');
const sugestaoPainel = document.querySelector('.sugestao');

procurarInput.addEventListener('keyup', function () {
    const input = procurarInput.value;
    sugestaoPainel.innerHTML = '';
    const sugestao = paises.filter(function (pais) {
        return pais.name.toLowerCase().startsWith(input);

    });
    sugestao.forEach(function (pesquisando) {
        const div = document.createElement('div');
        div.innerHTML = pesquisando.name;
        sugestaoPainel.appendChild(div);
    })
})