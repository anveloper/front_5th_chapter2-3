import { User } from "@/entities/user/models/user.types";

export const fetchUserAPI = async (id: User["id"]) => {
  const response = await fetch(`/api/users/${id}`);
  const userData = await response.json();
  return userData;
};
