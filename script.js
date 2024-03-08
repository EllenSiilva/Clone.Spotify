const secoes = [
  {
    Titulo: "Em alta",
    img: "url('./assets/images/pianista.avif')",
  },
  {
    Titulo: "Sertanejo",
    img: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPko7CYTjzzYLnNx1xTXhgDdeGJI8Hl1-sIjW2tuFPX8FIXIbyHIXW9jyOOqlnbdxUYY&usqp=CAU')",
  },
  {
    Titulo: "Gospel",
    img: "url('https://i0.wp.com/imprensaemidia.com.br/wp-content/uploads/2023/03/Gabriela-Rocha-2023.jpg?fit=1874%2C1054&ssl=1')",
  },
  {
    Titulo: "Rock",
    img: "url('https://i.scdn.co/image/ab6775700000ee85d9770220a2724ad1dc49bc8b')",
  },
  {
    Titulo: "Pagode",
    img: "url('https://i.ytimg.com/vi/mYQ6v_YHmQ4/hqdefault.jpg')",
  },
  {
    Titulo: "Internacionais",
    img: "url('https://i0.wp.com/popnow.com.br/wp-content/uploads/2022/02/spotify-singles-coldplay-scaled-e1645631991791.jpg?fit=2438%2C1561')",
  },

  {
    Titulo: "Funk",
    img: "url('https://uploads.metropoles.com/wp-content/uploads/2023/06/23201129/Ludmilla-49.jpg')",
  },
  {
    Titulo: "Jazz",
    img: "url('https://img.freepik.com/fotos-gratis/pianista-caucasiana-tocando-um-acorde-com-foco-gerado-por-ia_188544-11104.jpg')",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("container");

  secoes.forEach((musica) => {
  
    container.innerHTML += `

    <div class="card " style="background-image:${musica.img}">
    <h1>${musica.Titulo}</h1>
    </div>
    `;

    
  });
});
