import { PostContent, PostCover } from "./styles";
import { ArrowSquareUpRight, Calendar, CaretLeft, ChatsTeardrop, GithubLogo } from "phosphor-react";


export function Post() {
  return (
    <>
    <PostCover>
      <div className="post-header">
        <a href="#">
          <CaretLeft size={18} weight="bold" className="profile-info-label"/>
          voltar
        </a>
        <a href="#">
          ver no github 
          <ArrowSquareUpRight size={18} weight="bold" /> 
        </a>
      </div>

      <h1>JavaScript data types and data structures</h1>

      <ul className="info">
        <li><GithubLogo size={18} weight="bold" className="post-info"/> cameronwll</li>
        <li><Calendar  size={18} weight="bold" className="post-info"/> Há 1 dia</li>
        <li><ChatsTeardrop size={18} weight="bold" className="post-info"/> 5 comentários</li>
      </ul>
    </PostCover>

    <PostContent>
      <p>
      Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

      </p>
    </PostContent>
    </>
  )
}