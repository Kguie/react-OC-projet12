import Aside from "../../components/aside/Aside";
import DashboardBody from "../../components/dashboardBody/DashboardBody";
import DashboardHead from "../../components/dashboardHead/DashboardHead";
import { useGetUser } from "../../utils/hooks/api/user";

/***
 * Affiche la page du tableau de bord *
 * @returns {React.ReactElement}
 */
export default function Dashboard(): React.ReactElement {
  const { data, isLoading, error } = useGetUser(12);

  return (
    <main className="dashboard">
      <Aside />
      <div className="dashboard__main-wrapper">
        <DashboardHead userData={data} isLoading={isLoading} error={error} />
        <DashboardBody userData={data} isLoading={isLoading} error={error} />
      </div>
    </main>
  );
}
