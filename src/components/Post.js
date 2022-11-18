export default function Post(p) {
    return (
        <div class="post">
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
                <img src={p.conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={p.imgComentario} />
                    <div class="texto">
                        Curtido por <strong>{p.curtador}</strong> e <strong>{p.curtidas}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}