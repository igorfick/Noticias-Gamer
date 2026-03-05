import { useParams } from 'react-router-dom'

export default function NewsDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Notícia {id}</h1>
            <p>Detalhes da Noticia em Breve</p>
        </div>
    )
}