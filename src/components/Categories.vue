/* eslint-disable */
<template>
    <div>
        <select name="categories" id="categories" v-model="selected" @change="passSelectedCategory">
            <option value="">Please select a category</option>
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
                this.categories = data.results.slice(0, 11);
 
            })
            .catch(() => {
                alert("There was an error fetching the categories.");
            })
    }

}
</script>



<style lang="scss" scoped>

select {
    margin-bottom: 20px;
    -webkit-appearance: none;
    appearance: none;
    color: var(--baseFg);
    border: 1px solid var(--baseFg);
    line-height: 1;
    outline: 0;
    padding: 0.65em 2.5em 0.55em 0.75em;
    border-radius: var(--radius);
    background-color: var(--baseBg);
    background-image: linear-gradient(var(--baseFg), var(--baseFg)),
      linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%),
      linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%),
      linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;
    background-position: right 20px center, right bottom, right bottom, right bottom;  

}

</style>