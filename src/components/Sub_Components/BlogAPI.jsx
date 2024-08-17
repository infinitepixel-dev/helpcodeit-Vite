
const VITE_BLOG_API_KEY = import.meta.env.VITE_BLOG_API_KEY;
const VITE_BLOG_SPACE_ID = import.meta.env.VITE_BLOG_SPACE_ID;
const BLOG_URL = `https://cdn.contentful.com/spaces/${VITE_BLOG_SPACE_ID}/environments/master/entries?access_token=${VITE_BLOG_API_KEY}`;


const getPosts = async () => {
    console.log('BLOG_URL:', BLOG_URL);
    console.log('VITE_BLOG_API_KEY:', VITE_BLOG_API_KEY);
    console.log('VITE_BLOG_SPACE_ID:', VITE_BLOG_SPACE_ID);
    const response = await fetch(BLOG_URL);
    const data = await response.json();
    console.log(data);
    return data;
}



export default getPosts;