let n1 = 0;
let n2 = 0;
let op = '';
let tt = 0;
let error = "NaN";

$(document).ready(function(){
    $("input").on('click', function(){
        let btn = $(this).attr('value');
        cleanAll();
        if (btn >= 0 || btn <= 9) {
            handleNumber(btn);
        } else {
            if (n1 === 0) {
                displayn(error);
            } else {
                handleEspecial(btn);
            }
        }
    });
});

function handleNumber(n) {
    if (n1 === 0) {
        n1 = n;
    } else if (!(op === '')) {
        n2 = n;
    } else {
        displayn(error);
    }
}

function handleEspecial(opr) {
    switch (opr) {
        case '+':
            soma();
            break;
        case '-':
            subtracao();
            break;
        case '/':
            divisao();
            break;
        case '*':
            multiplicacao();
            break;
        case ',':
            virgula();
            break;
        case '=':
            igual();
            break;
        case 'C':
            reset();
            break;
        default:
            displayn(error);
            return;
    }
    op = opr;
}

function soma() {
    tt = n1 + n2;
}

function subtracao() {
    tt = n1 - n2;
}

function divisao() {
    tt = n1 / n2;
}

function multiplicacao() {
    tt = n1 * n2;
}

function igual() {
    displayn(tt);
    n1 = tt;
}

function displayn(text) {
    cleanAll();
    $('#inputTexto').attr('value', text);
}

function cleanAll() {
    $('#inputTexto').attr('value', '');
    n2 = 0;
}

