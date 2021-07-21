const host = 'https://api.nytimes.com/svc/books/v3'

const urls = {
    'getLists': `${host}/lists/names.json`,
    'getMoviesByList': `${host}/lists/current`,
}

export default urls;