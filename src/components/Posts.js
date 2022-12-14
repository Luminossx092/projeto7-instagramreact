import Post from "./Post"

export default function Posts() {
    const posts = [
        {image:"assets/img/meowed.svg", nome:"meowed", conteudo:"assets/img/gato-telefone.svg", imgComentario:"assets/img/respondeai.svg", curtador:"respondeai", curtidas:"101.523" },
        {image:"assets/img/barked.svg", nome:"barked", conteudo:"assets/img/dog.svg", imgComentario:"assets/img/adorable_animals.svg", curtador:"adorable_animals", curtidas:"99.159" }
    ]
    return (
        <div class="posts">
            {posts.map(p=><Post key={p.nome} image={p.image} nome={p.nome} conteudo={p.conteudo} imgComentario={p.imgComentario} curtador={p.curtador} curtidas={p.curtidas}/>)}
        </div>
    )
}