export function selectBook(book) {
  // OLD - console.log('a book has been selected:', book.title);
  // selectBook is an ActionCreator, it nees to return and action,
  // and object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
