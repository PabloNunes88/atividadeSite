let usuarios= [] 
let senhas= []


function cadastrar(){
    let usuarioDigitado = document.getElementById("nomeCadastro").value;
    let senhaDigitada = document.getElementById("senhaCadastro").value;
    if(usuarioDigitado==="" || senhaDigitada===""){
        alert("Digite o usuário e a senha corretamente!")
    }else{
        usuarios.push(usuarioDigitado);
        senhas.push(senhaDigitada);
        alert("Usuário  Cadastrado! ")

    }


}
function entrar(){
    let usuarioDigitado = document.getElementById("nomeLogin").value;
    let senhaDigitada = document.getElementById("senhaLogin").value;
    if(usuarios.includes(usuarioDigitado)){
        if(senhas[usuarios.indexOf(usuarioDigitado)]===senhaDigitada){
            window.location.href="logado.html"
        }else{
            alert('senha incorreta!')
        }

    }else{
        alert("nome incorreto!")
    }






}