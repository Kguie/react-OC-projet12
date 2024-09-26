import { DashboardUserProps } from "../../utils/hooks/api/user";

/**
 * Affiche la partie supérieur du tableau de bord
 */
export default function DashboardHead({
  userData: data,
  isLoading,
  error,
}: DashboardUserProps): React.ReactElement {
  const isInfosAvailable = !isLoading && !error && data?.userInfos;

  const UserName: React.FC = () =>
    isInfosAvailable ? (
      <span className="head__title__name">{data.userInfos.firstName}</span>
    ) : null;

  const YesterdayOverview: React.FC = () =>
    isInfosAvailable ? (
      <p className="head__yesterday">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    ) : null;

  return (
    <div className="head">
      <p className="head__title">
        <span className="head__title__greetings">Bonjour </span>
        <UserName />
      </p>
      <YesterdayOverview />
    </div>
  );
}
