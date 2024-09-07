import HeaderNav from "./headerNav/HeaderNav";

import logo from "../../assets/fullLogo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Logo SportSee" src={logo} />
      <HeaderNav />
    </header>
  );
}
