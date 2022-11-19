import Story from "./Story"


const stories = [
    { texto: "9gag", image: "assets/img/9gag.svg" },
    { texto: "meowed", image: "assets/img/meowed.svg" },
    { texto: "barked", image: "assets/img/barked.svg" },
    { texto: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg" },
    { texto: "awawicomics", image: "assets/img/wawawicomics.svg" },
    { texto: "respondeai", image: "assets/img/respondeai.svg" },
    { texto: "filomoderna", image: "assets/img/filomoderna.svg" },
    { texto: "memeriagourmet", image: "assets/img/memeriagourmet.svg" }

]
export default function () {
    return (
        <div class="stories">
            {stories.map(s => <Story key={s.texto} texto={s.texto} image={s.image} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}