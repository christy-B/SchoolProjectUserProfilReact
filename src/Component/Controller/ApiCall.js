import { useEffect, useState } from "react";

//appel API
const fetchPosts = async (url, set) => {
    const response = await fetch(url);
    const data = await response.json();
    set(data);
};

export const ApiCall = (apiURL, setData) => {
    useEffect(()=> {
        fetchPosts(apiURL, setData);
    }, []);
};