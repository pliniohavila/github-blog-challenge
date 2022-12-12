import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";



type PostType = {
  url :string, 
  title: string, 
  id: number,
  created_at: string, 
  body: string
}

type BlogContextType = {
  content: PostType[]
}

type BlogContextProviderProps = {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType);

export function BlogContextProvider({children}: BlogContextProviderProps) {
  const [content, setContent] = useState<PostType[]>([]);

  async function fetchIssues(query?: string) {
    if (!query) {
      query = '';
    }
    const response = await api.get(`/search/issues?q=${query}%20repo:pliniocode/github-blog-challenge`);
    const data = response.data.items.map((issue: any) => {
      const {url, title, id, created_at, body} = issue;
      return {url, title, id, created_at, body};
    });
    setContent(data);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <BlogContext.Provider value={{content}}>
      {children}
    </BlogContext.Provider>
  )
}