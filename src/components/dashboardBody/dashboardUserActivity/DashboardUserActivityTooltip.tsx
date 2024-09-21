import { useEffect } from "react";

type Props = {
  active?: boolean;
  payload?: { value: number }[];
  label?: number;
  onSetFilterWidth: (width: string) => void;
};

export default function DashboardUserActivityTooltip({
  active,
  payload,
  label,
  onSetFilterWidth,
}: Props) {
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
