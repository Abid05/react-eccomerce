<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

=======
import React from "react";
import Recipe from "./components/recipe/Recipe";

const App = () => {
  return (
    <div>
      <Recipe />
    </div>
  );
};
>>>>>>> 4669fe9081907f788684d16c00faf10f2dddcbdf
export default App;
