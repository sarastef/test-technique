import { MovieDetails } from "@/components/MovieDetails";
import { MovieRating } from "@/components/MovieRating";
import { MoviesSuggestion } from "@/components/MovieSuggestions";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <div>
      <MovieDetails id={params.id} />
      <MovieRating id={params.id} />
      <MoviesSuggestion id={params.id} />
    </div>
  );
}
