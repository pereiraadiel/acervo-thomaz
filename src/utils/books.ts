import { BookModel } from "@/models/book.model";

export const BOOKS = [
  {
    id: "123",
    title: "Dom Casmurro",
    description:
      "Um dos romances mais famosos de Machado de Assis, explorando a vida de Bentinho e Capitu.",
    imageUrl:
      "http://martinclaret.com.br/wp-content/uploads/2017/04/81Ky6pLfLNL.jpg",
    author: "Machado de Assis",
    status: "readed",
  },
  {
    id: "321",
    title: "Sapiens: Uma Breve História da Humanidade",
    description:
      "Uma narrativa sobre a história da humanidade desde a Idade da Pedra até a era moderna.",
    imageUrl:
      "https://cdn.awsli.com.br/2500x2500/1904/1904872/produto/171497327870130ce04.jpg",
    author: "Yuval Noah Harari",
    status: "not-readed",
  },
  {
    id: "456",
    title: "1984",
    description:
      "Um romance distópico que explora temas de totalitarismo e vigilância.",
    imageUrl: "http://litstack.com/wp-content/uploads/2013/06/1984_poster.jpg",
    author: "George Orwell",
    status: "reading",
  },
  {
    id: "654",
    title: "O Pequeno Príncipe",
    description:
      "Uma obra clássica que aborda temas como amizade, amor e perda.",
    imageUrl:
      "https://www.martinclaret.com.br/wp-content/uploads/2017/04/O-PEQUENO-PRINCIPE-capa-1150x1537.jpg",
    author: "Antoine de Saint-Exupéry",
    status: "abandoned",
  },
  {
    id: "789",
    title: "A Revolução dos Bichos",
    description:
      "Uma fábula satírica sobre uma revolução de animais em uma fazenda.",
    imageUrl:
      "https://img.wook.pt/images/a-revolucao-dos-bichos-george-orwell/MXwyNDcxNzkyOHwyMDg3MzU1NHwxNjE4MjIzODQ0MDAw/500x",
    author: "George Orwell",
    status: "not-readed",
  },
  {
    id: "987",
    title: "O Poder do Hábito",
    description:
      "Um olhar sobre como os hábitos se formam e como podem ser mudados.",
    imageUrl:
      "https://lojasaraiva.vteximg.com.br/arquivos/ids/12103199/1008971706.jpg",
    author: "Charles Duhigg",
    status: "readed",
  },
  {
    id: "012",
    title: "Cem Anos de Solidão",
    description:
      "Uma saga multi-geracional da família Buendía em uma cidade fictícia.",
    imageUrl:
      "http://static.fnac-static.com/multimedia/PT/images_produits/PT/ZoomPE/4/1/3/9789722000314.jpg",
    author: "Gabriel García Márquez",
    status: "reading",
  },
  {
    id: "210",
    title: "A Arte da Guerra",
    description:
      "Um tratado militar clássico que aborda estratégias e táticas de guerra.",
    imageUrl:
      "https://www.lpm.com.br/livros/imagens/arte_guerra_classicos_9788525429896_hd.jpg",
    author: "Sun Tzu",
    status: "abandoned",
  },
  {
    id: "234",
    title: "O Alquimista",
    description:
      "A jornada de um jovem pastor em busca de seu tesouro pessoal.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81slUinjTlS.jpg",
    author: "Paulo Coelho",
    status: "not-readed",
  },
  {
    id: "432",
    title: "O Hobbit",
    description:
      "A aventura de Bilbo Bolseiro em busca de um tesouro guardado por um dragão.",
    imageUrl: "https://flxt.tmsimg.com/assets/p9458059_p_v10_ac.jpg",
    author: "J.R.R. Tolkien",
    status: "readed",
  },
  {
    id: "345",
    title: "SCRUM",
    description: "A arte de fazer o dobro do trabalho na metade do tempo",
    author: "J.J Sutherland",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.awsli.com.br%2F800x800%2F2507%2F2507517%2Fproduto%2F190854090e39584ad85.jpg&f=1",
    status: "not-readed",
  },
  {
    id: "543",
    title: "O Alienista",
    description:
      "Texto integral - Questões de vestibular, e agora eu coloco qualquer coisa para passar do limite de caracteres e ver o que acontece",
    author: "Machado de Assis",
    imageUrl:
      "https://www.buobooks.com/wp-content/uploads/2021/04/FRONTCOVER-1400561933.jpeg",
    status: "reading",
  },
  {
    id: "567",
    title: "Padre Pio",
    description: "Os Milagres desconhecidos do santo dos estigmas",
    author: "José Maria Zavala",
    imageUrl:
      "http://www.paulus.com.br/portal/wp-content/uploads/2012/10/Padre-Pio-Capa.jpg",
    status: "abandoned",
  },
] as BookModel[];
