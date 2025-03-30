import React from "react";
import useTheme from "../../redux/hooks/useTheme";
import useFetch from "../../utils/hooks/useFetch";

export default function Home() {
  const { loading, data, error } = useFetch("http://localhost:9000/api/users");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(data);
    return <div>Error</div>;
  }
  return (
    <div>
      {data?.data?.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
