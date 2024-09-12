import { DashboardUserProps } from "../../utils/hooks/api/user";

export default function DashboardHead({
  userData: data,
  isLoading,
  error,
}: DashboardUserProps) {
  return (
    <div className="head">
      <p className="head__title">
        <span className="head__title__greetings">Bonjour </span>
        {!isLoading && !error && data?.userInfos.firstName && (
          <span className="head__title__name">{data?.userInfos.firstName}</span>
        )}
      </p>
      {!isLoading && !error && data && (
        <p className="head__yesterday">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
      )}
    </div>
  );
}
