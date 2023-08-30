$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(__) _____-____' });
    $('#cpf').mask('000.000.000-00', { placeholder: '___.___.___-__' });
    $('#cep').mask('00.000-000', { placeholder: '__.___-___' });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },

        messages: {
            nome: "Informe o seu nome",
            email: "Informe em endereço de e-mail válido",
            telefone: "Informe o número do seu telefone celular",
            cpf: "Informe o número do seu CPF",
            endereco: "Informe o seu endereço completo",
            cep: "Informe o número do seu CEP"
        },

        submitHandler: function (form) {

        },

        invalidHandler: function (evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();

            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos inválidos.`)
            } else {
                alert('O cadastro não será realizado, mas, pelo menos, os campos estão corretos.')
            }
        }
    })
});
