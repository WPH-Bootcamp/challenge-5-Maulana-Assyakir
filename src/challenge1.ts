// Don't delete code bellow and this code must be at the bottom of the file
interface bookInterface{
 title: string;
 author: string;
 publicationYear: number;
}

type Book = {
 title: string;
 author: string;  publicationYear: number;
}

let books: bookInterface[] = []

/* check methode2 array: push slice pop shift map unshit merge filter reduce sort reverse*/

function addBook(title:string, author:string, publicationYear:number): void {
 const newBook: Book = { title, author, publicationYear };
 books.push(newBook);
 console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}
//menggunakan method push

function listBooks(): void {
 console.log("All Books:");
 if (books.length === 0) {
 console.log("No books available.");
 return;
 }
 books.forEach(book => {
 console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
 });
} 
// menggunakan map

function searchBook(title?: string): void {
 if (!title) {
 console.log('Please provide a title to search.');
return;
 }

 const results = books.filter(book => book.title.includes(title)); 

console.log(`Search Results for "${title}":`);
 if (results.length === 0) {
 console.log(`No books found with title containing "${title}".`);
} else {
 results.forEach(book => {
 console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
 });
 }
}

// Don't delete code bellow and this code must be at the bottom of the file

export { addBook, listBooks, searchBook };
