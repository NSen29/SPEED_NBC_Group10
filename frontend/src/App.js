<<<<<<< HEAD
import { TDD } from './pages/TDD';
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import NavigationBar from './components/NavigationBar'
import React from 'react'
import ReactDOM from 'react-dom'
=======
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { Table } from './Table';
>>>>>>> main

function App() {
<<<<<<< HEAD
    return ( <
        Router >
        <
        Route exact path = "/TDD"
        component = { TDD }
        />  <
        NavigationBar / >
        <
        div className = 'max-w-screen-md mx-auto pt-20' >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Home }
        />  <
        Route exact path = "/SE-Practice"
        component = { SEPractice }
        />  <
        Route exact path = "/Submit-Article"
        component = { SubmitArticle }
       // />  <
       // Route component = { NotFoundPage }
        /> <
        /Switch> < /
        div > <
        /Router >);

    }

    export default App;
=======
  return (
    <div className="App">
      <h2>React-App</h2>
      <Table/>
    </div>
  );
}

export default App;
>>>>>>> main
