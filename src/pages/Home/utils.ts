import { People } from "./API/types";

/**
 * Calculate age based on the birth-date
 * @param date - birth-date in string format
 * @returns age in years
 *
 * @example
 * calculateAge("1990-01-01") // 31
 *
 */
export const calculateAge = (date: string) => {
  const today: Date = new Date();
  const birthDate: Date = new Date(date);

  let age = today.getFullYear() - birthDate.getFullYear(); // age in this year

  const birthdayHappened = birthDate.getMonth() - today.getMonth() + 1 < 0; // did the birthday happen this year?

  !birthdayHappened && age--;

  return age;
};

/**
 * Sort people based on their birthday
 * @param people - array of people
 * @returns sorted array of people
 *
 * @example
 * sortPeople(people) // sorted array of people
 *
 */
export const sortPeople = (people: People[]) => {
  return people.sort((a, b) => {
    const [, aMonth, aDay] = a.birthday.split("-");
    const [, bMonth, bDay] = b.birthday.split("-");

    return Number(aMonth) - Number(bMonth) || Number(aDay) - Number(bDay);
  });
};

/**
 * Check if the given date is today
 * @param date - date in string format
 * @returns boolean
 *
 * @example
 * isToday("2021-09-10") // false
 *
 */
export const isToday = (date: string) => {
  const today = new Date();
  const [, birthMonth, birthDay] = date.split("-");

  return (
    today.getMonth() + 1 === Number(birthMonth) &&
    today.getDate() === Number(birthDay)
  );
};

/**
 * Get people who have birthdays today
 * @param people - array of people
 * @returns array of people who have birthdays today
 *
 * @example
 * getTodayBirthdays(people) // array of people who have birthdays today
 *
 */
export const getTodayBirthdays = (people: People[]) =>
  people.filter((person) => isToday(person.birthday));
