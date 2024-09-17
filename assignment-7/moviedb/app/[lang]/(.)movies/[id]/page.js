import MovieCardDetails from "@/components/MovieCardDetails";
import { getData } from "@/lib/dictionaries";
import { getDictionary } from "../../dictionaries";
import Modal from "../../../../components/Modal";

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

  return (
    <Modal>
      <MovieCardDetails movie={movie} dic={dic} />
    </Modal>
  );
}

export default MovieDetailsPage;
