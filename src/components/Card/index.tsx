import { CardLink } from "./styles";


type PostInfo = {
  url :string, 
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
  const {url, title, created_at, body} = cardContent.cardContent;
  return (
    <CardLink href={url}>
      <div className="card-header">
        <h2>{title}</h2>
        <span>Há {created_at} dia</span>
      </div>
      <p className="content-preview">{body.slice(0,200)}</p>
    </CardLink>
  )
}