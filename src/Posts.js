import Post from "./Post";

export default function Posts() {
    return (
        <div className="posts">
            <Post
                usuario="meowed"
                imgUsuario="image/stories/sem-fundo/02-meowed.jpeg"
                imgPost="image/posts/01-gatotelefone.jpeg"
                curtidas={29}
            />
            <Post
                usuario="barked"
                imgUsuario="image/stories/sem-fundo/03-barked.jpeg"
                imgPost="image/posts/02-dog.jpeg"
                curtidas={98542}
            />
            <Post
                usuario="barked"
                imgUsuario="image/stories/sem-fundo/03-barked.jpeg"
                imgPost="image/posts/02-dog.jpeg"
                curtidas={1}
            />
        </div>
    );
}