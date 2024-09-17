import { NextResponse } from "next/server";
import { getMovieById, getMovieIndexById } from "@/lib/data";
import { getAllMovies } from "@/lib/data";

export async function GET(request, { params }) {
  const movieId = parseInt(params?.id);
  // const movieId = Number(params?.id) // or use it
  const movie = await getMovieById(movieId);
  // console.log(typeof movieId);

  return NextResponse.json(movie);
}

export async function PATCH(request, { params }) {
  const movie = await request.json();
  const movieId = parseInt(params?.id);

  const movieIndex = await getMovieIndexById(movieId);

  getAllMovies().results[movieIndex].title = movie.title;

  return NextResponse.json(getAllMovies().results[movieIndex]);
}

export async function DELETE(request, { params }) {
  const movieId = parseInt(params?.id);

  const movieIndex = await getMovieIndexById(movieId);

  const movieToDelete = getAllMovies().results[movieIndex];

  getAllMovies().results.splice(movieIndex, 1);

  return NextResponse.json(movieToDelete);
}
