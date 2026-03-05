import Navbar from "./components/Navbar"
import NewsList from "./components/NewsList"

function App() {
  const noticias = [
    {
      titulo: "GTA 6 ganha novo trailer",
      descricao: "Rockstar revela novas imagens do jogo.",
      imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      categoria: "Acao",
      data: "04/03/2026"
    },
    {
      titulo: "Novo Elden Ring anunciado",
      descricao: "FromSoftware revela nova expansao.",
      imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      categoria: "RPG",
      data: "03/03/2026"
    },
    {
      titulo: "PlayStation anuncia novo console",
      descricao: "Sony revela novidades do PS6.",
      imagem: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1",
      categoria: "Console",
      data: "02/03/2026"
    },
    {
      titulo: "Nintendo revela novo Zelda",
      descricao: "Novo jogo chega em 2027.",
      imagem: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
      categoria: "Aventura",
      data: "01/03/2026"
    }
  ]

  return (
    <div className="container">
      <Navbar />
      <h1>GameNews</h1>
      <NewsList noticias={noticias} />
    </div>
  )
}

export default App
