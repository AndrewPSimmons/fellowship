import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import routes from "./router"
import Nav from './comps/Nav';
import NotFoundView from './comps/views/NowFoundView';
import d from './d';

const dContext:any = React.createContext(d)
function App() {
  return (
    <dContext.Provider value={dContext}>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            {routes.map((route, i) => {
              return <Route key={i} path={route.path} element={<route.comp />} />
            })}
            {/* <Route path="*" element={<NotFoundView/>}/> */}
          </Routes>
        </Router>
      </div>

    </dContext.Provider>
  );
}

export default App;
