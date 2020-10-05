import IBook from "@/models/Book";

import axios from "axios";
export default class BookService {
  private API_URL: string = process.env.VUE_APP_API_URL;

  public async getBooks(): Promise<IBook[]> {
    let result = await axios.get(`${this.API_URL}/books`);
    return result.data;
  }

  public async addBook(book: IBook) {
    let result = await axios.post(`${this.API_URL}/books`, book);
    return result.data;
  }
}
