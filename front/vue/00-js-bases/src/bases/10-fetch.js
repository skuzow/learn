const apiKey = 'ZGQMZaqyO3NIfx6Ixu0WoV11RuQqXjCa';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then(resp=> resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  });
