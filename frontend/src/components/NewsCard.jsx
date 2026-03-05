import { Link } from "react-router-dom"

function NewsCard(props) {
    return (
        <Link to={`/noticia/${props.id}`} className="news-card-link">
            <div className="news-card">
                <img src={props.imagem} alt={props.titulo} />

                <div className="news-card-content">
                    <span className="news-card-meta">
                        {props.categoria} | {props.data}
                    </span>

                    <h3>{props.titulo}</h3>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </Link>
    )
}

export default NewsCard