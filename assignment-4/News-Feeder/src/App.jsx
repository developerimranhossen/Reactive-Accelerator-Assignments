import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

import { NewsProvider } from "./provider/NewsProvider";

function App() {
  return (
    <>
      <NewsProvider>
        <Navbar />
        <NewsBoard />
        <Footer />
      </NewsProvider>
    </>
  );
}

export default App;
