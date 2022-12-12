import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { FormSearchContainer } from "./styles";




export function FormSearch() {
  const {content} = useContext<any>(BlogContext);

  return (
    <FormSearchContainer>
      <div className="input-header">
        <h1>Publicações</h1>
        <span>{content.length} publicações</span>
      </div>
      <input 
        type="text" 
        name="search" 
        placeholder="Buscar conteúdo"
      />
    </FormSearchContainer>
  )
}