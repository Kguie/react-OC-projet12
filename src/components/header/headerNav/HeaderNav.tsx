/**
 * Affiche le navigateur du header
 */
export default function HeaderNav(): React.ReactElement {
  return (
    <nav className="nav">
      <a className="nav__link" href="/#">
        Accueil
      </a>
      <a className="nav__link" href="/#">
        Profil
      </a>
      <a className="nav__link" href="/#">
        Réglages
      </a>
      <a className="nav__link" href="/#">
        Communauté
      </a>
    </nav>
  );
}
