import { FC, useState } from "react";
import PeopleList from "./components/PeopleList";
import useGetPeople from "./hooks/useGetPeople";
import styles from "./Home.module.css";

const Home: FC = () => {
  const [onlyToday, setOnlyToday] = useState(false);

  console.log(onlyToday);

  const { people, isFetching } = useGetPeople();

  if (isFetching) return <p>Loading...</p>;

  if (!people) return <p>No people found.</p>;

  const handleCheckboxChange = () => {
    setOnlyToday((prev) => !prev);
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1>{people.length} birthdays</h1>

          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="toggle" onClick={handleCheckboxChange} />
            <label htmlFor="toggle">only today</label>
          </div>
        </div>

        <PeopleList people={people} onlyToday={onlyToday} />
      </section>
    </main>
  );
};

export default Home;
