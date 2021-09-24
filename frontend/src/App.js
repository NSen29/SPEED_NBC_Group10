import { TDD } from './pages/TDD';
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFoundPage from "./pages/NotFoundPage";
import NavigationBar from './components/NavigationBar'
import React from 'react'
import ReactDOM from 'react-dom'
<<<<<<< HEAD

=======
import { AddBox, ArrowDownward } from "@material-ui/icons";
import { Table } from './Table';
>>>>>>> parent of aaffd3e (Trial Frontend)

function App() {
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
<<<<<<< HEAD
        />  <
        Route component = { NotFoundPage }
=======
       // />  <
       // Route component = { NotFoundPage }
>>>>>>> parent of aaffd3e (Trial Frontend)
        /> <
        /Switch> < /
        div > <
        /Router >);

    }

<<<<<<< HEAD
    export default App;
=======
    export default App;
>>>>>>> parent of aaffd3e (Trial Frontend)
