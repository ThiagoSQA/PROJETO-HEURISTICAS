window.onbeforeunload = function() {

return "vocçê tem Certeza que deseja sair?"
};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada!');
});