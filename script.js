let i = [];
let resultado = document.getElementById('resultado');
let valor = document.getElementById('valor');
let click = true;
let sinal;

function numero(num) {
    i.push(num);
    resultado.value = i.join('');
    if (click) {
        return valor.textContent = resultado.value;
    }
}

function operador(sin) {
    sinal = sin;
    if(valor.textContent){
        resultado.value = ''
        i = [];
        click = false;
    } else {
        click = false;
        valor.textContent = resultado.value;
        resultado.value = '';
    }
}

function calcular() {
    let valor1 = parseInt(valor.textContent);
    let valor2 = parseInt(resultado.value);
    let result;
    if (valor1 && valor2) {
        if (sinal == '+'){
            result = valor1 + valor2;
        } else if(sinal == '-') {
            result = valor1 - valor2;
        } else if(sinal == '*') {
            result = valor1 * valor2;
        } else if(sinal == '/') {
            result = valor1 / valor2;
        }
    } else {
        alert('error');
    }
    i = []
    click = true;
    resultado.value = result
    valor.textContent = ''
}

function limpar() {
    i = []
    click = true;
    resultado.value = ''
    valor.textContent = ''
}