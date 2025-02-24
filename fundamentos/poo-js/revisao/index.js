// const book = {
//   title: `Eragon`,
//   pages: 468,
//   published: true,
//   inStock: 20,
//   tags: [`fantasy`, `adventure`, `medieval`],
//   author: {
//     name: `Christopher Paolini`,
//   },
//   addStock: function (quantity) {
//     this.inStock += quantity;
//   },
// };

// construtor de objetos
function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = (qtd) => {
    this.inStock += qtd;
  };
  this.save = () => {
    // salvar no banco de dados
  };
}

const eragon = new Book(
  `Eragon`,
  468,
  [`fantasy`, `adventure`, `medieval`],
  `Christopher Paolini`
);

console.log(eragon);
