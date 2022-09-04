import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '28419323-07717efaf215650b1b40134d5';

export const loadImg = async (page, query) => {
    const res = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    const images = res.data.hits.map(img => {
        const { id, largeImageURL, webformatURL, tags } = img;
        return {
            id,
            largeImageURL,
            webformatURL,
            tags
        }
    });
    return images;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
    
    
    