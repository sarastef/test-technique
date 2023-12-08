import { fetchData } from "@/utils/fetch";
import { Response } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";

export const MoviesSuggestion = async ({ id }: { id: number }) => {
  const data = (await fetchData(`movie/${id}/recommendations`)) as Response;
  const movies = data.results;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="mb-10">Similar Movies</h1>
      {movies && (
        <ul className="flex flex-col items-center mb-10">
          {movies?.map((movie) => (
            <li key={movie.id} className="flex flex-col items-center mb-10">
              <Link
                href={`/movie/${movie.id}`}
                className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
              >
                {movie?.poster_path && (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                    height={300}
                  />
                )}

                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
