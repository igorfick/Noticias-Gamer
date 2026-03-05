const express = require("express");
const cors = require("cors");
const Parser = require("rss-parser");

const app = express();
const parser = new Parser();

app.use(cors({ origin: "http://localhost:5173" }));

// Troque/adicione feeds aqui se quiser
const FEEDS = [
  // Exemplos de feeds gamer (RSS)
  "https://kotaku.com/feed", // :contentReference[oaicite:1]{index=1}
  "https://www.ign.com/rss/v2/articles/feed?categories=games", // :contentReference[oaicite:2]{index=2}
  "https://www.polygon.com/feed/", // :contentReference[oaicite:3]{index=3}
];

app.get("/api/news", async (req, res) => {
  try {
    const allItems = [];

    for (const url of FEEDS) {
      const feed = await parser.parseURL(url);

      const items = (feed.items || []).map((item, idx) => ({
        // id simples por enquanto (depois a gente melhora)
        id: `${feed.title || "feed"}-${idx}-${item.guid || item.link}`,
        titulo: item.title || "",
        descricao: item.contentSnippet || item.content || "",
        link: item.link || "",
        data: item.isoDate || item.pubDate || "",
        fonte: feed.title || "",
      }));

      allItems.push(...items);
    }

    // ordena por data (quando existir)
    allItems.sort((a, b) => (b.data || "").localeCompare(a.data || ""));

    res.json(allItems.slice(0, 30));
  } catch (err) {
    res.status(500).json({ error: "Falha ao buscar RSS", details: String(err) });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));