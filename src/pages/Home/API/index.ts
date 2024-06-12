import axiosBirthday from "../../../API/axios";
import { People } from "./types";

export const getPeople = async () => {
  const response = await axiosBirthday.get<People[]>(
    "/7b9ac448-1960-49c6-881c-fb5e1911cb67"
  );

  return response.data;
};
