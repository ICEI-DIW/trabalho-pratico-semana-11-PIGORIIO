let noticias = [];
let catalogo = [];

// Carrega os dados do db.json
async function carregarDados() {
  try {
    const response = await fetch('/db/db.json');
    if (!response.ok) throw new Error("Erro ao carregar o db.json");

    const dados = await response.json();
    noticias = dados.noticias || [];
    catalogo = dados.catalogo || [];

    renderizarNoticias();
    renderizarCatalogo();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

// Renderiza notícias
function renderizarNoticias() {
  const container = document.getElementById("noticias-container");
  container.innerHTML = noticias.map(noticia => `
        <div class="card" style="flex: 1 1 300px; border: 1px solid #ccc; padding: 10px; box-shadow: 2px 2px 8px rgba(0,0,0,0.1); border-radius: 8px; background-color: #f9f9f9;">
        <img src="${noticia.imagem}" alt="${noticia.titulo}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 4px;">
        <div style="padding: 10px 0;">
            <h3 style="margin: 5px 0;">${noticia.titulo}</h3>
            <p>${noticia.descricao}</p>
            <small><strong>${noticia.categoria}</strong> - ${noticia.data}</small>
        </div>
        <div style="font-size: 0.9em; color: #666;">Por ${noticia.autor}</div>
        <div style="margin-top: 10px; text-align: right;">
            <a href="detalhes.html?id=${noticia.id}" style="text-decoration: none; padding: 8px 12px; background-color: #28a745; color: white; border-radius: 5px;">Saiba mais</a>
        </div>
        </div>
  `).join('');
}

// Obtem notícia pelo ID
function getNoticiaPorId(id) {
  return noticias.find(n => n.id === parseInt(id));
}

// Renderiza detalhes da notícia
function renderizarDetalhes() {
  const id = new URLSearchParams(window.location.search).get('id');
  const noticia = getNoticiaPorId(id);

  const container = document.getElementById("detalhes-noticia");
  if (!noticia) {
    container.innerHTML = "<p>Notícia não encontrada.</p>";
    return;
  }

  container.innerHTML = `
    <h1>${noticia.titulo}</h1>
    <img src="${noticia.imagem}" alt="${noticia.titulo}" class="img-fluid">
    <p><strong>Categoria:</strong> ${noticia.categoria}</p>
    <p><strong>Data:</strong> ${noticia.data}</p>
    <p><strong>Autor:</strong> ${noticia.autor}</p>
    <p><strong>Conteúdo:</strong> ${noticia.conteudo}</p>
    <div class="imagens-complementares">
      ${noticia.imagens_complementares?.map(img => `
        <img src="${img.src}" alt="${img.descricao}" class="img-fluid">
        <p>${img.descricao}</p>
      `).join('') || ''}
    </div>
  `;
}

// Renderiza catálogo de filmes/séries
function renderizarCatalogo() {
  const container = document.getElementById("catalogo-container");

  container.innerHTML = catalogo.map(filme => `
    <div class="card" style="flex: 1 1 250px; border: 1px solid #ccc; padding: 10px; background-color: #f0f0f0; border-radius: 8px;">
      <img src="${filme.imagem}" alt="${filme.titulo}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
      <div style="padding: 10px 0;">
        <h2>${filme.titulo}</h2>
        <p style="font-size: 0.9em;">${filme.descricao}</p>
        <p style="font-style: italic;">${filme.sinopse}</p>
        <p><strong>Elenco:</strong> ${filme.elenco.join(", ")}</p>
        <span style="font-size: 0.8em; color: #555;">Tipo: ${filme.tipo}</span>
      </div>
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  const pathname = window.location.pathname;

  carregarDados().then(() => {
    if (pathname.includes("index.html") || pathname === "/" || pathname === "/index") {
      renderizarNoticias();
      renderizarCatalogo();
    } else if (pathname.includes("detalhes.html")) {
      renderizarDetalhes();
    }
  });
});

