import { useGetUser } from "../../../utils/hooks/api/user";
import DashboardAsideCard from "./dashboardAsideCard/DashboardAsideCard";

/**
 * Affiche l'aside à l'intérieur même du tableau de bord
 */
export default function DashboardAside(): React.ReactElement {
  const { data } = useGetUser(12);

  return (
    <section className="dashboard-aside">
      <DashboardAsideCard
        title={"Calories"}
        count={data?.keyData.calorieCount && data?.keyData.calorieCount / 1000}
      />
      <DashboardAsideCard
        title={"Protéines"}
        count={data?.keyData.proteinCount}
      />
      <DashboardAsideCard
        title={"Glucides"}
        count={data?.keyData.carbohydrateCount}
      />
      <DashboardAsideCard title={"Lipides"} count={data?.keyData.lipidCount} />
    </section>
  );
}
