import React, { createContext, useState, useEffect } from 'react';

const VITE_BLOG_API_KEY = import.meta.env.VITE_BLOG_API_KEY;
const VITE_BLOG_SPACE_ID = import.meta.env.VITE_BLOG_SPACE_ID;
const BLOG_URL = `https://cdn.contentful.com/spaces/${VITE_BLOG_SPACE_ID}/environments/master/entries?access_token=${VITE_BLOG_API_KEY}`;

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await fetch(BLOG_URL);
            const data = await response.json();
            console.log("Blog Data:", data);
            setPosts(data.items);  // Assuming data.items is an array of posts
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        getPosts();  // Fetch posts when the component mounts
    }, []);

    return (
        <BlogContext.Provider value={{ posts, setPosts }}>
            {children}
        </BlogContext.Provider>
    );
};
