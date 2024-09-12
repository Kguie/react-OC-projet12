import { useGetUserAverageSessions } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";

export default function DashboardDailyActivity() {
  const { data, isLoading, error } = useGetUserAverageSessions(12);
  return (
    <section className="daily-activity">
      <div className="daily-activity__head">
        <p className="daily-activity__head__title">Activité quotidienne</p>
        <ul className="daily-activity__head__keys">
          <li className="daily-activity__head__keys--weight">
            <span>Poids (kg)</span>
          </li>
          <li className="daily-activity__head__keys--calories">
            <span>Calories brûlées (kCal)</span>
          </li>
        </ul>
      </div>
      <div className="daily-activity__body">
        <Skeleton />
      </div>
    </section>
  );
}
