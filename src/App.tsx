import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";

/**
 * Affichage de l'app
 */
export default function App(): React.ReactElement {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}
