import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { useGetUserPerformance } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";
import DashboardActivityRadarTick from "./DashboardActivityRadarTick";

export default function DashboardActivityRadar() {
  const { data, isLoading, error } = useGetUserPerformance(12);

  const isUnavailable = isLoading || error || !data?.data;

  function formatTick(value: number) {
    const kindValue =
      data?.kind && (data.kind as Record<string, string>)[String(value)];

    return kindValue || String(value);
  }

  if (isUnavailable) {
    return (
      <section className="dashboard-activity-radar">
        <Skeleton />
      </section>
    );
  }

  return (
    <section className="dashboard-activity-radar">
      <ResponsiveContainer aspect={1} height={"90%"}>
        <RadarChart data={data.data} startAngle={210} endAngle={570}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            tickFormatter={formatTick}
            tick={({ payload, x, y, index }) => (
              <DashboardActivityRadarTick
                data={data}
                x={x}
                y={y}
                payload={payload}
                index={index}
              />
            )}
            tickSize={0}
            tickLine={false}
            dataKey="kind"
          />
          <Radar dataKey="value" fill=" #FF0101B2" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
