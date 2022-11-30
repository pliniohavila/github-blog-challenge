import { HeaderComponent } from "./styles";
import Logo from '../../assets/logo.svg';


export function Header() {
  return (
    <HeaderComponent>
      <img src={Logo} />
    </HeaderComponent>
  )
}