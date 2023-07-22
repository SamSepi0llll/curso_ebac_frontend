$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            check: {
                required: true
            }
        },
        messages: {
            nome: '<p class="error"> Por favor Insira seu nome.</p>',
            email: '<p class="error">Por favor Insira um E-mail válido.</p>',
            tel: '<p class="error">Por favor Insira seu Telefone.</p>',
            check: '<p class="error">Você precisa aceitar os termos.</p>'
        },
        submitHandler: function(){
            $('.alert-success').fadeIn(500)
            $('#nome').val('')
            $('#email').val('')
            $('#tel').val('')
        }
    })
})