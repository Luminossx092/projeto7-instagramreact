import React from "react"

export default function Usuario(p) {
    const [nome,setNome] = React.useState(p.nome)
    const [imagem, setImagem] = React.useState(p.img)

    return (
        <div data-test="user" class="usuario">
            <img data-test="profile-image" onClick={()=>setImagem(prompt("Insira um novo icone de perfil:"))} src={imagem} />
            <div class="texto">
                <strong data-test="name">{p.texto}</strong>
                <span>
                    {nome}
                    <ion-icon data-test="edit-name" onClick={()=>setNome(prompt("Insira um novo nome de usuário:"))} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}