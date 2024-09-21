import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";

import { useGetUserAverageSessions } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";
import DashboardUserActivityTooltip from "./DashboardUserActivityTooltip";

export default function DashboardUserActivity() {
  const { data, isLoading, error } = useGetUserAverageSessions(12);

  const [filterWidth, setFilterWidth] = useState<string>("0px");

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  const isUnavailable = isLoading || error || !data?.sessions;

  if (isUnavailable) {
    return (
      <section className="dashboard-user-activity">
        <Skeleton />
      </section>
    );
  }

  return (
    <section className="dashboard-user-activity">
      <div className="dashboard-user-activity__head">
        <h2 className="dashboard-user-activity__head__title">
          Durée moyenne des sessions
        </h2>
      </div>
      <div className="dashboard-user-activity__body">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart margin={{ left: 0, right: 0 }} data={data.sessions}>
            <Line
              dot={{ r: 0 }}
              activeDot={{ r: 2 }}
              cursor={"pointer"}
              type="bump"
              dataKey="sessionLength"
              stroke="#ffffff"
            />
            <Tooltip
              cursor={false}
              content={
                <DashboardUserActivityTooltip
                  onSetFilterWidth={setFilterWidth}
                />
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="dashboard-user-activity__footer">
        {days.map((day, index) => (
          <p className="dashboard-user-activity__footer__day" key={index}>
            {day}
          </p>
        ))}
      </div>
      <div
        style={{ width: filterWidth }}
        className="dashboard-user-activity__filter"></div>
    </section>
  );
}
