function fetchBooks() {
  // Perform the fetch request and return the promise
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      renderBooks(data); // Call renderBooks() with the JSON data
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});