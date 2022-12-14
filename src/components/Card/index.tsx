import { dateFormatter, daysBetweenDates } from "../../utils/formatter";
import { CardLink } from "./styles";


type PostInfo = {
  url :string, 
  number: number,
  title: string, 
  id: number,
  created_at: string, 
  body: string
}

type CardProps = {
  key: number, 
  cardContent: PostInfo,
}


export function Card(cardContent: CardProps) {
  const {number, title, created_at, body} = cardContent.cardContent;
  return (
    <CardLink href={`/post/${number}`}>
      <div className="card-header">
        <h2>{title}</h2>
        <span>Há {daysBetweenDates(created_at)} dia(s)</span>
      </div>
      <p className="content-preview">{body.slice(0,200)}</p>
    </CardLink>
  )
}