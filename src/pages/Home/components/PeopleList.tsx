import { FC } from "react";
import { PeopleListProps } from "../types";
import styles from "./PeopleList.module.css";
import { DEFAULT_AVATAR_URL } from "../constants";
import { calculateAge, getTodayBirthdays, isToday, sortPeople } from "../utils";

const PeopleList: FC<PeopleListProps> = ({ people, onlyToday = false }) => {
  if (onlyToday) people = getTodayBirthdays(people);
  return (
    <ul className={styles.list}>
      {sortPeople(people).map((person) => {
        const { id, name, birthday, image } = person;
        return (
          <li key={id} className={styles.person}>
            <img src={image ? image : DEFAULT_AVATAR_URL} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{calculateAge(birthday)} years</p>
            </div>
            {isToday(birthday) && !onlyToday && (
              <span className={styles.partyIcon}>🎉</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default PeopleList;
