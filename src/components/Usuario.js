import React from "react"

export default function Usuario(p) {
    const [nome,setNome] = React.useState(p.nome)
    const [imagem, setImagem] = React.useState(p.img)

    function InsiraUmaImagem(){
        const novoNome = prompt("Insira uma imagem de perfil:");
        if(novoNome){
            setImagem(novoNome)
        }
    }
    function InsiraUmNome(){
        const novoNome = prompt("Insira um novo nome de usuário:");
        if(novoNome){
            setNome(novoNome)
        }
    }
    return (
        <div data-test="user" class="usuario">
            <img data-test="profile-image" onClick={()=>InsiraUmaImagem()} src={imagem} />
            <div class="texto">
                <strong>{p.texto}</strong>
                <span data-test="name">
                    {nome}
                    <ion-icon data-test="edit-name" onClick={()=>InsiraUmNome()} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}