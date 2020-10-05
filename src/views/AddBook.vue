<template>
  <div>
    <div>
      <label for="title">Title :</label>
      <input type="text" v-model="book.title" />
    </div>
    <div>
      <label for="title">Author :</label>
      <input type="text" v-model="book.author" />
    </div>
    <button @click="addBook">Add</button>
  </div>
</template>

<script lang="ts">
import IBook from "@/models/Book";
import { Component, Vue } from "vue-property-decorator";
import BookService from "@/services/BookService";

const bookService = new BookService();

@Component({
  name: "AddBook",
})
export default class AddBook extends Vue {
  book: IBook = {
    title: "",
    author: "",
  };

  async addBook() {
    await bookService.addBook(this.book);
    this.book.title = "";
    this.book.author = "";
  }
}
</script>
