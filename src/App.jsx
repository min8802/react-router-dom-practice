import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import A from "./pages/a";
import B from "./pages/b";
import C from "./pages/c";
import NotFound from "./pages/not-found";
import Detail from "./pages/detail";
import Layout from "./components/Layout";
import Admin from "./pages/admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
          <Route path="/admin/:password" element={<Admin />} />
          <Route path="/coin/:id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;