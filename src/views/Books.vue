<template>
  <div>
    <h1>Books List</h1>
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookService from "../services/BookService";
import IBooks from "../models/Book";

const bookService = new BookService();

@Component({
  name: "Books",
})
export default class Books extends Vue {
  //data
  books: IBooks[] = [];

  //Computed Properties
  get booksCount() {
    return this.books.length;
  }

  //Lifecycle Hooks
  async created() {
    this.books = await bookService.getBooks();
  }
}
</script>

<style>
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>
