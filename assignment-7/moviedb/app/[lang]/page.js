import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { getData } from "@/lib/dictionaries";

export default async function Home() {
  const movies = await getData("data");

  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
