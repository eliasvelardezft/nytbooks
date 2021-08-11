<template>
  <div class="container">
    <div class="card">
      <div class="heading">
        <h4>NYTimes Books</h4>
      </div>
      <Categories @category-selected="showCategory"></Categories>
      <div class="search">
        <form action="" v-on:submit.prevent="searchBook">
          <input id="book-title-input" 
          type="text" class="form-control" placeholder="Search by title" v-model='bookTitle'/>
          <button class="btn" type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="content">
      <div v-for="(book, index) in booksResult" :key="index">
        <Book :book="book"></Book>
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
        .catch(() => {
          alert("There was an error fetching the books.");
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
@import "../styles/main.scss";

.container {
  margin: 36px auto;
  width: 100%;
  min-height: 90vh;
  background-color: white;
  border-radius: 16px;
}

.card {
  padding: 24px;
  box-shadow: -1px 3px 21px -2px rgba(0,0,0,0.54);
  border-radius: 16px;  
  width: 50%;
  margin: 0 auto;
  position: relative;
  top: 15px;
}

h4 {
  font-size: 35px;
}

form {
  display: flex;
  justify-content: space-between;
}


#book-title-input {
  width: 60%;
  min-width: 300px;
  max-width: 500px;
  font-size: 20px;
}


.btn {
  border-radius: 10px;
  border: none;
  background-color: var(--accentBg);
  color: #001c31;
  font-size: 18px;
  padding: 4px 10px;
  transition: 0.5s;
  &:hover {
    background-color: var(--accentBgRed);
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

.content {
  margin: 50px 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
