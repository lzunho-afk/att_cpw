let btn = "";

$(document).ready(function () {
    $("input").click(function () {
        btn = $(this).attr("value");
        buttonHandler();
    });
});

function buttonHandler() {
    if (btn == "C") {
        document.getElementById("inputTexto").value = "";
    } else if (btn == "=") {
        makeOperations();
    } else if ((btn >= 0 && btn <= 9) || opsVerify(btn)) {
        concatBtn();
    }
}

function opsVerify(op) {
    switch (op) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "^":
            return 1;
    }
    return 0;
}

function concatBtn() {
    var text = document.getElementById("inputTexto").value;
    text = text + btn;
    document.getElementById("inputTexto").value = text;
}

function makeOperations() {
    var text = document.getElementById("inputTexto").value;
    var op = "";
    var calc = null;

    if (text.indexOf("^") > -1) {
        op = "^";
        p1 = text.substring(0, text.indexOf(op));
        p2 = text.substring(text.indexOf(op)+1, text.length);

        if (text[0] == op || text[(text.length)-1] == op) {
            document.getElementById("inputTexto").value = "Operação inválida!";
            return;
        }
        calc = parseInt(p1) ** parseInt(p2);
        document.getElementById("inputTexto").value = calc;
        document.getElementById("history").value += "\n" + p1 + op + p2 + "=" + calc;
    } else if (text.indexOf("/") > -1) {
        op = "/";
        p1 = text.substring(0, text.indexOf(op));
        p2 = text.substring(text.indexOf(op)+1, text.length);

        if (text[0] == op || text[(text.length)-1] == op) {
            document.getElementById("inputTexto").value = "Operação inválida!";
            return;
        }
        calc = parseInt(p1) / parseInt(p2);
        document.getElementById("inputTexto").value = calc;
        document.getElementById("history").value += "\n" + p1 + op + p2 + "=" + calc;
    } else if (text.indexOf("*") > -1) {
        op = "*";
        p1 = text.substring(0, text.indexOf(op));
        p2 = text.substring(text.indexOf(op)+1, text.length);

        if (text[0] == op || text[(text.length)-1] == op) {
            document.getElementById("inputTexto").value = "Operação inválida!";
            return;
        }
        calc = parseInt(p1) * parseInt(p2);
        document.getElementById("inputTexto").value = calc;
        document.getElementById("history").value += "\n" + p1 + op + p2 + "=" + calc;
    } else if (text.indexOf("+") > -1) {
        op = "+";
        p1 = text.substring(0, text.indexOf(op));
        p2 = text.substring(text.indexOf(op)+1, text.length);

        if (text[0] == op || text[(text.length)-1] == op) {
            document.getElementById("inputTexto").value = "Operação inválida!";
            return;
        }
        calc = parseInt(p1) + parseInt(p2);
        document.getElementById("inputTexto").value = calc;
        document.getElementById("history").value += "\n" + p1 + op + p2 + "=" + calc;
    } else if (text.indexOf("-") > -1) {
        op = "-";
        p1 = text.substring(0, text.indexOf(op));
        p2 = text.substring(text.indexOf(op)+1, text.length);

        if (text[0] == op || text[(text.length)-1] == op) {
            document.getElementById("inputTexto").value = "Operação inválida!";
            return;
        }
        calc = parseInt(p1) - parseInt(p2);
        document.getElementById("inputTexto").value = calc;
        document.getElementById("history").value += "\n" + p1 + op + p2 + "=" + calc;
    } 
}

