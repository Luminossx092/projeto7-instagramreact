import Post from "./Post"

export default function Posts() {
    return (
        <div class="posts">
            <Post image="assets/img/meowed.svg" nome="meowed" conteudo="assets/img/gato-telefone.svg" imgComentario="assets/img/respondeai.svg" curtador="respondeai" curtidas="outras 101.523 pessoas" />
            <Post image="assets/img/barked.svg" nome="barked" conteudo="assets/img/dog.svg" imgComentario="assets/img/adorable_animals.svg" curtador="adorable_animals" curtidas="outras 99.159 pessoas" />
        </div>
    )
}