import { useGetUser } from "../../../utils/hooks/api/user";
import DashboardAsideCard from "./dashboardAsideCard/DashboardAsideCard";

export default function DashboardAside() {
  const { data } = useGetUser(12);

  return (
    <section className="dashboard-aside">
      <DashboardAsideCard
        title={"Calories"}
        count={
          data?.keyData.calorieCount
            ? data?.keyData.calorieCount / 1000
            : undefined
        }
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
