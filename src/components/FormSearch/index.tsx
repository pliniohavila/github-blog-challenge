import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { BlogContext } from "../../contexts/BlogContext";
import { FormSearchContainer } from "./styles";


const searchFormSchema = z.object({
  query: z.string()
});

type searchFormInput = z.infer<typeof searchFormSchema>;

export function FormSearch() {
  const { content, fetchIssues } = useContext<any>(BlogContext);
  const { register, handleSubmit } = useForm<searchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssues(data: searchFormInput) {
    await fetchIssues(data.query);
    console.log(data)
  }

  return (
    <FormSearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div className="input-header">
        <h1>Publicações</h1>
        <span>{content.length} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </FormSearchContainer>
  )
}