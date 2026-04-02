import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    // const url = baseUrl;

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogs(page = 1, tag = null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(!data.posts || data.posts.length === 0){
                throw new Error("Something went wrong");
            }
            setBlogs(data.posts);
            setTotalPages(data.totalPages);
            setPage(data.page);
        } catch (error) {
            console.log(error, "Error fetching blogs");
            setPage(1);
            setBlogs([]);
            setTotalPages(null);
        } finally{
            setLoading(false);
        }
    }

    const value = {
        page,
        setPage,
        blogs,
        setBlogs,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        fetchBlogs
    }

    useEffect(() => {
        fetchBlogs();
    },[page]);

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}