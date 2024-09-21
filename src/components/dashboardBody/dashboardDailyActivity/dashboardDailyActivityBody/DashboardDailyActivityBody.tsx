import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Skeleton from "../../../../utils/skeleton";
import DashboardDailyActivityTooltip from "../dashboardDailyActivityTooltip/DashboardDailyActivityTooltip";

type Props = {
  isUnavailable: boolean;
  lastDailySessions:
    | {
        day: string;
        kilogram: number;
        calories: number;
      }[]
    | null;
  caloriesNormalizationValue: number;
  yAxisLimits?: {
    min: number;
    max: number;
  };
};

export default function DashboardDailyActivityBody({
  isUnavailable,
  lastDailySessions,
  yAxisLimits,
  caloriesNormalizationValue,
}: Props) {
  const barRadius: number | [number, number, number, number] | undefined = [
    3, 3, 0, 0,
  ];

  const tickColor = {
    fill: "#9B9EAC",
  };

  if (isUnavailable || !lastDailySessions) {
    return <Skeleton />;
  }

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart data={lastDailySessions}>
        <CartesianGrid vertical={false} strokeDasharray="1 1" />
        <XAxis
          dataKey="day"
          axisLine={{ stroke: "#DEDEDE", strokeWidth: 1 }}
          tickLine={false}
          tickMargin={15}
          tickFormatter={(value: string) =>
            parseInt(value.split("-")[2]).toString()
          }
          tick={tickColor}
        />
        <YAxis
          domain={yAxisLimits ? [yAxisLimits.min, yAxisLimits.max] : undefined}
          tickLine={false}
          tickMargin={35}
          tickCount={4}
          orientation="right"
          tick={tickColor}
          axisLine={false}
        />
        <Tooltip
          content={
            <DashboardDailyActivityTooltip
              normalizationValue={caloriesNormalizationValue}
            />
          }
        />
        <Bar radius={barRadius} dataKey="kilogram" fill="#282D30" barSize={7} />
        <Bar
          radius={barRadius}
          dataKey={(entry) => entry.calories / caloriesNormalizationValue}
          fill="#E60000"
          barSize={7}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
