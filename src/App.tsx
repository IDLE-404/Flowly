import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/pages/home/Home.page";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
