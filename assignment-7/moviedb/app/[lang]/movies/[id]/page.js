import MovieCardDetails from "@/components/MovieCardDetails";
import { getData } from "@/lib/dictionaries";
import { getDictionary } from "../../dictionaries";
import { notFound } from "next/navigation";

async function MovieDetailsPage({ params }) {
  let slicedParams = params.id.slice(3);
  const movies = await getData("data");

  const filteredMovie = movies.results.filter(
    (movie) => movie.id == slicedParams
  );
  const movie = filteredMovie[0];
  console.log(params.lang);
  const dic = await getDictionary(params.lang);
  console.log(dic);

  if (filteredMovie.length < 1) {
    return notFound();
  }

  return <MovieCardDetails movie={movie} dic={dic} />;
}

export default MovieDetailsPage;
