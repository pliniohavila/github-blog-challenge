import { FormSearchContainer } from "./styles";


export function FormSearch() {
  return (
    <FormSearchContainer>
      <div className="input-header">
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>
      <input type="text" name="search" placeholder="Buscar conteúdo"/>
    </FormSearchContainer>
  )
}