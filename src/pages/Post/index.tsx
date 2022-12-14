import {useParams} from "react-router-dom";
import { ArrowSquareUpRight, Calendar, CaretLeft, ChatsTeardrop, GithubLogo } from "phosphor-react";
import { PostContent, PostCover } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { daysBetweenDates } from "../../utils/formatter";


type PostInfoType = {
  html_url: string, 
  title: string, 
  user: any, 
  comments: number, 
  created_at: string, 
  body: string
}


export function Post() {
  const [content, setContent] = useState<PostInfoType>();
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();
  const print = console.log.bind(console);

  async function fetchIssue(id?: string) {
    if (!id) {
      setNotFound(true);
      return;
    }

    const response = await api.get(`/repos/pliniocode/github-blog-challenge/issues/${id}`);
    if (response.data.message) {
      setNotFound(true);
      return;
    } else {
      const {html_url, title, user, comments, created_at, body} = response.data;
      const data = {html_url, title, user, comments, created_at, body};
      setNotFound(false);
      setContent(data);
    }
  }

  useEffect(() => {
    fetchIssue(id);
  }, []);
  print(content);

  if (!content) {
    return (
      <PostCover>
        <h2>Not Fount</h2>
      </PostCover>
    )
  } else {
    return (
      <>
      <PostCover>
        <div className="post-header">
          <a href="/">
            <CaretLeft size={18} weight="bold" className="profile-info-label"/>
            voltar
          </a>
          <a href={content.html_url}>
            ver no github 
            <ArrowSquareUpRight size={18} weight="bold" /> 
          </a>
        </div>

        <h1>{content.title}</h1>

        <ul className="info">
          <li><GithubLogo size={18} weight="bold" className="post-info"/> {content.user.login}</li>
          <li><Calendar  size={18} weight="bold" className="post-info"/> Há {daysBetweenDates(content.created_at)} dia(s)</li>
          <li><ChatsTeardrop size={18} weight="bold" className="post-info"/> {content.comments} comentários</li>
        </ul>
      </PostCover>

      <PostContent>
        <p>{content.body}</p>
      </PostContent>
      </>
    )
  }  
}