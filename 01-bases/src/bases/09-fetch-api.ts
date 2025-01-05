const apiKey = '0nkT8xdzw3P8Ivy9aS1rHMcrtgUJkJ4M';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json)
    .then( (body) => console.log({data}))
    .catch(err => console.log(err));