$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const atividade = $('#atividade').val()
        const list  =  $('.list')
        const novaAtividade = $(`<li>${atividade}</li>`)
        $(novaAtividade).appendTo(list)
        $(novaAtividade).fadeIn(500)
        $('#atividade').val('')
        
        $('li').click(function(){
            $(this).addClass('concluido')
            $(this).fadeOut(1000)
        })
    })
})