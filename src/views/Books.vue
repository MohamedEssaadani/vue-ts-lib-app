<template>
  <div>
    <h1>Books List</h1>
    <div v-if="booksCount > 0">
      <Book v-bind:book="book" v-for="book in books" :key="book.id">
        {{ book.title }}
      </Book>
    </div>
    <div v-else>
      <h3>No Books Available!</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookService from "../services/BookService";
import IBooks from "../models/Book";
import Book from "@/components/Book.vue";

const bookService = new BookService();

@Component({
  name: "Books",
  components: {
    Book,
  },
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
    try {
      this.books = await bookService.getBooks();
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
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
