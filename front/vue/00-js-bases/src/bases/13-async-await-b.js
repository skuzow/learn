import giphyApi from './bases/11-axios';

const getImage = async () => {
  try {
    const { data } = (await giphyApi.get('/random')).data;
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (err) {
    console.error('Error in the request', err);
    throw err;
  }
}

getImage();
