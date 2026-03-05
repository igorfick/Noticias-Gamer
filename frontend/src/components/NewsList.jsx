import NewsCard from "./NewsCard"

function NewsList({ noticias }) {
    return (
        <div className="news-grid">
            {noticias.map((noticia, index) => (
                <NewsCard
                    key={index}
                    titulo={noticia.titulo}
                    descricao={noticia.descricao}
                    imagem={noticia.imagem}
                    categoria={noticia.categoria}
                    data={noticia.data}
                />
            ))}
        </div>
    )
}

export default NewsList
