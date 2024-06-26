window.onbeforeunload = function() {

return "você tem Certeza que deseja sair?"
};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada!');
});