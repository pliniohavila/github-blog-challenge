import { Outlet } from 'react-router-dom';
import { Header } from "../components/Header";
import { ContainerOutlet } from './styles';


export function DefaultLayout() {
  return (
    <>
      <Header />
      <ContainerOutlet>
        <Outlet />
      </ContainerOutlet>
    </>
  )
}