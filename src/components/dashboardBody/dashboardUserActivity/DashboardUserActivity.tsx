import { useGetUserActivity } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";

export default function DashboardUserActivity() {
  const { data, isLoading, error } = useGetUserActivity(12);
  return (
    <section className="dashboard-user-activity">
      <Skeleton />
    </section>
  );
}
