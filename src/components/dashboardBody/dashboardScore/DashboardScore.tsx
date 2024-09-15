import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { DashboardUserProps } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";
import { useMemo } from "react";

export default function DashboardScore({
  userData,
  isLoading,
  error,
}: DashboardUserProps) {
  const userScore = useMemo(
    () => [
      { score: 1, fill: "#ffffff" },
      { score: userData?.todayScore || 0, fill: "#FF0000" },
    ],
    [userData]
  );

  return (
    <section className="dashboard-score">
      {isLoading || error || !userData?.todayScore ? (
        <Skeleton />
      ) : (
        <div className="dashboard-score__wrapper">
          <p className="dashboard-score__title">Score</p>
          <div className="dashboard-score__center">
            <p className="dashboard-score__center__number">
              {userData.todayScore * 100}%
            </p>
            <p className="dashboard-score__center__legend">de votre objectif</p>
          </div>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <RadialBarChart
              cx="50%"
              cy="55%"
              innerRadius="75%"
              outerRadius="90%"
              startAngle={90}
              endAngle={-270}
              barSize={7}
              data={userScore}>
              <RadialBar dataKey="score" maxBarSize={7} cornerRadius={50} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}
