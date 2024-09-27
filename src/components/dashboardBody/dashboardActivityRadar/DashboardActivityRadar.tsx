import { PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

import { useGetUserPerformance } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton/Skeleton";

/**
 * Affiche les performance de l'utilisateur dans le graphique radar
 * */
export default function DashboardActivityRadar(): React.ReactElement {
  const { data, isLoading, error } = useGetUserPerformance(12);

  const isUnavailable = isLoading || error || !data?.data;

  if (isUnavailable) {
    return (
      <section className="dashboard-activity-radar">
        <Skeleton />
      </section>
    );
  }

  return (
    <section className="dashboard-activity-radar">
      <div className="dashboard-activity-radar__ticks dashboard-activity-radar__ticks--horizontal dashboard-activity-radar__ticks--horizontal--top">
        <p>Intensité</p>
      </div>
      <div className="dashboard-activity-radar__ticks dashboard-activity-radar__ticks--vertical dashboard-activity-radar__ticks--vertical--left">
        <div className="dashboard-activity-radar__ticks--vertical__wrapper">
          <p>Cardio</p>
          <p>Energie</p>
        </div>
      </div>
      <div className="dashboard-activity-radar__ticks dashboard-activity-radar__ticks--horizontal dashboard-activity-radar__ticks--horizontal--bottom">
        <p>Endurance</p>
      </div>
      <div className="dashboard-activity-radar__ticks dashboard-activity-radar__ticks--vertical dashboard-activity-radar__ticks--vertical--right">
        <div className="dashboard-activity-radar__ticks--vertical__wrapper">
          <p>Force</p>
          <p>Vitesse</p>
        </div>
      </div>
      <ResponsiveContainer width={"75%"} height={"95%"}>
        <RadarChart data={data.data} startAngle={210} endAngle={570}>
          <PolarGrid radialLines={false} />
          <Radar dataKey="value" fill=" #FF0101B2" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
