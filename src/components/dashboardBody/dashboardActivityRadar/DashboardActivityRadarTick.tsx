import { UserPerformanceProps } from "../../../utils/hooks/api/user";

type Props = {
  x: number;
  y: number;
  payload: {
    value: number;
  };
  index: number;
  data: UserPerformanceProps;
};

export default function DashboardActivityRadarTick({
  x,
  y,
  payload,
  index,
  data,
}: Props) {
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
      data.kind && (data.kind as Record<string, string>)[String(value)];
    if (kindValue) {
      return (activitiesMap as Record<string, string>)[kindValue];
    }
    return String(value);
  }

  function getTickAlignment(value: number): {
    textAnchor: string;
    alignmentBaseline: React.SVGAttributes<SVGTextElement>["alignmentBaseline"];
    dx?: number;
  } {
    switch (value) {
      case 0:
        return {
          textAnchor: "end",
          alignmentBaseline: "text-after-edge",
          dx: 0,
        };
      case 1:
        return { textAnchor: "end", alignmentBaseline: "hanging", dx: 10 };
      case 2:
        return {
          textAnchor: "middle",
          alignmentBaseline: "text-before-edge",
        };
      case 3:
        return { textAnchor: "start", alignmentBaseline: "hanging", dx: -10 };
      case 4:
        return {
          textAnchor: "start",
          alignmentBaseline: "text-after-edge",
          dx: -10,
        };
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
      dx={getTickAlignment(index).dx || 0}
      textAnchor={getTickAlignment(index).textAnchor}
      alignmentBaseline={getTickAlignment(index).alignmentBaseline}
      fill="#ffff"
      className="dashboard-activity-radar__tick">
      {formatTickValue(payload.value)}
    </text>
  );
}
