$(document).ready(function() {
    $("#form").validate({
        debug: false,
        rule: {
            name: {
                required: true,
                digits: true,
                minlength: 3,
                maxlength: 32
            },
            cpf: {
                required: true,
                number: true,
                minlength: 11,
                maxlength: 11
            },
            email: {
                required: true,
                email: true
            },
            cel: {
                required: true,
                phone: true
            },
            tel: {
                required: false,
                phone: true
            },
            msg: {
                required: true,
                minlenght: 3,
                maxlenght: 100
            }
        },
        messages: {
            name: {
                required: "Por favor, informe seu nome",
                digits: "O nome deve apresentar apenas caracteres",
                minlength: "O tamanho do nome é muito pequeno!",
                maxlength: "O tamanho do nome é muito grande!"
            },
            cpf: {
                required: "Por favor, informe seu CPF",
                number: "O CPF deve ser composto apenas por números",
                minlength: "Tamanho de CPF incorreto!",
                maxlength: "Tamanho de CPF incorreto!"
            },
            email: {
                required: "Por favor, informe seu email",
                email: "Email inválido, escreva novamente!"
            },
            cel: {
                required: "Por favor, informe seu telefone celular",
                phone: "Telefone celular inválido!"
            },
            tel: {
                phone: "Telefone residencial inválido!"
            },
            msg: {
                required: "Digite uma mensagem, por favor",
                minlenght: "Mensagem muito pequena!",
                maxlenght: "Mensagem muito grande (máximo 100 caracteres)0"
            }
        }
    });
});

// JQuery Cellphone Validation Method
jQuery.validator.addMethod('phone', function(val, elem) {
    var zeros = '0'*10;
    var dset = [
        [   "00", "01", "02", "03", ,
            "04", , "05", , "06", ,
            "07", , "08", "09", "10"
        ],
        [
            "6", "7",
            "8", "9"
        ]
    ];
    val = val.replace("(", "");
    val = val.replace(")", "");
    val = val.replace("-", "");
    val = val.replace(" ", "").trim();

    if (val == zeros) {
        return (this.optional(elem) || false);
    } else if (val == zeros + '0') {
        return (this.optional(elem) || false);
    }

    if (dset[0].indexOf(val.substring(0, 2)) != -1) {
        return (this.optional(elem) || false);
    }
    if (val.length < 9 || val.length > 16) {
        return (this.optional(elem) || false);
    }
    if (dset[1].indexOf(val.substring(2, 3)) == -1) {
        return (this.optional(elem) || false);
    }
    return (this.optional(elem) || true);
}, 'Informe um número de telefone válido!');
