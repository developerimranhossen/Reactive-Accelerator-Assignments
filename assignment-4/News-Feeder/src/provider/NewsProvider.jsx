
import { useNewsQuery } from "../components/hooks/useNewsQuery";
import { NewsContext } from "../context/contexts";

const NewsProvider = ({ children }) => {
  const { newsData, handleNewsCategory, handleSearchCategory, inputValue, setInputValue } = useNewsQuery();
  
  return (
    <NewsContext.Provider value={{ newsData, handleNewsCategory, handleSearchCategory, inputValue, setInputValue }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };
