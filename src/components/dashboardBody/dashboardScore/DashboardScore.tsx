import { DashboardUserProps } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";

export default function DashboardScore({
  userData,
  isLoading,
  error,
}: DashboardUserProps) {
  return (
    <section className="dashboard-score">
      <Skeleton />
    </section>
  );
}
