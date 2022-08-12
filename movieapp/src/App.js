import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navigation from "./component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

// Provider => 스토어를 감싸주기위함

function App() {
  return (
    <div>
      <Navigation />
      {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
      {/* </Provider> */}
    </div>
  );
}

export default App;
