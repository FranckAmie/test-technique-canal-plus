import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./layout/header/header";
import Home from "./home/home";
import MovieDetail from "./component/MovieDetail";
import { Provider } from 'react-redux';
import getStore from "./config/store";
const store = getStore();

function App() {
    //init state

    // Comportements

    //Rendu
  return (
      <Provider store={store}>
          <div className="App">
              <BrowserRouter>
                  <Header  />
                  <Routes>
                      <Route path='/' element={<Home />}/>
                      <Route path='/movies/:id' element={<MovieDetail />}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>

  );
}

export default App;
