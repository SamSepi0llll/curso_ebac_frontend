$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            name: '<h3 class="error">Por favor Insira seu Nome Completo.',
            email: '<h3 class="error">Por favor Insira seu E-mail.',
            tel: '<h3 class="error">Por favor Insira seu Telefone.',
            cpf: '<h3 class="error">Por favor Insira seu CPF.',
            endereço: '<h3 class="error">Por favor Insira seu Endereço.',
            cep: '<h3 class="error">Por favor Insira seu CEP.'
        },
        submitHandler: function(){
            $('.sucess').fadeIn(500)
            $('#name').val('')
            $('#email').val('')
            $('#tel').val('')
            $('#cpf').val('')
            $('#endereço').val('')
            $('#cep').val('')
        },
        invalidHandler: function(){
            $('.sucess').fadeOut()
        }
    })
})