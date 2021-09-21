import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";
import Banner from "./components/Banner/Banner";
import Internships from "./components/Sections/Internships";
import Trainings from "./components/Sections/Trainings";
import Jobs from "./components/Sections/Jobs";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Banner />
      <Internships />
      <Trainings />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
