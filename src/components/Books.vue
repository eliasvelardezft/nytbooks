<template>
  <div class="container">
    <div class="card">
      <div class="heading">
        <h4 class="title">NYTimes Books</h4>
      </div>
      <Categories @category-selected="showCategory"></Categories>
      <div class="search">
        <form action="" v-on:submit.prevent="searchBook">
          <input type="text" class="form-control" placeholder="Search by title" v-model='bookTitle'/>

        </form>
      </div>
      <div class="content">
        <ul>
          <li v-for="(book, index) in booksResult" :key="index">
            <Book :book="book"></Book>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from './Categories.vue';
import Book from './Book.vue';
import urls from '../apiUrls';
import { get } from '../functions';

export default {
  data() {
    return {
      bookTitle: '',
      selectedCategory: null,
      booksResult: []
    }
  },
  methods: {
    searchBook() {
      const apiKey = process.env.VUE_APP_API_KEY;
      get(`${urls.getMoviesByList}/${this.selectedCategory}.json`, apiKey, `title=${this.bookTitle}`)
        .then(data => {
          this.booksResult = data.results.books.filter(b => b.title.toLowerCase().includes(this.bookTitle.toLowerCase()));
        })
        .catch(err => {
          alert("There was an error fetching the books.");
          console.error(err);
        })
    },
    showCategory(cat) {
      this.selectedCategory = cat;
      if(this.bookTitle.length) {
        this.searchBook();
      }
    }
  },
  computed: {},
  components: {
    Categories,
    Book
  }

}

</script>

<style scoped lang="scss">
.container {
  z-index: 1;
  margin: 36px auto;
  max-width: 826px;
  background-color: white;
}

.card {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 24px;
}

.list {
  > li {
    &:not(:last-child) {
      margin-bottom: 18px;
    }
    > a {
      color: #0a5b8c;
      display: block;
      margin-bottom: 6px;
    }

    > span {
      color: rgba(#3b4242, 0.7);
      font-size: 12px;
    }
  }
}

.btn {
  color: #fff;
  cursor: pointer;
  background-color: #117a8b;
  border: 1px solid transparent;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: #138496;
    border-color: #117a8b;
  }
}

.heading {
  margin-bottom: 12px;

  .title {
    font-size: 18px;
    font-weight: 600;
  }
}
.search {
  margin-bottom: 24px;
  .form-control {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    outline: 0;
    box-shadow: none;
    padding: 6px 0;
    width: 100%;
  }
}
</style>
