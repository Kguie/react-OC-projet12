import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { useEffect, useRef, useState } from "react";

import { useGetUserAverageSessions } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";

type CustomTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: number;
};

export default function DashboardUserActivity() {
  const { data, isLoading, error } = useGetUserAverageSessions(12);

  const filterRef = useRef<HTMLDivElement>(null);

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (filterRef.current) {
      if (clickedIndex === null) {
        filterRef.current.style.width = "0px";
      } else {
        filterRef.current.style.width = `${100 * ((6 - clickedIndex) / 6)}%`;
      }
    }
  }, [clickedIndex]);

  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length && label) {
      setClickedIndex(label);
      return (
        <div
          className=""
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            border: "1px solid #ccc",
          }}>
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    setClickedIndex(null);
    return null;
  };

  const days = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <section className="dashboard-user-activity">
      {isLoading || error ? (
        <Skeleton />
      ) : (
        <>
          <div className="dashboard-user-activity__title-wrapper">
            <h2 className="dashboard-user-activity__title">
              Durée moyenne des sessions
            </h2>
          </div>

          <ResponsiveContainer width={"100%"} height={"57%"}>
            <LineChart
              margin={{ right: 0, left: 0, bottom: 5 }}
              data={data?.sessions}>
              <Line
                dot={{ r: 0 }}
                activeDot={{ r: 2 }}
                cursor={"pointer"}
                type="natural"
                dataKey="sessionLength"
                stroke="#ffffff"
              />
              <Tooltip cursor={false} content={<CustomTooltip />} />
            </LineChart>
          </ResponsiveContainer>

          <div className="dashboard-user-activity__days-row">
            {days.map((day, index) => (
              <p className="dashboard-user-activity__days-row__day" key={index}>
                {day}
              </p>
            ))}
          </div>
        </>
      )}
      <div
        ref={filterRef}
        className="dashboard-user-activity__filter dashboard-user-activity__filter"></div>
    </section>
  );
}
