const form = document.getElementById('form-ex')
const campoA = document.getElementById('campo-A')
const campoB = document.getElementById('campo-B')

function validanumero (numA, numB) {
    const validacao = Number(numB) > Number(numA)
    return validacao
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let formValido = false
    formValido = validanumero(campoA.value, campoB.value)
    if(!formValido){
        document.querySelector('.msg-fail').style.display = 'block'
        document.querySelector('.msg-sucess').style.display = ''
    }else{
        document.querySelector('.msg-sucess').style.display = 'block'
        campoA.value = ''
        campoB.value = ''
        document.querySelector('.msg-fail').style.display = ''
    }
})
