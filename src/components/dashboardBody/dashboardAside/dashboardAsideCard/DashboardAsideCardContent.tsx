import Skeleton from "../../../../utils/skeleton/Skeleton";

export type DashboardAsideCardContentProps = {
  count?: number;
  isCalories: boolean;
};

/**
 * Affiche le contenu de la carte
 */
export default function DashboardAsideCardContent({
  count,
  isCalories,
}: DashboardAsideCardContentProps): React.ReactElement {
  const formatCaloriesCount = (count: number): string =>
    count.toFixed(3).replace(".", ",");

  const formattedCount = count
    ? isCalories
      ? `${formatCaloriesCount(count)}kCal`
      : `${count}g`
    : null;

  if (count === undefined) {
    return (
      <div className="dashboard-aside-card__body__count--skeleton">
        <Skeleton />
      </div>
    );
  }
  return <p className="dashboard-aside-card__body__count">{formattedCount}</p>;
}
