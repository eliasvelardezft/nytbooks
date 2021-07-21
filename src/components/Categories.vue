/* eslint-disable */
<template>
    <div>
        <select name="categories" id="categories" v-model="selected" @change="passSelectedCategory">
            <option v-for="(cat, index) in categories" :value="cat" :key="index">{{cat.display_name}}</option>
        </select>
    </div>
</template>

<script>
import { get } from '../functions';
import urls from '../apiUrls';

export default {
    name: "Categories",
    data() {
        return {
            saludo: "hola",
            categories: [],
            selected: '',
        }
    },
    methods: {
        passSelectedCategory() {
            this.$emit('category-selected', this.selected.list_name_encoded);
        }
    },
    created() {
        const apiKey = process.env.VUE_APP_API_KEY;
        get(urls.getLists, apiKey)
            .then(data => {
                console.log(data);
                this.categories = data.results.slice(0, 11);
 
            })
            .catch(err => {
                alert("There was an error fetching the categories.");
                console.error(err);
            })
    }

}
</script>

<style>

#categories {
    margin-bottom: 20px;
}

</style>