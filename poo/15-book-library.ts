/* Exercício 15: Crie uma classe Livro.
Inclua métodos para emprestar e devolver o livro.*/

// Book class
class Book {
  title: string;
  author: string;
  borrowed: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  borrow(): void {
    if (!this.borrowed) {
      this.borrowed = true;
      console.log(`${this.title} has been borrowed.`);
    } else {
      console.log(`${this.title} is already borrowed.`);
    }
  }

  returnBook(): void {
    if (this.borrowed) {
      this.borrowed = false;
      console.log(`${this.title} has been returned.`);
    } else {
      console.log(`${this.title} was not borrowed.`);
    }
  }
}

// Library class
class Library {
  storedBooks: Book[] = [];
  borrowedBooks: Book[] = [];

  addBook(book: Book): void {
    this.storedBooks.push(book);
    console.log(`${book.title} added to the library.`);
  }

  borrowBook(book: Book): void {
    const index = this.storedBooks.indexOf(book);
    if (index > -1) {
      this.storedBooks.splice(index, 1);
      this.borrowedBooks.push(book);
      book.borrow();
    } else {
      console.log(`${book.title} is not available in stored books.`);
    }
  }

  returnBook(book: Book): void {
    const index = this.borrowedBooks.indexOf(book);
    if (index > -1) {
      this.borrowedBooks.splice(index, 1);
      this.storedBooks.push(book);
      book.returnBook();
    } else {
      console.log(`${book.title} is not currently borrowed.`);
    }
  }

  listStoredBooks(): void {
    console.log("Stored Books:");
    this.storedBooks.forEach(book => console.log(`- ${book.title} by ${book.author}`));
  }

  listBorrowedBooks(): void {
    console.log("Borrowed Books:");
    this.borrowedBooks.forEach(book => console.log(`- ${book.title} by ${book.author}`));
  }
}

// Example usage
const library = new Library();

const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("1984", "George Orwell");
console.log('-------------')
library.addBook(book1);
library.addBook(book2);
console.log('-------------')
library.listStoredBooks();
console.log('-------------')
library.borrowBook(book1);
console.log('-------------')
library.listStoredBooks();
console.log('-------------')
library.listBorrowedBooks();
console.log('-------------')
library.returnBook(book1);
console.log('-------------')
library.listStoredBooks();
console.log('-------------')
library.listBorrowedBooks();
