export default function Sugestao(p){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={p.img} />
                <div class="texto">
                    <div class="nome">{p.nome}</div>
                    <div class="razao">{p.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}