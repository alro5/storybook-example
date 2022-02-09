import useSWR from "swr";
import { fetcher } from "../utils/shared";

export default function Users(): JSX.Element {
  const { data, error } = useSWR(
    "https://randomuser.me/api/?results=100&seed=users",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.results.map((item: any) => {
          return (
            <li key={`user-name-${item.name.first}`}>{item.name.first}</li>
          );
        })}
      </ul>
    </div>
  );
}
