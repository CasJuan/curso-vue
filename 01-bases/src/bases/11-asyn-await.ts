import {giphyApi} from './10-axios';
import type { GIFResponse } from '../interfaces/gif.response';

export const getImage = async () => {
    try {
        const resp = await giphyApi.get<GIFResponse>("/random");
        return resp.data.data.images.downsized_large.url;
    }catch (error) {
        throw 'URL no encontrada'
    }

};



getImage()
    .then((url) => console.log({url}))
    .catch(error => console.log(error))
