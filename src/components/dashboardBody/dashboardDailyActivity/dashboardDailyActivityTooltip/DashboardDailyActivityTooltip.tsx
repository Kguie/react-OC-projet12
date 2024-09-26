export type DashboardDailyActivityTooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
  normalizationValue: number;
};

/**
 * Affiche le tooltip du graphe d'activités quotidiennes
 */
export default function DashboardDailyActivityTooltip({
  active,
  payload,
  normalizationValue,
}: DashboardDailyActivityTooltipProps): React.ReactElement | null {
  const isActive = active && payload?.length;

  if (!isActive) {
    return null;
  }

  return (
    <div className="daily-activity-tooltip">
      <p>{`${payload[0].value} kg`}</p>
      <p>{`${payload[1].value * normalizationValue} kCal`}</p>
    </div>
  );
}
