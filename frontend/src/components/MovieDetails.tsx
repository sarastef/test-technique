import Image from "next/image";
import { getData } from "@/utils/fetch";
import { Movie } from "@/utils/types";

export const MovieDetails = async ({ id }: { id: number }) => {
  const movie = (await getData(`${id}`)) as Movie;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {movie && (
        <>
          <h1>{movie?.original_title}</h1>
          {movie?.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
            />
          )}
          <p>{movie?.overview}</p>
        </>
      )}
    </div>
  );
};
