import axios from 'axios';

const source = axios.CancelToken.source();

async function fetchData() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1', {
      cancelToken: source.token,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      throw new Error(`Error occurred: ${error.message}`);
    }
  }
}

// När komponenten unmounts:
useEffect(() => {
  return () => {
    source.cancel('Component unmounted'); // Avbryt anropet när komponenten unmounts
  };
}, []);
