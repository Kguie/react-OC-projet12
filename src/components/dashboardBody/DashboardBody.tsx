import { DashboardUserProps } from "../../utils/hooks/api/user";
import DashboardActivityRadar from "./dashboardActivityRadar/DashboardActivityRadar";
import DashboardAside from "./dashboardAside/DashboardAside";
import DashboardDailyActivity from "./dashboardDailyActivity/DashboardDailyActivity";
import DashboardScore from "./dashboardScore/DashboardScore";
import DashboardUserActivity from "./dashboardUserActivity/DashboardUserActivity";

/**
 * Affiche la le corps de la page avec tous les graphiques
 */
export default function DashboardBody({
  userData,
  isLoading,
  error,
}: DashboardUserProps): React.ReactElement {
  return (
    <div className="dashboard-body">
      <div className="dashboard-body__main">
        <DashboardDailyActivity />
        <div className="dashboard-body__main__charts-row">
          <DashboardUserActivity />
          <DashboardActivityRadar />
          <DashboardScore
            userData={userData}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
      <DashboardAside />
    </div>
  );
}
