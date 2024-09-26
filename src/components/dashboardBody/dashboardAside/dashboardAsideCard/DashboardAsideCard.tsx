import { useMemo } from "react";

import meat from "../../../../assets/icons/meat.svg";
import fire from "../../../../assets/icons/fire.svg";
import burger from "../../../../assets/icons/burger.svg";
import apple from "../../../../assets/icons/apple.svg";
import DashboardAsideCardContent from "./DashboardAsideCardContent";

export type DashboardAsideCardProps = {
  title: string;
  count?: number;
};

/**
 * Affiche la carte dans l'aside du tableau de bord
 */
export default function DashboardAsideCard({
  title,
  count,
}: DashboardAsideCardProps): React.ReactElement {
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

  return (
    <div className="dashboard-aside-card">
      <img className="dashboard-aside-card__head" src={icon} alt={title} />
      <div className="dashboard-aside-card__body">
        <DashboardAsideCardContent
          isCalories={title === "Calories"}
          count={count}
        />
        <p className="dashboard-aside-card__body__title">{title}</p>
      </div>
    </div>
  );
}
