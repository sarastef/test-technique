import { fetchData } from "@/utils/fetch";
import { Response } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
export default async function Home({
  searchParams,
}: {
  searchParams: { sorted: string };
}) {
  const data = (await fetchData(
    "discover/movie",
    searchParams.sorted
  )) as Response;
  const { results: movies } = data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-10">Latest Movies</h1>

      <Link className="btn" href={"/?sorted=primary_release_date.desc"}>
        Sort Movie
      </Link>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id} className="flex flex-col items-center mb-10">
            <Link
              href={`/movie/${movie.id}`}
              className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
            >
              {movie.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={300}
                />
              )}

              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
