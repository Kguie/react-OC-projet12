import { useEffect } from "react";

export type DashboardUserActivityTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  label?: number;
  onSetFilterWidth: (width: string) => void;
};

/**
 * Affiche tooltip du graphique d'activité général
 */
export default function DashboardUserActivityTooltip({
  active,
  payload,
  label,
  onSetFilterWidth,
}: DashboardUserActivityTooltipProps): React.ReactElement | null {
  const isActive = active && payload?.length && label;

  useEffect(() => {
    if (active && label !== undefined && label !== null) {
      const newWidth = `${100 * ((6 - label) / 6)}%`;
      onSetFilterWidth(newWidth);
    } else {
      onSetFilterWidth("0px");
    }
  }, [active, label, onSetFilterWidth]);

  if (!isActive) {
    return null;
  }

  return (
    <div className="dashboard-user-activity__tooltip">
      <p>{`${payload[0].value} min`}</p>
    </div>
  );
}
