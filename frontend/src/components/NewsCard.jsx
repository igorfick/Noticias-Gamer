function NewsCard(props) {
    return (
        <div className="news-card">
            <img src={props.imagem} alt={props.titulo} />

            <div className="news-card-content">
                <span className="news-card-meta">{props.categoria} | {props.data}</span>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}

export default NewsCard
