<template>
    <div>
        <h2>{{book.author}}</h2>
        <a :href="`https://www.google.com/search?q=${book.author}+${book.title}`">{{book.title}}</a>
        <p>{{book.description}}</p>
        <hr>
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

<style>
a {
    font-size: 20px;
}
</style>