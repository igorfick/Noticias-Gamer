import NewsCard from "./NewsCard"

function NewsList({ noticias }) {
    return (
        <div className="news-grid">
            {noticias.map((noticia) => (
                <NewsCard
                    key={noticia.id}
                    id={noticia.id}
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
