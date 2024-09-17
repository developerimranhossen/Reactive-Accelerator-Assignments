import Image from "next/image";
import Link from "next/link";

function MovieCard({ movie }) {
  return (
    <figure className="p-4 border border-black/10 shadow-2xl dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        src={movie.poster_path}
        width="324"
        height="269"
        alt=""
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.original_title}</p>
        <div className="flex items-center space-x-1 mb-5">
          {[...Array(Math.round(movie.vote_average))].map((rating) => (
            <Image key={rating} src="/star.svg" width="14" height="14" alt="" />
          ))}
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`movies/:${movie.id}`}
        >
          <Image src="/tag.svg" alt="" width="19" height="19" />
          <span>Details</span>
        </Link>
      </figcaption>
    </figure>
  );
}

export default MovieCard;
