import { MovieDetails } from "@/components/MovieDetails";
import { MoviesSuggestion } from "@/components/MovieSuggestions";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <div>
      <MovieDetails id={params.id} />
      <MoviesSuggestion id={params.id} />
    </div>
  );
}
