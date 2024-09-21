import { useMemo } from "react";

import Skeleton from "../../../../utils/skeleton";
import meat from "../../../../assets/icons/meat.svg";
import fire from "../../../../assets/icons/fire.svg";
import burger from "../../../../assets/icons/burger.svg";
import apple from "../../../../assets/icons/apple.svg";

type Props = {
  title: string;
  count?: number;
};

export default function DashboardAsideCard({ title, count }: Props) {
  const formatCaloriesCount = (count: number): string =>
    count.toFixed(3).replace(".", ",");

  const icon = useMemo(() => {
    switch (title.toLowerCase()) {
      case "protéines":
        return meat;
      case "lipides":
        return burger;
      case "calories":
        return fire;
      case "glucides":
        return apple;
      default:
        return "";
    }
  }, [title]);

  const CardContent: React.FC = () => {
    const formattedCount = count
      ? title === "Calories"
        ? `${formatCaloriesCount(count)}kCal`
        : `${count}g`
      : null;
    if (!count) {
      <div className="dashboard-aside-card__body__count--skeleton">
        <Skeleton />
      </div>;
    }
    return (
      <p className="dashboard-aside-card__body__count">{formattedCount}</p>
    );
  };

  return (
    <div className="dashboard-aside-card">
      <img className="dashboard-aside-card__head" src={icon} alt={title} />
      <div className="dashboard-aside-card__body">
        <CardContent />
        <p className="dashboard-aside-card__body__title">{title}</p>
      </div>
    </div>
  );
}
