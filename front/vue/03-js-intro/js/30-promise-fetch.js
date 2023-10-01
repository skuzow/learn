// promise fetch
const url = "https://jsonplaceholder.typicode.com/comments";

const consultApi = () => {
  fetch(url)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.error(err))
    .finally(() => console.log('All finished!'));
};

consultApi();
