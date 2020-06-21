import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

const darkBackgroud = {

  // color: 'bisque',
  // backgroundColor: '#202429',

};

function App() {
  return (
    <div style={darkBackgroud}>
      <Router>
        <Navbar />
        <br/>
        <div className="container">
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create"component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    </div>
  );
}

export default App;
