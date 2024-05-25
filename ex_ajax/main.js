
    const name = document.querySelector('#name')
    const username = document.querySelector('#username')
    const avatar = document.querySelector('#avatar')
    const repository = document.querySelector('#repos')
    const followers = document.querySelector('#followers')
    const following = document.querySelector('#following')
    const linkProfile = document.querySelector('#link')
    const profileBio = document.querySelector('#bio')

    document.addEventListener('DOMContentLoaded', function(){
        fetch('https://api.github.com/users/SamSepi0llll').then(function(res){
            return res.json()
        })
        .then(function(json){
            name.innerText = json.name
            username.innerText = json.login
            avatar.src = json.avatar_url
            followers.innerText = json.followers
            following.innerText = json.following
            linkProfile.href = json.html_url
            repository.innerText = json.public_repos
            profileBio.innerText = json.bio
        })
        .catch(function(erro){
            alert("Ocorreu um erro, tente novamente mais tarde!")
        })
    })
