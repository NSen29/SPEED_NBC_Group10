import { TDD } from './pages/TDD';
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NotFoundPage from "./pages/404";
import NavigationBar from './components/NavigationBar'
import React from 'react'
import ReactDOM from 'react-dom'


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
        Route exact path = "/"
        component = { Home }
        />  <
        Route exact path = "/SE-Practice"
        component = { SEPractice }
        />  <
        Route exact path = "/Submit-Article"
        component = { SubmitArticle }
        />  <
        Route exact path = "/PageNotFound"
        component = { NotFoundPage }
        /> < /
        div > <
        /Router >);

    }

    export default App;