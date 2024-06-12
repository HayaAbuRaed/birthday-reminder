import { People } from "./API/types";

export interface PeopleListProps {
  people: People[];
  onlyToday?: boolean;
}
