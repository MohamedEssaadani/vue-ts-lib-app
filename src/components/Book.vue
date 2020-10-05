<template>
  <div class="book-wrapper">
    <div class="book-title">
      {{ book.title }}
    </div>
    <div class="book-author">
      {{ book.author }}
    </div>
    <div class="book-created">
      {{ book.createdAt | humanize }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IBook from "@/models/Book";

@Component({
  name: "Book",
})
export default class Book extends Vue {
  @Prop({ required: true })
  book!: IBook;
}
</script>

<style scoped lang="scss">
.book-wrapper {
  margin: 0.8rem;
  padding: 0.4rem;
  border: 1px solid #555;
  border-radius: 1rem;
}

.book-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.book-author {
  color: #333;
  font-size: 1rem;
}

.book-created {
  font-size: 0.8;
}
</style>
