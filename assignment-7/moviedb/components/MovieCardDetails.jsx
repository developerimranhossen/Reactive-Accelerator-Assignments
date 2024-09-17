import Image from "next/image";
function MovieCardDetails({ movie, dic }) {
  console.log(movie);

  return (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={movie?.poster_path}
          alt=""
          width="1000"
          height="500"
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image src={movie?.backdrop_path} width="134" height="200" alt="" />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            Godzilla x Kong: The New Empire
          </h2>
          <p className="my-2 text-slate-400 italic">
            Following their explosive showdown, Godzilla and Kong must reunite
            against a colossal undiscovered threat hidden within our world,
            challenging their very existence – and our own.
          </p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>
              {dic.releaseDate} : {movie?.release_date}
            </li>
            <li>
              {dic.averageVote} : {movie?.vote_average}
            </li>
            <li>
              {dic.voteCount} : {movie?.vote_count}
            </li>
            <li>
              {dic.popularity} : {movie?.popularity}
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dic.streamInHd}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dic.downloadInHd}
          </button>
        </div>
      </div>
    </section>
  );
}

export default MovieCardDetails;
