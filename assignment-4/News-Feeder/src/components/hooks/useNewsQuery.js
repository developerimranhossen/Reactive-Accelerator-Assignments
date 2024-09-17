import { useEffect, useState } from "react";
const useNewsQuery = () => {
  const [newsData, setNewsData] = useState(null);
  const [newsCategory, setNewsCategory] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [inputValue, setInputValue] = useState("");

  const fetcNewsData = async (newsCategory) => {
    if (newsCategory) {
      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${newsCategory}`
      );

      const data = await response.json();
      setNewsData(data);
    } else {
      const response = await fetch(`http://localhost:8000/v2/top-headlines`);

      const data = await response.json();
      setNewsData(data);
    }
  };

  const fetchSearchData = async (searchCategory) => {
    if (searchCategory) {
      const response = await fetch(
        `http://localhost:8000/v2/search?q=${searchCategory}`
      );

      const data = await response.json();
      setNewsData(data);
    }
  };

  useEffect(() => {
    fetcNewsData(newsCategory);
    fetchSearchData(searchCategory);
  }, [newsCategory, searchCategory]);

  const handleNewsCategory = (newsArg) => {
    setNewsCategory(newsArg);
    setSearchCategory("");
    setInputValue("");
  };
  const handleSearchCategory = (searchArg) => {
    setSearchCategory(searchArg);
  };

  return {
    newsData,
    handleNewsCategory,
    handleSearchCategory,
    inputValue,
    setInputValue,
  };
};

export { useNewsQuery };
