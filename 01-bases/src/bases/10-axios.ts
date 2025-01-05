import axios  from "axios";
import { GIFResponse } from '../interfaces/gif.response';

const apiKey = '0nkT8xdzw3P8Ivy9aS1rHMcrtgUJkJ4M';

const giphyApi = axios.create({
    baseURL:'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});

giphyApi.get<GIFResponse>('/random')
    .then(resp => console.log(resp.data.data.images.downsized_large.url))
    .catch(err => console.log(err));

//export default giphyApi;