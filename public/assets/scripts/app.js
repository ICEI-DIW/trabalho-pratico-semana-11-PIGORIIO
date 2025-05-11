const noticias = [
  {
    id: 1,
    titulo: "Em breve o lançamento da série animada: Go for it, Nakamura!",
    descricao: "Um garoto tímido se apaixona pelo seu colega de classe, nisso entra em diversas aventuras para se aproximar do rapaz.",
    conteudo: "É um mangá de comédia romântica do gênero Boys Love (BL).",
    categoria: "LGBTQ+, ANIME, ROMANCE, COMÉDIA.",
    autor: "Syundei",
    data: "2025-05-18",
    imagem: "Nakamura.png",
    imagens_complementares: [
      { src: "nak1.jpg", descricao: "Go for it, Nakamura! é uma doce e envolvente jornada emocional que captura as inseguranças e os primeiros amores com uma sensibilidade única. Esta série animada mergulha na vida de Nakamura, um jovem tímido e introspectivo, que se vê envolvido nas complexas emoções de um amor à primeira vista por seu colega de classe. Em um cenário de aventuras cotidianas e momentos de vulnerabilidade, Nakamura explora os altos e baixos do afeto, descobrindo o significado de se abrir para os outros e de se permitir ser verdadeiro consigo mesmo." },
      { src: "nak2.jpg", descricao: "Go for it, Nakamura! é uma celebração da vulnerabilidade, da coragem silenciosa de se apaixonar e da beleza de ser quem você realmente é. Cada episódio é uma janela aberta para um mundo de emoção, onde até as incertezas se transformam em momentos mágicos e inesquecíveis." }
    ]
  },
  {
    id: 2,
    titulo: "ESTREIA DO NOVO FILME: G20",
    descricao: "Terroristas assumem a cúpula do G20. A Presidenta dos EUA usa sua experiência em guerras para proteger todos.",
    conteudo: "Político, explorando liderança feminina, terrorismo e economia.",
    categoria: "DRAMA, AÇÃO, THRILLER.",
    autor: "Caitlyn Parrish e Noah Miller",
    data: "2025-08-24",
    imagem: "G20.png",
    imagens_complementares: [
      { src: "g201.jpg", descricao: "Interpretada pela poderosa Viola Davis, Sutton é uma mulher que combina uma força indomável com uma profunda vulnerabilidade. Sua experiência de combate em guerras passadas é posta à prova quando ela se vê obrigada a usar toda sua inteligência e coragem para desmantelar uma trama perigosa, arquitetada por Edward Rutledge, um vilão complexo e enigmático vivido por Antony Starr. O vilão, um mestre da manipulação digital, utiliza deepfakes e criptomoedas para ameaçar a economia global, provocando um jogo de gato e rato com repercussões que vão muito além da política." },
      { src: "g202.jpg", descricao: "A cinematografia imersiva e a trilha sonora eletricamente carregada tornam G20 uma obra que não só te prende ao longo de suas reviravoltas emocionantes, mas também te faz refletir sobre os tempos turbulentos em que vivemos. É um filme que vai te manter na ponta da cadeira, repleto de ação, emoção e uma reflexão contundente sobre o poder no século XXI." }
    ]
  },
  {
    id: 3,
    titulo: "CASO QUEIRA UM POUCO DE RISADAS, VEM AÍ: DIGITAL CIRCUS",
    descricao: "Cinco humanos presos em um mundo virtual e sem memórias. Uma série animada independente australiana.",
    conteudo: "Temas como identidade, traumas e sanidade.",
    categoria: "COMÉDIA SOMBRIA, DRAMA E FICÇÃO CIENTÍFICA.",
    autor: "Gooseworx",
    data: "2025-07-26",
    imagem: "Digital-Circus.png",
    imagens_complementares: [
      { src: "circus1.jpg", descricao: "Com uma estética única, Digital Circus apresenta uma animação envolvente que combina elementos de ficção científica e comédia sombria, criando uma atmosfera inquietante e ao mesmo tempo fascinante. A série não tem medo de explorar temas profundos como a construção da identidade, o impacto dos traumas e a busca por sentido em um mundo caótico. Cada episódio é uma imersão psicológica, onde o espectador é levado a questionar sua própria percepção da realidade, enquanto os personagens tentam desvendar os enigmas de um mundo virtual que pode ser tanto uma prisão quanto uma chave para a liberdade." },
      { src: "circus2.jpg", descricao: "Cinco almas perdidas, sem memória de quem são ou como chegaram ali, acordam em um universo virtual estranho e labiríntico. Cada um, com suas características e peculiaridades, luta para entender o que é real e o que é fruto de suas próprias mentes distorcidas. Juntos, eles embarcam em uma jornada de autodescoberta e sobrevivência, onde a linha entre o amigo e o inimigo se torna cada vez mais nebulosa." }
    ]
  }
];

// Função para renderizar as notícias
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

// Função para obter uma notícia pelo ID
function getNoticiaPorId(id) {
  return noticias.find(noticia => noticia.id === id);
}

// Função para renderizar os detalhes da notícia
function renderizarDetalhes() {
  const id = new URLSearchParams(window.location.search).get('id');
  const noticia = getNoticiaPorId(parseInt(id));

  const container = document.getElementById("detalhes-noticia");
  if (noticia) {
    container.innerHTML = `
      <h1>${noticia.titulo}</h1>
      <img src="${noticia.imagem}" alt="${noticia.titulo}" class="img-fluid">
      <p><strong>Categoria:</strong> ${noticia.categoria}</p>
      <p><strong>Data:</strong> ${noticia.data}</p>
      <p><strong>Autor:</strong> ${noticia.autor}</p>
      <p><strong>Conteúdo:</strong> ${noticia.conteudo}</p>
      <div class="imagens-complementares">
        ${noticia.imagens_complementares ? noticia.imagens_complementares.map(img => `
          <img src="${img.src}" alt="${img.descricao}" class="img-fluid">
          <p>${img.descricao}</p>
        `).join('') : ''}
      </div>
    `;
  } else {
    container.innerHTML = "<p>Notícia não encontrada.</p>";
  }
}

document.addEventListener("DOMContentLoaded", renderizarNoticias);




