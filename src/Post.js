import { useState } from "react";


export default function Post({ usuario, imgUsuario, imgPost, curtidas }) {
    const [favoritado, setFavoritado] = useState(false);
    const [salvo, setSalvo] = useState(false);
    const [curtidasCount, setCurtidasCount] = useState(curtidas);

    const toggleFavorito = () => {
        if (favoritado) {
            setFavoritado(false);
            setCurtidasCount(curtidasCount - 1);
        } else {
            setFavoritado(true);
            setCurtidasCount(curtidasCount + 1);
        }
    };

    const toggleBookmark = () => {
        setSalvo(!salvo);
    };

    const handleDoubleClick = () => {
        if (!favoritado) {
            setFavoritado(true);
            setCurtidasCount(curtidasCount + 1);
        }
    };

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={imgUsuario} alt={usuario} className="imgOff" />
                    {usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img
                    src={imgPost}
                    alt={`Post de ${usuario}`}
                    onDoubleClick={handleDoubleClick}
                />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            name={favoritado ? "heart" : "heart-outline"}
                            className={favoritado ? "favorito amarelo" : "favorito"}
                            onClick={toggleFavorito}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon
                            name={salvo ? "bookmark" : "bookmark-outline"}
                            className={salvo ? "favorito amarelo" : "favorito"}
                            onClick={toggleBookmark}
                        ></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <div className="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras {curtidasCount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}