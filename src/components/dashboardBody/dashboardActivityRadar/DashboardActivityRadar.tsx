import { useGetUserPerformance } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";

export default function DashboardActivityRadar() {
  const { data, isLoading, error } = useGetUserPerformance(12);
  return (
    <section className="dashboard-activity-radar">{/* <Skeleton /> */}</section>
  );
}
