import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { useGetUserPerformance } from "../../../utils/hooks/api/user";
import Skeleton from "../../../utils/skeleton";

export default function DashboardActivityRadar() {
  const { data, isLoading, error } = useGetUserPerformance(12);

  const CustomTick = ({ x, y, payload, index }: any) => {
    const activitiesMap = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };

    function formatTickValue(value: number): string {
      const kindValue =
        data?.kind && (data.kind as Record<string, string>)[String(value)];
      if (kindValue) {
        return (activitiesMap as Record<string, string>)[kindValue];
      }
      return String(value);
    }

    function getTickAlignment(value: number): {
      textAnchor: string;
      alignmentBaseline: React.SVGAttributes<SVGTextElement>["alignmentBaseline"];
    } {
      switch (value) {
        case 0:
          return { textAnchor: "end", alignmentBaseline: "text-after-edge" };
        case 1:
          return { textAnchor: "end", alignmentBaseline: "hanging" };
        case 2:
          return {
            textAnchor: "middle",
            alignmentBaseline: "text-before-edge",
          };
        case 3:
          return { textAnchor: "start", alignmentBaseline: "hanging" };
        case 4:
          return { textAnchor: "start", alignmentBaseline: "text-after-edge" };
        case 5:
          return { textAnchor: "middle", alignmentBaseline: "text-after-edge" };
        default:
          return { textAnchor: "middle", alignmentBaseline: "auto" };
      }
    }

    return (
      <text
        x={x}
        y={y}
        dx={index === 0 ? -5 : 0}
        textAnchor={getTickAlignment(index).textAnchor}
        alignmentBaseline={getTickAlignment(index).alignmentBaseline}
        fill="#ffff"
        className="dashboard-activity-radar__tick">
        {formatTickValue(payload.value)}
      </text>
    );
  };
  return (
    <section className="dashboard-activity-radar">
      {isLoading || error || !data?.data ? (
        <Skeleton />
      ) : (
        <ResponsiveContainer width={"65%"} height={"100%"}>
          <RadarChart data={data?.data} startAngle={210} endAngle={570}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              tickFormatter={(value: number) => {
                const kindValue =
                  data.kind &&
                  (data.kind as Record<string, string>)[String(value)];
                if (kindValue) {
                  return kindValue.charAt(0).toUpperCase() + kindValue.slice(1);
                }
                return String(value);
              }}
              tick={<CustomTick />}
              tickSize={0}
              tickLine={false}
              dataKey="kind"
            />
            <Radar dataKey="value" fill=" #FF0101B2" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </section>
  );
}
