let login = document.getElementById('login');
let buscar = document.getElementById('buscar');
let nome = document.getElementById('nome');
let bio = document.getElementById('bio');
let seguidores = document.getElementById('seguidores');
let seguindo = document.getElementById('seguindo');
let repositorios = document.getElementById('repositorios');
let foto = document.getElementById('foto');


/* função assincrona para buscar os dados no github */
async function GetDados(){
    const response = await fetch(`https://api.github.com/users/${login.value}`)
    const perfil = response.json()
    return perfil
}
/* Peneirao */
buscar.addEventListener('click', (e)=>{
    GetDados().then(perfil =>{
        nome.innerHTML = perfil.name
        foto.src = perfil.avatar_url
        bio.innerHTML = perfil.bio
        seguidores.innerHTML = perfil.followers
        seguindo.innerHTML = perfil.following
        repositorios.innerHTML = perfil.public_repos
    })
})