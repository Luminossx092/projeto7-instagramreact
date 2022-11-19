import React from "react"

export default function Usuario(p) {
    const [nome,setNome] = React.useState(p.nome)
    const [imagem, setImagem] = React.useState(p.img)

    return (
        <div class="usuario">
            <img onClick={()=>setImagem(prompt("Insira um novo icone de perfil:"))} src={imagem} />
            <div class="texto">
                <strong>{p.texto}</strong>
                <span onClick={()=>setNome(prompt("Insira um novo nome de usuário:"))}>
                    {nome}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}