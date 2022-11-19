import React from "react"

export default function Post(p) {
    const [bookmark, setBookmark] = React.useState("bookmark-outline")
    const [like, setLike] = React.useState("heart-outline");
    const [numeroLike, setNumeroLike] = React.useState(p.curtidas)

    function DaLike(PodeDiminuirLike) {
        if (like === "heart-outline") {
            setLike("heart");
            setNumeroLike(numeroLike.slice(0, numeroLike.length - 2) + (Number(numeroLike.slice(numeroLike.length - 2)) + 1))
        }
        else if (PodeDiminuirLike) {
            setLike("heart-outline");
            setNumeroLike(numeroLike.slice(0, numeroLike.length - 2) + (Number(numeroLike.slice(numeroLike.length - 2)) - 1))
        }
    }
    return (
        <div data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={p.image} />
                    {p.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onClick={() => DaLike(false)} src={p.conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" onClick={() => DaLike(true)} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={() => setBookmark("bookmark")} name={bookmark}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={p.imgComentario} />
                    <div class="texto">
                        Curtido por <strong>{p.curtador}</strong> e <strong data-test="likes-number">outras {numeroLike} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}