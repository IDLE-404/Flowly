import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/pages/home/Home.page";
import DefaultLayout from './laout/DefaultLaout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
