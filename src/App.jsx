import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import { useSearchParams } from "react-router";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <Navbar searchParams={searchParams} setSearchParams={setSearchParams} />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
