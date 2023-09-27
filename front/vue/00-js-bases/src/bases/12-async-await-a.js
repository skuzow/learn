const myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('We have a value in the promise');
      reject('Error in promise');
    }, 1000);
  });
}

const measureTimeAsync = async () => {
  try {
    console.log('Start');

    const response = await myPromise();
    console.log(response);

    console.log('End');
    return 'End of measure time async';
  } catch (error) {
    // return 'Catch in measure time async';
    throw 'Error in measure time async';
  }
}

measureTimeAsync()
  .then(value => console.log('Successful:', value))
  .catch(err => console.error('Error:', err));
