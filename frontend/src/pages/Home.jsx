import Navbar from '../components/Navbar'
import NewsList from '../components/NewsList'

export default function Home() {

    const noticias = [
        {
            titulo: "GTA 6 ganha novo trailer",
            descricao: "Rockstar revela novas imagens do jogo.",
            imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e"
        },
        {
            titulo: "Novo Elden Ring anunciado",
            descricao: "FromSoftware revela nova expansão.",
            imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420"
        },
        {
            titulo: "PlayStation anuncia novo console",
            descricao: "Sony revela novidades do PS6.",
            imagem: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
        }
    ]

    return (
        <>
            <Navbar />
            <NewsList noticias={noticias} />
        </>
    )
}
