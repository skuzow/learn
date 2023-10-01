// async fetch
const url = "https://jsonplaceholder.typicode.com/comments";

const consultApi = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err)
  } finally {
    console.log('All finished!')
  }
};

consultApi();
