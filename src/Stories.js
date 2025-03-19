export default function Stories() {
    const stories = [
        { img: "image/stories/com-fundo/01-9gag.png", usuario: "9gag" },
        { img: "image/stories/com-fundo/02-meowed.png", usuario: "meowed" },
        { img: "image/stories/com-fundo/03-barked.png", usuario: "barked" },
        { img: "image/stories/com-fundo/04-nathan.png", usuario: "nathanwpylestrangeplanet" },
        { img: "image/stories/com-fundo/05-wawawiwa.png", usuario: "wawawicomics" },
        { img: "image/stories/com-fundo/06-responde-ai.png", usuario: "respondeai" },
        { img: "image/stories/com-fundo/07-filosofia-moderna.png", usuario: "filomoderna" },
        { img: "image/stories/com-fundo/08-driven.png", usuario: "memeriagourmet" }
    ];

    return (
        <div className="stories">
            {stories.map((story, index) => (
                <div key={index} className="story">
                    <div className="imagem">
                        <img src={story.img} alt={story.usuario} />
                    </div>
                    <div className="usuario">{story.usuario}</div>
                </div>
            ))}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}