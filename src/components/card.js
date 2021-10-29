import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline;
  cardDiv.appendChild(headlineDiv);

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  cardDiv.appendChild(authorDiv);

  const imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('img-container');
  authorDiv.appendChild(imgContainerDiv);

  const image = document.createElement('img');
  image.src = article.authorPhoto;
  imgContainerDiv.appendChild(image);

  const span = document.createElement('span');
  span.textContent = `By: ${article.authorName}`;
  authorDiv.appendChild(span);

  cardDiv.addEventListener('click', function () {
    console.log(article.headlineDiv);
  });

  return cardDiv;

};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
    .then(res => {
      // console.log(res);
      const info = res.data.articles;
      const articleData = document.querySelector(selector);
      info.javascript.forEach(e => {
        articleData.appendChild(Card(e));
      });
      info.bootstrap.forEach(e => {
        articleData.appendChild(Card(e));
      });
      info.technology.forEach(e => {
        articleData.appendChild(Card(e));
      });
      info.jquery.forEach(e => {
        articleData.appendChild(Card(e));
      });
      info.node.forEach(e => {
        articleData.appendChild(Card(e));
      });
    });
};

export { Card, cardAppender };
