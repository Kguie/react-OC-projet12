import { useGet } from ".";

type UserProps = {
  id: number;
  userInfos: { firstName: string; lastName: string; age: number };
  todayScore: number;
  keyData: {
    calorieCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
  };
};

type UserActivityProps = {
  userId: UserProps["id"];
  sessions: { day: string; kilogram: number; calories: number }[];
};

type UserAverageSessionsProps = {
  userId: UserProps["id"];
  sessions: { day: number; sessionLength: number }[];
};

type UserPerformanceProps = {
  userId: UserProps["id"];
  kind: {
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
  };
  data: {
    value: number;
    kind: number;
  }[];
};

export function useGetUser(userId: number) {
  return useGet<UserProps>(userId + "");
}

export function useGetUserActivity(userId: number) {
  return useGet<UserActivityProps>(`${userId}/activity`);
}

export function useGetUserAverageSessions(userId: number) {
  return useGet<UserAverageSessionsProps>(`${userId}/average-sessions`);
}

export function useGetUserPerformance(userId: number) {
  return useGet<UserPerformanceProps>(`${userId}/performance`);
}
