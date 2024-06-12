import { useEffect, useState } from "react";
import { getPeople } from "../API";
import { People } from "../API/types";

const useGetPeople = () => {
  const [data, setData] = useState<People[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchPeopleFromAPI = async () => {
      try {
        const people = await getPeople();
        setData(people);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeopleFromAPI();
  }, []);

  return { people: data, isFetching: loading, error };
};

export default useGetPeople;
