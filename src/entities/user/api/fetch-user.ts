import { User } from "@/entities/user/models/user.types";
import { API_URL } from "@/shared/lib/api-path";

export const fetchUserAPI = async (id: User["id"]) => {
  const response = await fetch(API_URL.USERS_ID(id));
  const userData = await response.json();
  return userData;
};
