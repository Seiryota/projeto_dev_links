function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light');

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem do light mode
    img.setAttribute('src', './assets/Avatar2.svg')
    img.setAttribute('alt', 'Um rapaz estudando em seu quarto com o computador aberto de frente à sua janela')
  } else {
    // Se não tiver light mode, manter a imagem original
    img.setAttribute('src', './assets/Avatar.svg')
    img.setAttribute('alt', 'Um rapaz no meio das ruas de shibuya em tokyo')
  }
}