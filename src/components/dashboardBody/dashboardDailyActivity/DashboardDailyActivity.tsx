import { useMemo } from "react";

import { useGetUserActivity } from "../../../utils/hooks/api/user";
import DashboardDailyActivityBody from "./dashboardDailyActivityBody/DashboardDailyActivityBody";

export default function DashboardDailyActivity() {
  const { data, isLoading, error } = useGetUserActivity(12);

  const caloriesNormalizationValue: number = 5;

  const lastDailySessions = useMemo(() => {
    if (data?.sessions) {
      const numberOfElements =
        data.sessions.length <= 10 ? data.sessions.length : 10;
      return data.sessions.slice(-numberOfElements);
    } else {
      return null;
    }
  }, [data]);

  const yAxisLimits = useMemo(() => {
    if (lastDailySessions) {
      const sessionValues = [
        ...lastDailySessions.map(({ kilogram }) => kilogram),
        ...lastDailySessions.map(
          ({ calories }) => calories / caloriesNormalizationValue
        ),
      ];

      const max = Math.max(...sessionValues) + 1;
      const min = Math.min(...sessionValues);

      return { min: min > 0 ? min - 1 : min, max };
    } else {
      return undefined;
    }
  }, [lastDailySessions]);

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
        <DashboardDailyActivityBody
          isUnavailable={isLoading || !!error}
          lastDailySessions={lastDailySessions}
          caloriesNormalizationValue={caloriesNormalizationValue}
          yAxisLimits={yAxisLimits}
        />
      </div>
    </section>
  );
}
