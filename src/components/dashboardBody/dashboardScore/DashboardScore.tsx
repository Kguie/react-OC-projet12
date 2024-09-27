import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { useMemo } from "react";

import { DashboardUserProps } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton/Skeleton";

/**
 * Affiche le score de l'utilisateur
 */
export default function DashboardScore({
  userData,
  isLoading,
  error,
}: DashboardUserProps): React.ReactElement {
  const isUnavailable =
    isLoading || error || (!userData?.todayScore && !userData?.score);

  const userScoreValue = userData?.todayScore || userData?.score;

  const validScore = typeof userScoreValue === "number" ? userScoreValue : 0;

  const userScore = useMemo(
    () => [
      { score: 1, fill: "#ffffff" },
      { score: validScore, fill: "#FF0000" },
    ],
    [validScore]
  );

  if (isUnavailable) {
    return (
      <section className="dashboard-score">
        <Skeleton />
      </section>
    );
  }

  return (
    <section className="dashboard-score">
      <div className="dashboard-score__wrapper">
        <p className="dashboard-score__title">Score</p>
        <div className="dashboard-score__center">
          <p className="dashboard-score__center__number">{validScore * 100}%</p>
          <p className="dashboard-score__center__legend">de votre objectif</p>
        </div>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <RadialBarChart
            cx="50%"
            cy="55%"
            innerRadius="75%"
            outerRadius="90%"
            startAngle={90}
            endAngle={450}
            barSize={10}
            data={userScore}>
            <RadialBar dataKey="score" maxBarSize={10} cornerRadius={50} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
