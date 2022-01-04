const fetchOptions = {
  API_KEY: '224183865-520b97805ca8322c4646aea82',
  BASE_URL: 'https://pixabay.com/api/',
  PAGE: 1,
  ITEMS_PER_PAGE: 12,
};

function fetchApi(query, page) {
  const { API_KEY, BASE_URL, ITEMS_PER_PAGE } = fetchOptions;
  return fetch(`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${ITEMS_PER_PAGE}
`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Nothing was found'));
  });
}

export { fetchApi };

 //import axios from 'axios'; 
//  const API_KEY = '24183865-520b97805ca8322c4646aea82';
// const BASE_URL = 'https://pixabay.com/api/'; 
  
// axios.default.baseURL = BASE_URL;
// axios.default.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// const fetchImgs = async ({ q, page }) => {
//   return await axios.get('', { params: { q, page } });
// };

// export default { fetchImgs };

