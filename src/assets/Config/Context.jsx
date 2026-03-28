import { createContext, useContext, useState } from "react";
import Api from "./axios";

const NewsContext = createContext()

export function NewsContextProvider({ children }) {

    const [Loading , setLoading] = useState(false)
    const [News , SetNews] = useState([])

    
    // Context.jsx
const FetchData = async (url = '/everything?q=india') => {
    setLoading(true)
    try {
        const response = await Api.get(`${url}&apiKey=${import.meta.env.VITE_NEWS_API}`);
        SetNews(response.data.articles); // Save the data to state!
        setLoading(false)
        return response.data;
    } catch (error) {
        console.error("Fetch error:", error);
        setLoading(false)
    }
}


    const value = {
        News,
        SetNews,
        FetchData,
        Loading
    }

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )

}

export function UseNewsContext(){
    return useContext(NewsContext)
}

