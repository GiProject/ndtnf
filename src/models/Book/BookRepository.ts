import { IBook } from "./IBook";

export default abstract class BookRepository {
    abstract createBook(book: IBook): void;
    abstract getBook(id: string): IBook | undefined;
    abstract getBooks(): IBook[];
    abstract upadeteBook(d: string): void;
    abstract deleteBook(id: string): void;   
}