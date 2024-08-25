import { BookModel } from "@/models/book.model";

export const BOOKS = [
  {
    id: "123",
    isbn: "9788535902770",
    title: "Dom Casmurro",
    subtitle: "Texto integral - Questões de vestibular",
    description:
      "Um dos romances mais famosos de Machado de Assis, explorando a vida de Bentinho e Capitu.",
    imageUrl:
      "http://martinclaret.com.br/wp-content/uploads/2017/04/81Ky6pLfLNL.jpg",
    author: "Machado de Assis",
    publisher: "Martin Claret",
    publishedDate: "2000",
    pageCount: 256,
    readedPageCount: 256,
    categories: ["Romance"],
    status: "readed",
    language: "Português",
    rating: 5,
    progress: 100,
  },
  {
    id: "321",
    isbn: "9788535902770",
    title: "Sapiens: Uma Breve História da Humanidade",
    subtitle: "",
    description:
      "Uma narrativa sobre a história da humanidade desde a Idade da Pedra até a era moderna.",
    imageUrl:
      "https://cdn.awsli.com.br/2500x2500/1904/1904872/produto/171497327870130ce04.jpg",
    author: "Yuval Noah Harari",
    publisher: "L&PM",
    publishedDate: "2015",
    pageCount: 464,
    readedPageCount: 232,
    categories: ["História"],
    status: "not-readed",
    language: "Português",
    rating: 0,
    progress: 50,
  },
  {
    id: "456",
    isbn: "9788535902770",
    title: "1984",
    subtitle: "",
    description:
      "Um romance distópico que explora temas de totalitarismo e vigilância.",
    imageUrl: "http://litstack.com/wp-content/uploads/2013/06/1984_poster.jpg",
    author: "George Orwell",
    publisher: "Companhia das Letras",
    publishedDate: "1949",
    pageCount: 416,
    readedPageCount: 0,
    categories: ["Ficção Científica"],
    status: "reading",
    language: "Inglês",
    rating: 0,
  },
  {
    id: "654",
    isbn: "9788535902770",
    title: "O Pequeno Príncipe",
    subtitle: "",
    description:
      "Uma obra clássica que aborda temas como amizade, amor e perda.",
    imageUrl:
      "https://www.martinclaret.com.br/wp-content/uploads/2017/04/O-PEQUENO-PRINCIPE-capa-1150x1537.jpg",
    author: "Antoine de Saint-Exupéry",
    publisher: "Martin Claret",
    publishedDate: "1943",
    pageCount: 96,
    readedPageCount: 0,
    status: "abandoned",
    language: "Francês",
    rating: 0,
    progress: 0,
  },
  {
    id: "789",
    isbn: "9788535902770",
    title: "A Revolução dos Bichos",
    subtitle: "",
    description:
      "Uma fábula satírica sobre uma revolução de animais em uma fazenda.",
    imageUrl:
      "https://img.wook.pt/images/a-revolucao-dos-bichos-george-orwell/MXwyNDcxNzkyOHwyMDg3MzU1NHwxNjE4MjIzODQ0MDAw/500x",
    author: "George Orwell",
    publisher: "Companhia das Letras",
    publishedDate: "1945",
    pageCount: 152,
    readedPageCount: 0,
    status: "not-readed",
    language: "Espanhol",
    rating: 0,
    progress: 0,
  },
  {
    id: "987",
    isbn: "9788535902770",
    title: "O Poder do Hábito",
    subtitle: "",
    description:
      "Um olhar sobre como os hábitos se formam e como podem ser mudados.",
    imageUrl:
      "https://lojasaraiva.vteximg.com.br/arquivos/ids/12103199/1008971706.jpg",
    author: "Charles Duhigg",
    publisher: "Objetiva",
    publishedDate: "2012",
    pageCount: 408,
    readedPageCount: 408,
    status: "readed",
    language: "Português",
    rating: 0,
    progress: 100,
  },
  {
    id: "012",
    isbn: "9788535902770",
    title: "Cem Anos de Solidão",
    subtitle: "",
    description:
      "Uma saga multi-geracional da família Buendía em uma cidade fictícia.",
    imageUrl:
      "http://static.fnac-static.com/multimedia/PT/images_produits/PT/ZoomPE/4/1/3/9789722000314.jpg",
    author: "Gabriel García Márquez",
    publisher: "Record",
    publishedDate: "1967",
    pageCount: 448,
    readedPageCount: 335,
    status: "reading",
    language: "Português",
    rating: 0,
    progress: 75,
  },
  {
    id: "210",
    isbn: "9788535902770",
    title: "A Arte da Guerra",
    subtitle: "",
    description:
      "Um tratado militar clássico que aborda estratégias e táticas de guerra.",
    imageUrl:
      "https://www.lpm.com.br/livros/imagens/arte_guerra_classicos_9788525429896_hd.jpg",
    author: "Sun Tzu",
    publisher: "L&PM",
    publishedDate: "Séc. V a.C.",
    pageCount: 128,
    readedPageCount: 37,
    status: "abandoned",
    language: "Português",
    rating: 0,
    progress: 29,
  },
  {
    id: "234",
    isbn: "9788535902770",
    title: "O Alquimista",
    subtitle: "",
    description:
      "A jornada de um jovem pastor em busca de seu tesouro pessoal.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81slUinjTlS.jpg",
    author: "Paulo Coelho",
    publisher: "Santos",
    publishedDate: "1988",
    pageCount: 176,
    readedPageCount: 0,
    status: "not-readed",
    language: "Português",
    rating: 0,
    progress: 0,
  },
  {
    id: "432",
    isbn: "9788535902770",
    title: "O Hobbit",
    subtitle: "",
    description:
      "A aventura de Bilbo Bolseiro em busca de um tesouro guardado por um dragão.",
    imageUrl: "https://flxt.tmsimg.com/assets/p9458059_p_v10_ac.jpg",
    author: "J.R.R. Tolkien",
    publisher: "WMF Martins Fontes",
    publishedDate: "1937",
    pageCount: 328,
    readedPageCount: 328,
    status: "readed",
    language: "Português",
    rating: 4,
    progress: 100,
  },
  {
    id: "345",
    isbn: "9788535902770",
    title: "SCRUM",
    subtitle: "",
    description: "A arte de fazer o dobro do trabalho na metade do tempo",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.awsli.com.br%2F800x800%2F2507%2F2507517%2Fproduto%2F190854090e39584ad85.jpg&f=1",
    author: "J.J Sutherland",
    publisher: "LeYa",
    publishedDate: "2014",
    pageCount: 256,
    readedPageCount: 0,
    status: "not-readed",
    language: "Português",
    rating: 0,
    progress: 0,
  },
  {
    id: "543",
    isbn: "9788535902770",
    title: "O Alienista",
    subtitle: "",
    description:
      "Texto integral - Questões de vestibular, e agora eu coloco qualquer coisa para passar do limite de caracteres e ver o que acontece",
    imageUrl:
      "https://www.buobooks.com/wp-content/uploads/2021/04/FRONTCOVER-1400561933.jpeg",
    author: "Machado de Assis",
    publisher: "Martin Claret",
    publishedDate: "1882",
    pageCount: 96,
    readedPageCount: 32,
    status: "reading",
    language: "Português",
    rating: 0,
    progress: 33,
  },
  {
    id: "567",
    isbn: "9788535902770",
    title: "Padre Pio",
    subtitle: "",
    description: "Os Milagres desconhecidos do santo dos estigmas",
    imageUrl:
      "http://www.paulus.com.br/portal/wp-content/uploads/2012/10/Padre-Pio-Capa.jpg",
    author: "José Maria Zavala",
    publisher: "Planeta",
    publishedDate: "2016",
    pageCount: 240,
    readedPageCount: 47,
    status: "abandoned",
    language: "Português",
    rating: 0,
    progress: 20,
  },
  {
    id: "765",
    isbn: "9788535902770",
    title: "Harry Poter e a pedra filosofal",
    subtitle: "",
    description: "O primeiro livro da saga de Harry Potter",
    imageUrl:
      "https://images.trustinnews.pt/uploads/sites/5/2019/10/10091435Harry-Potter-e-a-Pedra-Filosofal.jpg",
    author: "J.K. Rowling",
    publisher: "Rocco",
    publishedDate: "1997",
    pageCount: 224,
    readedPageCount: 0,
    status: "desired",
    language: "Português",
    rating: 0,
    progress: 0,
  },
  {
    id: "147",
    isbn: "9788535902770",
    title: "Matilda (Edição Especial)",
    subtitle: "",
    description: "Matilda é uma menina brilhante e muito inteligente",
    imageUrl:
      "https://cdn.record.com.br/wp-content/uploads/2022/06/10150352/23457-1011x1536.jpeg",
    author: "Roald Dahl",
    publisher: "Record",
    publishedDate: "1988",
    pageCount: 224,
    readedPageCount: 0,
    status: "desired",
    language: "Português",
    rating: 0,
    progress: 0,
  },
  {
    id: "9",
    isbn: "9788535902770",
    title: "Confissões",
    subtitle: "",
    description:
      "Autobiografia de Santo Agostinho, que narra sua jornada espiritual e conversão ao cristianismo.",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_942509-MLB44342971430_122020-O.jpg",
    author: "Santo Agostinho",
    publisher: "Editora Paulus",
    publishedDate: "398-01-01",
    pageCount: 400,
    readedPageCount: 0,
    categories: ["Religião", "Catolicismo"],
    status: "desired",
    language: "pt",
    rating: 4.9,
    progress: 0,
  },
  {
    id: "10",
    isbn: "9788535902770",
    title: "O Homem Eterno",
    subtitle: "",
    description:
      "G.K. Chesterton explora a história da humanidade sob a perspectiva cristã, enfatizando o papel central de Cristo.",
    imageUrl:
      "https://ik.imagekit.io/imgpl/i1/tr:h-600/livro/2022/11614_5326.jpg",
    author: "G.K. Chesterton",
    publisher: "Editora Quadrante",
    publishedDate: "1925-01-01",
    pageCount: 300,
    readedPageCount: 0,
    categories: ["Religião", "Filosofia Cristã", "Catolicismo"],
    status: "desired",
    language: "pt",
    rating: 4.8,
    progress: 0,
  },
  {
    id: "11",
    isbn: "9788535902770",
    title: "A Revolta de Atlas",
    subtitle: "",
    description:
      "Um romance distópico de Ayn Rand que explora o impacto do governo sobre o indivíduo e a importância da liberdade.",
    imageUrl:
      "https://www.touchelivros.com.br/wp-content/uploads/2023/01/PI5821823_2023124163651.jpg",
    author: "Ayn Rand",
    publisher: "Editora Arqueiro",
    publishedDate: "1957-10-10",
    pageCount: 1200,
    readedPageCount: 600,
    categories: ["Ficção", "Filosofia"],
    status: "reading",
    language: "pt",
    rating: 4.7,
    progress: 50,
  },
  {
    id: "12",
    isbn: "9788535902770",
    title: "Admirável Mundo Novo",
    subtitle: "",
    description:
      "Uma obra-prima de Aldous Huxley que imagina uma sociedade futurista onde a felicidade é alcançada à custa da liberdade.",
    imageUrl:
      "http://www.vortexcultural.com.br/images/2012/02/Admir%C3%A1vel-mundo-novo.jpg",
    author: "Aldous Huxley",
    publisher: "Editora Globo",
    publishedDate: "1932-01-01",
    pageCount: 352,
    readedPageCount: 352,
    categories: ["Ficção", "Distopia"],
    status: "readed",
    language: "pt",
    rating: 4.6,
    progress: 100,
  },
  {
    id: "13",
    isbn: "9788535902770",
    title: "O Poderoso Chefão",
    subtitle: "",
    description:
      "Clássico de Mario Puzo sobre a máfia italiana nos Estados Unidos, centrado na família Corleone.",
    imageUrl:
      "https://vortexcultural.com.br/images/2018/03/o-poderoso-chef%C3%A3o-mario-puzo.jpg",
    author: "Mario Puzo",
    publisher: "Editora Record",
    publishedDate: "1969-03-10",
    pageCount: 512,
    readedPageCount: 300,
    categories: ["Ficção", "Crime"],
    status: "reading",
    language: "pt",
    rating: 4.8,
    progress: 58.59,
  },
  {
    id: "14",
    isbn: "9788535902770",
    title: "Mindhunter",
    subtitle: "O Primeiro Caçador de Serial Killers Americano",
    description:
      "John E. Douglas relata sua experiência no FBI caçando serial killers e desenvolvendo perfis criminais.",
    imageUrl:
      "https://www.elsotano.com/imagenes_grandes/9786075/978607569340.JPG",
    author: "John E. Douglas",
    publisher: "Editora Intrínseca",
    publishedDate: "1995-10-10",
    pageCount: 384,
    readedPageCount: 200,
    categories: ["Não-Ficção", "Crime", "Psicologia"],
    status: "reading",
    language: "pt",
    rating: 4.7,
    progress: 52.08,
  },
  {
    id: "15",
    isbn: "9788535902770",
    title: "O Silêncio dos Inocentes",
    subtitle: "",
    description:
      "Thriller psicológico de Thomas Harris que introduz o icônico personagem Hannibal Lecter.",
    imageUrl:
      "https://www.saraivaconteudo.com.br/capas/08/download-o-silencio-dos-inocentes-thomas-harris-ler-online-pdf.jpg",
    author: "Thomas Harris",
    publisher: "Editora BestBolso",
    publishedDate: "1988-05-23",
    pageCount: 367,
    readedPageCount: 150,
    categories: ["Ficção", "Thriller", "Crime"],
    status: "reading",
    language: "pt",
    rating: 4.9,
    progress: 40.87,
  },
  {
    id: "16",
    isbn: "9788535902770",
    title: "O Livro com erros",
    subtitle: "",
    description:
      "Thriller psicológico de Thomas Harris que introduz o icônico personagem Hannibal Lecter.",
    imageUrl:
      "https://www.saraivaconteudo.com.br/capas/08/o-silencio-dos-inocentes-thomas-harris-ler-online-pdf.jpg",
    author: "Thomas Harris",
    publisher: "Editora BestBolso",
    publishedDate: "1988-05-23",
    pageCount: 367,
    readedPageCount: 150,
    categories: ["Ficção", "Thriller", "Crime"],
    status: "reading",
    language: "pt",
    rating: 4.9,
    progress: 40.87,
  },
] as BookModel[];
