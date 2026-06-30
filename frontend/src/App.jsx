import { Routes, Route } from "react-router";
import HomePage from "./pages/homePage";
import CreateNotePage from "./pages/createNotePage";
import DetailNotePage from "./pages/detailNotePage";

const App = () => {
  return (
    <div data-theme="luxury">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNotePage />} />
        <Route path="/note/:id" element={<DetailNotePage />} />
      </Routes>
    </div>
  );
};

export default App;
