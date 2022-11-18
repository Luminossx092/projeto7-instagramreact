export default function (p) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={p.image} />
            </div>
            <div class="usuario">
                {p.texto}
            </div>
        </div>
    )
}