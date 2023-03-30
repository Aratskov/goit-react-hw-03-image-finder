import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';
const API_KEY = '34039556-33388eb553809646fe0c9f5bf';

export const getSearchImages = (q, page) => {
  return axios
    .get('/api', {
      params: {
        q,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
      },
    })
    .then(res => res.data);
};
