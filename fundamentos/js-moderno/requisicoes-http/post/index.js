const renderArticle = (articleData) => {
  const article = document.createElement(`article`);
  article.classList.add(`article`);
  article.id = `article-${articleData}`;

  const title = document.createElement(`h3`);
  title.classList.add(`article-title`);
  title.textContent = articleData.title;

  const content = document.createElement(`div`);
  content.classList.add(`article-content`);
  content.innerHTML = articleData.content;

  const author = document.createElement(`div`);
  author.classList.add(`article-author`);
  author.textContent = articleData.author;

  article.append(title, author, content);
  document.querySelector(`#articles`).appendChild(article);
};

const fetchArticles = async () => {
  const articles = await fetch(`http://localhost:3000/articles`).then((resp) =>
    resp.json()
  );
  articles.forEach(renderArticle);
};

document.addEventListener(`DOMContentLoaded`, () => {
  fetchArticles();
});

const form = document.querySelector(`form`);

form.addEventListener(`submit`, async (e) => {
  e.preventDefault();

  const articleData = {
    title: document.querySelector(`#title`).value,
    author: document.querySelector(`#author`).value,
    content: document.querySelector(`#content`).value,
  };

  const resp = await fetch(`http://localhost:3000/articles`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });

  const savedArticle = await resp.json();
  form.reset();
  renderArticle(savedArticle);
});
