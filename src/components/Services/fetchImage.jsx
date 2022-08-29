// import axios from 'axios';

const fetchImage = async (query, page) => {
//  const baseUrl = 'https://pixabay.com/api';
  const url = `https://pixabay.com/api?key=28406091-8008b7c1afae3beb3d4e940a7&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
  console.log(url);
  console.log("https://pixabay.com");
  //   try {
//     const response = await axios.get(url);
//     return response.data;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
//   } catch (error) {
//     console.log('Error: ' + error);
//   }
};

export default fetchImage;
