export default function Usuario(p) {
    return (
        <div class="usuario">
            <img src={p.img} />
            <div class="texto">
                <strong>{p.texto}</strong>
                <span>
                    {p.nome}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}