import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar() {
    const usuario = {
        img: "assets/img/catanacomics.svg" ,
        texto: "catanacomics",
        nome: "Catana"
    }
    return (
        <div class="sidebar">
            <Usuario key={usuario.nome} img={usuario.img} texto={usuario.texto} nome={usuario.nome}/>
            <Sugestoes/>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}