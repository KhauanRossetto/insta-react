import { useState } from "react";

export default function Sidebar() {
    const [descricao, setDescricao] = useState("Catana");
    const [imagemPerfil, setImagemPerfil] = useState("image/sidebar/01.jpeg");

    const alterarDescricao = () => {
        const novaDescricao = prompt("Digite a nova descrição:", descricao);
        if (novaDescricao && novaDescricao !== descricao) {
            setDescricao(novaDescricao);
        }
    };

    const alterarImagemPerfil = () => {
        const novoLinkImagem = prompt("Digite o novo link da imagem de perfil:");
        if (novoLinkImagem && novoLinkImagem !== "") {
            setImagemPerfil(novoLinkImagem);
        }
    };

    return (
        <div className="sidebar">
            <div className="usuario">
                <img
                    src={imagemPerfil}
                    alt="Perfil"
                    onClick={alterarImagemPerfil}
                />
                <div className="texto">
                    <strong className="nome-usuario">catanacomics</strong>
                    <span className="descricao">{descricao}</span>
                </div>
                <ion-icon name="pencil" onClick={alterarDescricao}></ion-icon>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <span>Ver tudo</span>
                </div>

                <div className="sugestao">
                    <div className="usuario">
                        <img src="image/sidebar/02.jpeg" alt="Perfil" />
                        <div className="texto">
                            <strong>bad.vibes.memes</strong>
                            <span>Segue você</span>
                        </div>
                    </div>
                    <button>Seguir</button>
                </div>

                <div className="sugestao">
                    <div className="usuario">
                        <img src="image/sidebar/03.jpeg" alt="Perfil" />
                        <div className="texto">
                            <strong>chibirdart</strong>
                            <span>Segue você</span>
                        </div>
                    </div>
                    <button>Seguir</button>
                </div>

                <div className="sugestao">
                    <div className="usuario">
                        <img src="image/sidebar/04.jpeg" alt="Perfil" />
                        <div className="texto">
                            <strong>razoesparaacreditar</strong>
                            <span>Segue você</span>
                        </div>
                    </div>
                    <button>Seguir</button>
                </div>

                <div className="sugestao">
                    <div className="usuario">
                        <img src="image/sidebar/05.jpeg" alt="Perfil" />
                        <div className="texto">
                            <strong>adorable_animals</strong>
                            <span>Segue você</span>
                        </div>
                    </div>
                    <button>Seguir</button>
                </div>

                <div className="sugestao">
                    <div className="usuario">
                        <img src="image/sidebar/06.jpeg" alt="Perfil" />
                        <div className="texto">
                            <strong>smallcutecats</strong>
                            <span>Segue você</span>
                        </div>
                    </div>
                    <button>Seguir</button>
                </div>
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">© 2024 INSTAGRAM DO FACEBOOK</div>
        </div>
    );
}
