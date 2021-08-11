<template>
    <div class="book-card">
        <div class="book">
            <h2>{{book.author}}</h2>
            <a :href="`https://www.google.com/search?q=${book.author}+${book.title}`">{{book.title}}</a>
            <p>{{book.description}}</p>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Book',
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
@import "../styles/main.scss";

.book-card {
    background: rgb(225,24,76);
    background: linear-gradient(115deg, rgba(225,24,76,1) 0%, rgba(255,102,51,1) 35%, rgba(255,130,118,1) 100%);
    border-radius: 20px;
    margin: 30px;
    height: 200px;
    transition: 0.3s;
    &:hover {
        transform: scale(1.01);
    }
}

.book {
    background: rgba(255, 255, 255, .9);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    height: 90%;
    position: relative;
    top: 10px;
    border-radius: 20px;
    padding: 12px;
    box-shadow: 4px 3px 10px -2px rgba(0,0,0,0.56);

    h2 {
      font-size: 16px;
      margin-bottom: 5px;  
    }
    a {
        margin-bottom: 8px;
        font-size: 25px;
        font-weight: 500;
        text-decoration: underline;
        text-decoration-color: transparent;
        color: var(--baseFg);
        transition: 0.5s;
        &:hover {
            text-decoration-color: var(--accentBgRed)
        }
    }
    p {
        font-weight: 400;
    }
}



</style>

