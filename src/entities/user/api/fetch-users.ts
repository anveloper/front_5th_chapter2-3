import { UsersData } from "@/entities/post/models";
import { API_URL } from "@/shared/lib/api-path";

export const fetchUsersAPI = async (): Promise<UsersData> => {
  const response = await fetch(API_URL.USERS);
  const data = await response.json();
  return data;
};
