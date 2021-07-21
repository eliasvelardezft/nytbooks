const get = (url, apiKey, ...params) => {
    let paramStr = '';
    params.forEach(p => {
        paramStr += `&${p}`;
    })
    return fetch(`${url}?api-key=${apiKey}${paramStr}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-type': 'application/javascript',
            Accept: 'application/javascript'
        }
    })
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                return res.statusText;
            }
        })
};

export default get;