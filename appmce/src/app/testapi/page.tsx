"use client";
import { useQuery } from "@tanstack/react-query";
import { WeatherForecast } from "@/types/types";
export default function Page() {
  const { data, error, isLoading } = useQuery<WeatherForecast[], Error>({
    queryKey: ["weather"],
    queryFn: async () => {
      const response = await fetch("http://localhost:5009/weatherforecast", {
        method: "GET",
      });
      if (!response.ok) throw new Error("Error fetching data");

      return response.json();
    },
  });
  console.log(data);
  if (isLoading) return <h1>Fetching data..</h1>;
  if (error) return <h1>Error fetching data</h1>;
  return (
    <>
      <ul className="space-y-3">
        {data?.map((weather, index) => {
          return (
            <li key={index}>
              <h2>{weather.date}</h2>
              <h2>{weather.summary}</h2>
              <h2>{weather.temperatureC}</h2>
              <h2>{weather.temperatureF}</h2>
              <hr />
            </li>
          );
        })}
      </ul>
    </>
  );
}
