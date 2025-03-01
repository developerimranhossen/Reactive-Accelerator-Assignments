import bookList from "./books.json";
import { useState } from "react";
import Book from "./Book";

export default function Hero() {
  const [books, setBooks] = useState(bookList);
  const [searchTerm, setSearchTerm] = useState("");

  function clickHandler(event) {
    event.preventDefault();
    console.log(searchTerm);
    const filterd = books.filter((book) =>
      book.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setBooks([...filterd]);
  }
  function sortHandler(e) {
    if (e.target.value === "published_asc") {
      const sorted = books.toSorted((a, b) => {
        return a.published - b.published;
      });
      setBooks(sorted);
    }
    if (e.target.value === "published_desc") {
      const toRev = books.toReversed();
      setBooks(toRev);
    }
    if (e.target.value === "name_asc") {
      const sorted = books.toSorted((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setBooks(sorted);
    }
    if (e.target.value === "name_desc") {
      const toRev = books.toReversed();
      setBooks(toRev);
    }
  }
  function isFavHandler(id) {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, isFav: !book.isFav };
        } else {
          return book;
        }
      })
    );
  }

  return (
    <>
      <main className="my-10 lg:my-14">
        {/* <!-- header --> */}
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            {/* <!-- info , title , search --> */}
            <div>
              <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the published
              </h2>
              {/* <!-- Search Box --> */}
              <form>
                <div className="flex">
                  <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] md:min-w-[380px] lg:min-w-[440px]">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                      placeholder="Search Book"
                      required
                      value={searchTerm}
                      onChange={() => setSearchTerm(event.target.value)}
                    />
                    <div className="absolute right-0 top-0 flex h-full items-center">
                      <button
                        type="submit"
                        className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-4 py-2.5 text-sm text-white"
                        onClick={clickHandler}
                      >
                        <svg
                          className="h-[14px] w-[14px]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Search Box Ends --> */}
            </div>
            {/* <!-- sort - filter --> */}
            <div className="flex items-stretch space-x-3">
              {/* <!-- Sort --> */}
              <select
                className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
                name="sortBy"
                id="sortBy"
                onChange={sortHandler}
              >
                <option value="">Sort</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="published_asc">
                  Publication published (Oldest)
                </option>
                <option value="published_desc">
                  Publication published (Newest)
                </option>
              </select>
            </div>
          </div>
        </header>
        {/* <!-- header ends --> */}
        {/* <!-- Book Grid --> */}
        <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* <!-- Book Item --> */}
          {books.map((book) => (
            <Book key={book.id} book={book} onMash={isFavHandler} />
          ))}
        </div>
      </main>
    </>
  );
}
