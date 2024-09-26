import HeaderNav from "./headerNav/HeaderNav";

import logo from "../../assets/fullLogo.svg";

/*Affiche le Header*/
export default function Header(): React.ReactElement {
  return (
    <header className="header">
      <img className="header__logo" alt="Logo SportSee" src={logo} />
      <HeaderNav />
    </header>
  );
}
