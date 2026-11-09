const filmesExercicio = [
  {
    Nome: "Tropa de Elite",
    Categoria: "Ação/Crime",
    Protagonista: "Wagner Moura",
    Ano: 2007,
    Diretor: "José Padilha"
  },
  {
    Nome: "Vingadores: Guerra Infinita",
    Categoria: "Ação/Super-herói",
    Protagonista: "Robert Downey Jr.",
    Ano: 2018,
    Diretor: "Anthony e Joe Russo"
  },
  {
    Nome: "It: A Coisa",
    Categoria: "Terror",
    Protagonista: "Jaeden Martell",
    Ano: 2017,
    Diretor: "Andy Muschietti"
  },
  {
    Nome: "Homem-Aranha: De Volta ao Lar",
    Categoria: "Ação/Super-herói",
    Protagonista: "Tom Holland",
    Ano: 2017,
    Diretor: "Jon Watts"
  },
  {
    Nome: "Homem de Ferro",
    Categoria: "Ação/Super-herói",
    Protagonista: "Robert Downey Jr.",
    Ano: 2008,
    Diretor: "Jon Favreau"
  },
  {
    Nome: "Titanic",
    Categoria: "Romance/Drama",
    Protagonista: "Leonardo DiCaprio",
    Ano: 1997,
    Diretor: "James Cameron"
  },
  {
    Nome: "Ted",
    Categoria: "Comédia/Fantasia",
    Protagonista: "Mark Wahlberg",
    Ano: 2012,
    Diretor: "Seth MacFarlane"
  }
];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of filmesExercicio){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.Nome}</td>
        <td>${produto.Categoria}</td>
        <td>${produto.Protagonista}</td>
        <td>${produto.Ano}</td>
        <td>${produto.Diretor}</td>
    `

    corpoTabela.appendChild(linha)
  }