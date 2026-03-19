import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}){

    const url = baseUrl;

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogs() {
        try {
            setLoading(true);
            const res = await fetch(`${url}?page=${page}`);
            const data = await res.json();
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